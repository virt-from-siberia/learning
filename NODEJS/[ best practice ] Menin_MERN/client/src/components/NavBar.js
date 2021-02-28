import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function NavBar() {
    const history = useHistory();
    const auth = useContext(AuthContext);

    const logoutHandler = (evt) => {
        evt.preventDefault();
        auth.logout();
        history.push("./");
    };

    return (
        <nav>
            <div
                className='nav-wrapper blue darken-4'
                style={{ padding: "0 2rem" }}
            >
                <span href='/' className='brand-logo'>
                    Сокрашение ссылок
                </span>
                <ul id='nav-mobile' className='right hide-on-med-and-down'>
                    <li>
                        <NavLink to='/create'>Создать</NavLink>
                    </li>
                    <li>
                        <NavLink to='/links'>Ссылки</NavLink>
                    </li>
                    <li>
                        <a href='/' onClick={logoutHandler}>
                            Выйти
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
