import React from 'react';
import Common from './Common';
import web from '../images/about.png'

const About = () => {
    return (
        <>
            <Common
                text="A Team of talented developers "
                imgsrc={web}
                visit="/contact"
                btnText="Contact Us"
            />
        </>
    );
}

export default About;