import React from "react";

class ClassComponent extends React.Component{

    constructor() {
        super();

        this.state = {
            name : "Rngfires",
            subject : "Webdeveloper",
        }
        this.changeName =() =>{
            this.setState({
                name: "Ronnie-2",
                subject: "Node.js"
            })
        }

    }


render(){
    return(
        <>
        <h1> State in React </h1>
        <p>Tony Stark is the wealthy son of industrialist and weapons manufacturer Howard Stark and his wife, Maria. Tony grew up a genius with a brilliant mind for technology and inventions and, naturally, followed in his father’s footsteps, inheriting Stark Industries upon his parents’ untimely death. Tony designed many weapons of war for Stark Industries, far beyond what any other company was creating, while living the lifestyle of a bon vivant
        <br/>
        Fate would take a dark turn for Tony Stark once he decided to consult on a weapons contract overseas in enemy terrain. An improvised explosive device exploded underneath Tony’s transport, and he was brought to the brink of death.
        </p>  

        <h1>Hi I am {this.state.name}. Currently I am Learning {this.state.subject}</h1>

        <button onClick={this.changeName}>Click ME</button>

        </>
              

    );
}

}

export default ClassComponent;