import { useContext } from "react";
import MyContext from "./serviceContext";

const Home = () => {
    const data = useContext(MyContext)
     return (
        <>
        <h1>Home Page</h1>
        <p>Service Name: {data.name}</p>
        <p>Service Emails is : {data.email}</p>
        <p>Service password is : {data.pass}</p>
        </>
     )
}

export default Home;