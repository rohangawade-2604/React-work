import { useState } from "react";
import MyContext from "./serviceContext";

const ServiceData = (props) => {

    const initialState = {
        "name" : "Rngfires",
        "emails": "rngfires@gmail.com",
        "pass": "yoursrng"

    }

    // usestate is to manage the state
    
    const [state, setState] = useState(initialState);

    return(

        <MyContext.Provider value={state}>
            {props.children}
        </MyContext.Provider>
    );
}

export default ServiceData