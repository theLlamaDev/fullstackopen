function Content(props) {
    
    let elements = props.parts.map(prop => {
            return (
                <div>
                    <p>{prop.name} {prop.exercises}</p>
                </div>
            )
        }
    );

    return elements;
}

export default Content;