import "./Form.css";
import React from "react";
import axios from "axios";

const Form = (props) => {
  const REGISTER_URI = "https://localhost:8080/users/add";

  const [state, setState] = React.useState({
    firstName: {
      value: "",
      error: null,
    },
    lastName: {
      value: "",
      error: null,
    },
    dateOfBirth: {
      value: "",
      error: null,
    },
    cpf: {
      value: "",
      error: null,
    },
    rg: {
      value: "",
      error: null,
    },
    mothersName: {
      value: "",
      error: null,
    },
  });

  const treatCpf = (e) => {
    if (e.target.name === "cpf" && e.target.value.length === 11) {
      let s = e.target.value;
      e.target.value =
        s.slice(0, 3) +
        "." +
        s.slice(3, 6) +
        "." +
        s.slice(6, 9) +
        "-" +
        s.slice(9, 11);
    }
  };

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: { value: e.target.value, error: null },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      firstName: state.firstName.value,
      lastName: state.lastName.value,
      dateOfBirth: state.dateOfBirth.value,
      cpf: state.cpf.value,
      rg: state.rg.value,
      mothersName: state.mothersName.value,
    };

    axios
      .post(REGISTER_URI, payload)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          // props.history.push("/home");
          console.log("Feito!");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <formgroup className="form__group">
        <label className="form__label" for="name">
          Nome:{" "}
        </label>
        <input
          className="form__input"
          type="text"
          placeholder="Digite seu nome!"
          id="name"
          name="firstName"
          onChange={handleChange}
          value={state.firstName.value}
          required
          autoComplete="false"
        />
      </formgroup>
      <formgroup className="form__group">
        <label className="form__label" for="surname">
          Sobrenome:{" "}
        </label>
        <input
          className="form__input"
          type="text"
          placeholder="Digite seu sobrenome!"
          id="surname"
          name="lastName"
          onChange={handleChange}
          value={state.lastName.value}
          required
        />
      </formgroup>
      <formgroup className="form__group">
        <label className="form__label" for="dateOfBirth">
          Data de Nascimento:{" "}
        </label>
        <input
          className="form__input"
          type="date"
          id="dateOfBirth"
          name="dateOfBirth"
          onChange={handleChange}
          value={state.dateOfBirth.value}
          required
        />
      </formgroup>
      <formgroup className="form__group">
        <label className="form__label" for="cpf">
          CPF:{" "}
        </label>
        <input
          className="form__input"
          type="text"
          id="cpf"
          name="cpf"
          onChange={handleChange}
          onBlur={treatCpf}
          value={state.cpf.value}
          required
        />
      </formgroup>
      <formgroup className="form__group">
        <label className="form__label" for="rg">
          RG:{" "}
        </label>
        <input
          className="form__input"
          type="text"
          id="rg"
          name="rg"
          onChange={handleChange}
          value={state.rg.value}
          required
        />
      </formgroup>
      <formgroup className="form__group">
        <label className="form__label" for="mothersName">
          Nome da Mãe:{" "}
        </label>
        <input
          className="form__input"
          type="text"
          id="motherName"
          name="mothersName"
          onChange={handleChange}
          value={state.mothersName.value}
          required
        />
      </formgroup>
      <button className="btn btn--primary">Registrar!</button>
    </form>
  );
};

export default Form;
