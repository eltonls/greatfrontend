import "./List.css";
import ListItem from "./ListItem";

const List = (props) => {
  return (
    <ul className="list">
      {props.users.map((element) => {
        <ListItem
          firstName={element.firstName}
          lastName={element.lastName}
          birthDate={element.birthDate}
          cpf={element.cpf}
          rg={element.rg}
        />;
      })}
    </ul>
  );
};

export default List;