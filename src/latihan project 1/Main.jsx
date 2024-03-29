import React from 'react';
import Navbar from './Navbar';
import LandingPage from './LandingPage';
import OurClient from './OurClient';
import Unsent from './Unsent';
import Helping from './Helping';
import Design from './Design';
import TeamSmith from './TeamSmith';
import Marketing from './Marketing';
import Footer from './Footer';
export default function () {
    return (
        <div>
            <Navbar />
            <LandingPage />
            <OurClient />
            <Unsent />
            <Helping />
            <Design />
            <TeamSmith />
            <Marketing />
            <Footer />
        </div>
    )
}