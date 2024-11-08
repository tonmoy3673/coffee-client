import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";

const Main =()=>{
    return (
        <div>
            
            <div className="px-5 lg:px-12">
            <Navbar/>
            <Outlet/>
            </div>
            <Footer/>
        </div>
    )
};

export default Main;
