import { NavLink } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__item">
                    <NavLink className="nav__link" to="/todos">
                        Todos
                    </NavLink>
                </li>
                <li>
                    <NavLink className="nav__link" to="/figures">
                        Figures
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};
