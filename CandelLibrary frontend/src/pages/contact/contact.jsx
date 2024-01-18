import {useLocation} from "react-router-dom";
import HomeNavbar from "../component/homenavbar.jsx";

const Contact = () =>{
    const location = useLocation();
    const currentLocation = location.pathname;

    return(
        <>
            <HomeNavbar activePage={currentLocation} />
        </>
    )
}
export default Contact