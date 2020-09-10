import React from 'react';
import Common from './Common';
import web from '../images/home.png'

const Home = () => {
    return (
        <>
        <Common 
        text="Grow your bussiness with "
        imgsrc={web}
        visit="/services"
        btnText="Get Started"
        />
        </>
    );
}

export default Home;