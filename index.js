const app = require('express')();
const server = require("http").createServer(app);
const cors = require('cors');
const PORT = process.env.PORT || 5000

// Creating socket server
const io = require("socket.io")(server, {
    cors: {
        origin: "*",
        method: ["GET", "POST"]
    }
});

app.use(cors());

app.get("/", (req, res) => {
    res.send("Node is running as rabbit");
});

// using socket to connect with server
io.on("connection", (socket) => {
    socket.emit("swayam", socket.id);

    socket.on("disconnect", () => {
        socket.broadcast.emit("videoKatham");
    });

    socket.on("callUser", ({ userToCall, signalData, from, name }) => {
        io.to(userToCall).emit("callUpayogakarta", { signal: signalData, from, name });
    });

    socket.on("msgUpayogakarta", ({ name, to, msg, sender }) => {
        io.to(to).emit("msgMilGaya", { name, msg, sender });
    });

    socket.on("answerCall", (data) => {
        io.to(data.to).emit("callAccepted", data);
    });
    socket.on("endCall", ({ id }) => {
        io.to(id).emit("endCall");
    });
})

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));