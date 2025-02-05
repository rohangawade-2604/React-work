import Experience from "./propsexperience";
import { EXP } from "./data";


const ExperienceList = () => {
    return (
        
        <div className="container my-5 d-flex">

            <div className="row m-3" style={{width : "700px", height:"300px"}}>
                {/* <h1 className="text-center">Experience</h1> */}
                <img src="https://th.bing.com/th/id/OIP.GPFEY6kfgxbsja6gmrW6rwHaE7?w=272&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7"></img>
            </div>

            <div className="row">
                {
                   EXP.map((data) =>(
                    <Experience aprops = {data}/>
                   )
                )
                }
            </div>
        </div>
        


    );
}

export default ExperienceList;