import ServiceCard from "./servicecard";
import './service.css'
import { useEffect, useState } from "react";
import axios from "axios";


const ServiceList = () => {

    const [service, setService] = useState([]);

    const fetchService = (setService) => {
        axios.get("http://localhost:3000/Service")
            .then((res) => {
                setService(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });

    }

    useEffect((res) => {
        fetchService(setService)
    }, []);


    // const service = [
    //     {
    //         "id" : "s-1",
    //         "name":"service-1",
    //         "desc" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    //     },

    //     {
    //         "id" : "s-3",
    //         "name":"service-4",
    //         "desc" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    //     }


    // ]


    return (
        <>
            <div className="Service-page">

                <div className="content-part">
                    <h1>My services</h1>
                </div>

                <div className="serv">
                    <ul className="service-block">
                        {
                            service.length > 0 ?    
                                (
                                    service.map((serviceData) => (
                                        <li key={serviceData.id}>
                                            <ServiceCard
                                                name={serviceData.name}
                                                description={serviceData.desc}
                                            />
                                        </li>
                                    ))
                                ) : (
                                    <h2 className='h2-text'>service Items not founds</h2>
                                )
                        }
                    </ul>
                </div>
            </div>
        </>
    );
}


export default ServiceList;