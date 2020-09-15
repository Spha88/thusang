import React from 'react';
import About from '../../About/About';
import ContactUs from '../../ContactUs/ContactUs';
import Help from '../../Help/Help';
import Hero from '../../Hero/Hero';
import HowToHelp from '../../HowToHelp/HowToHelp';
import Mission from '../../Mission/Mission';
import Footer from '../../Footer/Footer';

const Home = () => {
    return (
        <div className="page">
            <Hero />
            <About />
            <Mission />
            <Help />
            <HowToHelp />
            <ContactUs />
            <Footer />
        </div>
    )
}

export default Home
