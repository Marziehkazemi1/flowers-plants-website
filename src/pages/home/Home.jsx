import React from "react";
import FAQS from "../../components/FAQs";
import Flowers from "../../components/Flowers";
import MainHeader from "../../components/MainHeader";
import Testimonials from "../../components/Testimonials";
import './home.css'

const Home = () => {
    return(
        <>
        <MainHeader />
        <Flowers />
        <FAQS />
        <Testimonials />
        
        </>
    )
}

export default Home;