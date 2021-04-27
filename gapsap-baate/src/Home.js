import { useEffect } from "react";

const Home = () => {
    useEffect(() => {
        if (!navigator.onLine) alert("Connect to internet!");
    }, [navigator]);
    
    return (
        <p>Home page</p>
    )
}

export default Home;