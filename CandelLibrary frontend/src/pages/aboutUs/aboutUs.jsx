import {useLocation} from "react-router-dom";
import HomeNavbar from "../component/homenavbar.jsx";

const AboutUs = () =>{
    const location = useLocation();
    const currentLocation = location.pathname;

    return(
        <>
            <HomeNavbar activePage={currentLocation} />
        </>
    )
}
export default AboutUs