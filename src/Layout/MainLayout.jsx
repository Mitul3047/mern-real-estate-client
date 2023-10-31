import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";


const MainLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;