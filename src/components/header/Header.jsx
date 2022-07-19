import "./Header.css";
import Nav from "./Nav";

const Header = () => {


    return (
        <header className="header">
            <h1 className="header-primary">
                <span className="header-primary__span">GRE</span>at
            </h1>
            <Nav />
        </header>
    )
}

export default Header;
