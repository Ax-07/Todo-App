import { NavLink } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";

export const Header = () => {
    return (
        <header className="header">
            <NavLink className="header__logo" to="/">
                Todo App
            </NavLink>
            <Navbar />
        </header>
    );
};
