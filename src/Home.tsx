import React from 'react';

import Sidebar from './Sidebar.tsx';
import './Home.css';

function Home() {
    return (
        <div className="Home">
            <Sidebar />
            <div id="title" className="section dark">
                <div id="title-text">
                bit-byte
                </div>
            </div>
            <div id="intro" className="section light">
                <div className="section-content">
                <div className="h1">
                    What is bit-byte?
                </div>
                <div className="p">
                    bit-byte is ACM's big little program. It is a great opportunity to socialize, meet new people, get more involved, and make lifelong friends.
                </div>
                </div>
            </div>
            <div id="process" className="section dark">
                <div className="section-content">
                <div className="h1">
                    Process
                </div>
                <div className="p">
                    
                </div>
                </div>
            </div>
            <div id="join-us" className="section light">
                <div className="section-content">
                <div className="h1">
                    Join us!
                </div>
                <div className="p">
                    Discord is our primary source of communication, so make sure to join our Discord and give yourself the bit-byte role to keep up with all of our announcements!
                </div>
                </div>
            </div>
        </div>
    )
}

export default Home;