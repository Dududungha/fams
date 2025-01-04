import React, { useState, useEffect } from 'react';
import './Sidebar.css';

import { ReactComponent as Hamburger } from './hamburger.svg';

function Sidebar() {
    const [showSidebar, setShowSidebar] = useState(false);
    const [firstClick, setFirstClick] = useState(false);

    const handleHamburgerClicked = () => {
        setFirstClick(true);
        setShowSidebar(showSidebar => !showSidebar);
    };

    return (
        <div>
            <div className={`hamburger ${firstClick && (showSidebar ? "shown" : "hidden")}`} onClick={ handleHamburgerClicked }>
                <Hamburger />
            </div>
            <div className={`Sidebar ${firstClick && (showSidebar ? "shown" : "hidden")}`}>
                <div className="sidebar-text">
                    <a href="#title">bit-byte</a>
                </div>
                <hr />
                <div className="sidebar-text">
                    <a href="#intro">Intro</a>
                </div>
                <div className="sidebar-text">
                    <a href="#process">Process</a>
                </div>
                <div className="sidebar-text">
                    <a href="#join-us">Join Us</a>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;