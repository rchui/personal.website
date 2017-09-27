import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Facts from './Facts/Facts';
import About from './About/About';
import Footer from '../Footer/Footer';
import './Landing.css';

let links = [
    ["Resume", "/resume"],
    ["Projects", "/projects"],
    ["Recognition", "/recognition"],
    ["Contact", "/contact"]
]

class Landing extends Component {
    render() {
        return(
            <div className="Landing">
                <div className="hero is-large">
                    <div className="hero-head">
                        <header className="nav">
                            <div className="container">
                                <div className="nav-left">
                                    <Link to="/" className="nav-item"><h1 className="title lighten"><strong>RC</strong></h1></Link>
                                </div>
                                <div className="nav-right">
                                    {links.map((value, index) => {
                                        return(
                                            <Link to={value[1]} className="nav-item" key={index}><span className="lighten"><strong>{value[0]}</strong></span></Link>
                                        );
                                    })}
                                </div>
                            </div>
                        </header>
                    </div>
                    <div className="hero-body">
                        <div className="container">
                            <div className="title is-1 name-title is-light lighten">STUDENT. DEVELOPER.</div>
                            <div className="subtitle lighten">Just a small fish trying to change the world.</div>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <div className="container">
                        <span className="icon">
                            <i className="fa fa-chevron-down is-large"></i>
                        </span>
                    </div>
                </div>
                <Facts />
                <About />
                <Footer />
            </div>
        );
    }
}

export default Landing;