function ServiceCard(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <p>{props.description}</p>
        </div>
    );
}

export default ServiceCard;