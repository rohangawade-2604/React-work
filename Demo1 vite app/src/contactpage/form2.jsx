import axios from "axios";
import { useState } from "react"

const FormList2 = () => {
    const [name2, setName2] = useState("");
    const [email2, setEmail2] = useState("");
    const [message2, setMessage2] = useState("");

    const addcontact2 = (f) => {
        f.preventDefault();
        axios.post("http://localhost:3000/contact2", { name2, email2, message2 })
            .then(() => {
                alert("Well Done..." + name2)
            })
            .catch(() => {
                console.error("Error in the form..." + err);
            })

    }


    return (
        <>
            <form action="" onSubmit={addcontact2}>
                <input type="text" name="name" placeholder="Enter the name"
                    value={name2}
                 onChange={(e) => setName2(e.target.value)}
            /><br /><br />

                <input type="text" name="email" placeholder="Enter the Email"
                    value={email2}
                    onChange={
                        (f) => setEmail2(f.target.value)
                    } /><br /><br />

                <textarea name="message" id=""
                    value={message2}
                    onChange={
                        (f) => setMessage2(f.target.value)
                    }>enter the message</textarea><br /><br />

                <a href="" className="btn" type="button">click Me</a>


            </form>
        </>
    )
}

export default FormList2