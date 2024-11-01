import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import Navbar from "../Components/NavBar";

const Routerrs = () =>{
    return (
        <div>
            <Navbar />
            <div className="w-full">
            <Routes>
                <Route path="/" element={<h1>Home</h1>} />
                <Route path="/Home" element={<Home/>}/>
                <Route path="*" element={<h1>Page not Found 404</h1>} />
            </Routes>
            </div>
        </div>
    );
};

export default Routerrs; 