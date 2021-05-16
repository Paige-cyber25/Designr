import React from 'react';
import TopNavbar from './Navbar';
import Footer from './Footer';

function JobBoard() {
    return (
        <div>
            <TopNavbar activeC="/jobBoard"/>
            <Footer /> 
        </div>
    );
}

export default JobBoard;