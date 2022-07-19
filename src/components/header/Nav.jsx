import "./Nav.css";
import { NavLink as Link } from "react-router-dom";

const Nav = () => {

    return (
        <nav className="nav">
           <ul className="nav__menu">
                <li className="nav__item">
                   <Link to="/">
                        Registrar
                    </Link>
                </li>
                <li className="nav__item">
                    <Link to="/register-list">
                        Listar Registros
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;
