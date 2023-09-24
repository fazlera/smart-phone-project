import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Header/Navbar/Navbar";
import { useEffect } from "react";

const MainLayout = () => {

    const loc = useLocation()
    useEffect(() => {
        if(loc.pathname === '/')
            document.title= `phone Name`
        else{
              document.title = `phone${loc.pathname.replace('/','-')}`
        }
        if(loc.state){
            document.title = `phone${loc.state}`
        }
    },[loc])
    return (
        <div className="w-10/12 mx-auto px-10">
            <Navbar></Navbar>
           <div className="mt-20 ">
           <Outlet></Outlet>
           </div>
        </div>
    );
};

export default MainLayout;