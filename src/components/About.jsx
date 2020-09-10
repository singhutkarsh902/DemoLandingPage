import React from 'react';
import Common from './Common';
import web from '../images/about.png'

const About = () => {
    return (
        <>
            <Common
                text="Welcome to About Page "
                imgsrc={web}
                visit="/contact"
                btnText="Contact Us"
            />
        </>
    );
}

export default About;