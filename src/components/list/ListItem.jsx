

const ListItem = (props) => {
    return (
        <li className="list__item">
            <div className="list__card">
                <h3>{props.firstName + props.lastName}</h3>
                <ul className="list--sub">
                    <li className="list__item--sub">{props.birthDate}</li>
                    <li className="list__item--sub">{props.cpf}</li>
                    <li className="list__item--sub">{props.rg}</li>
                    <li className="list__item--sub">{props.mothersName}</li>
                </ul>
            </div>
        </li>
    )
}

export default ListItem;