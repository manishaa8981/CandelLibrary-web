import HomeNavbar from "../component/HomeNavbar.jsx";
import { useLocation } from "react-router-dom";

const Homepage = () => {
    const location = useLocation(); // Use useLocation to get the current location
    const currentLocation = location.pathname;

    return (
        <div className={"home"}>
            <HomeNavbar activePage={currentLocation} />
        </div>
    );
};

export default Homepage;
