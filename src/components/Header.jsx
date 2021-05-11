import {NavLink} from "react-router-dom";

export const Header = ({setAuth}) => {
    return (<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <NavLink className={"navbar-brand"} to={"/"}><img width={'60px'} src="kaif.jpg"/></NavLink>

            <div className="navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink className={"nav-link"} to={"/dishes"}>Меню</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={"nav-link"} to={"/orders"}>Заказы</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={"nav-link"} to={"/info"}>Об авторе</NavLink>
                    </li>
                </ul>
                <div style={{marginLeft: "auto"}}>
                    <NavLink className={"nav-link text-light"} to={"/"}onClick={() => {
                        localStorage.setItem("login", "")
                        setAuth(false)
                    }}>Выйти</NavLink>
                </div>
            </div>
        </div>
    </nav>)
}