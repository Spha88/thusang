import React from 'react';
import About from '../../About/About';
import ContactUs from '../../ContactUs/ContactUs';
import Help from '../../Help/Help';
import Hero from '../../Hero/Hero';
import HowToHelp from '../../HowToHelp/HowToHelp';
import Mission from '../../Mission/Mission';

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Mission />
            <Help />
            <HowToHelp />
            <ContactUs />
        </>
    )
}

export default Home
