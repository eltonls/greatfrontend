import "./Pages.css";
import List from "../components/list/List";
import axios from "axios";
import React from "react";

const baseURL = "https://localhost:8080/users/getAll";

const RegisterList = () => {
  const [users, setUsers] = React.useState(null);
  const [listExists, setListExists] = React.useState(false);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setUsers(response.data);
      setListExists(true);
    });
  }, []);

  return (
    <section className="section section-registerlist">
        {listExists ? <List users={users} /> : "Banco de dados Vazio!"}
    </section>
  );
};

export default RegisterList;
