import axios from "axios";
import { useState } from "react"

const FormList = () => {

    const [name, setName] = useState('');
    const [Email, setEmail] = useState('');
   const[message, setMessage] = useState('')

    const addcontact = (e) => {


        e.preventDefault();
        axios.post("http://localhost:3000/Contact",{name,Email,message})
        .then(()=>{
            alert("Done..."+message);
        })
        .catch(()=>{
            console.error("Error int the form"+err);
        })
        // alert("done ")

        
    };


    return (
        <>
            <h1>Contact Us</h1>
            <div className="form" >
                <form action="" onSubmit={addcontact}>
                    <label htmlFor="">Name</label>
                    <input type="text" name="name" placeholder="Enter the name"
                    value={name}
                    onChange={(e) => setName(e.target.value)} 
                    />  
                   
                    <br />

                    <label>Email</label>
                    <input type="text" name="Email" placeholder="Enter the Email"
                    value={Email}
                    onChange={(e)=> setEmail(e.target.value)} />
                    <br />


                <textarea name="massage" id=""
                value={message}
                onChange={(e)=> setMessage(e.target.value)}
                ></textarea>

                    <button type="submit">Submit</button>
                </form>


            </div>
        </>
    );
}

export default FormList