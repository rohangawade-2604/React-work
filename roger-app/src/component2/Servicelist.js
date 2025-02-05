import { SER } from "./data2serv";
import Service from "./propsService";
import "./service.css"

const ServiceList = () =>{
    return(

        <div className="container">
            <div className="row">
                <h1 className="text-center">Services</h1>
                <p className="text-center">The best services web pages strike a balance between being informative and trying to elicit a sale.</p>
                <p className="text-center">Going too far in one direction will make you feel like a low-rate wikipedia page, going too far in the other will put you on par with used car salesmen.</p>
            </div>

            <div className="row m-4">
              <div className="container con">
              {
                    SER.map((data1) =>(
                        <Service a = {data1}/>
                    ))
                }
              </div>
            </div>
        </div>
        
    );
}

export default ServiceList;
