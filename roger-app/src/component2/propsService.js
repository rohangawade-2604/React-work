import './props.css'

const Service = (props) => {
    return(
      <div className="container props2">
         <div className=" border border-5 m-2 p-4" style={{width :"400px" }}>
            <h1 className="text-center">{props.a.head1}</h1>
            <p>{props.a.para1}</p>
            <button>{props.a.button1}</button>
        </div>
      </div>
       


    );
}
export default Service;