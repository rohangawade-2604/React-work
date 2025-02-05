import { useContext } from "react";
import MyContext from "./ServiceContext";

const Home2 = () => {
    const data = useContext(MyContext);
    console.log(data);
    
     return (
        <>
        <h1>Home Page</h1>
        <p>Service Name: {data.name}</p>
        <p>Service Emails is : {data.email}</p>
        <p>Service password is : {data.pass}</p>
        </>
     );
}

export default Home2;