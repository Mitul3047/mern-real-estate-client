import { Outlet } from "react-router-dom";


const MainLayout = () => {
    return (
        <div>
            main
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;