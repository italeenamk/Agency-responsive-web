import React from "react";
import Navbar from "../layout/Navbar";
import Bannre from "../layout/Bannre";
import Services from "../layout/Services";
import About from "../layout/About";
import Testmonial from "../layout/Testmonial";
import Social from "../layout/Social";
import Footer from "../layout/Footer";


const Home=()=>{
    return(
        <>
            <Navbar/>
            <Bannre/>
            <Services/>
            <About/>
            <Testmonial/>
            <Social/>
            <Footer/>
        </>
    )
}

export default Home;