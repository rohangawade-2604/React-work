
const Experience = (props) =>{

    return(

        <div className="box border border-3 m-3 p-4" style={{width :"400px" , display:"flex", flexDirection:"column"}}>
            <img src={props.aprops.img} style={{width:"350px"}}/>
            <h1 className="text-center m-3" style={{fontSize:"30px"}}>{props.aprops.head}</h1>
            <p>{props.aprops.description}</p>
            <button className="btn btn-primary mx-auto" >{props.aprops.button}</button>
        </div>

    );
}
export default Experience;