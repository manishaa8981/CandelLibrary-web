import "./homenavbar.css";
import { Link } from "react-router-dom";

const HomeNavbar = ({ activePage }) => {
    return (
        <>
            <nav className={"navbar"}>
                <h1 className="logo">The Candel Library</h1>
                <ul className={"nav-menu"}>
                    <Link to={"/"}><li className={activePage === "/" ? "active" : ""}><a>Home</a></li></Link>
                    <Link to={"/AboutUs"}><li className={activePage === "/AboutUs" ? "active" : ""}><a>About Us</a></li></Link>
                    <Link to={"/Contact"}><li className={activePage === "/Contact" ? "active" : ""}><a>Contact</a></li></Link>
                    <Link to={"/Cart"}><li className={activePage === "/Cart" ? "active" : ""}><a>Cart</a></li></Link>
                    <Link to={"/LoginForm"}><li className={activePage === "/LoginForm" ? "active" : ""}><a>Login</a></li></Link>
                </ul>
            </nav>
        </>
    );
};

export default HomeNavbar;
