import React, { Component } from 'react';
import './About.css';

class About extends Component {
    render() {
        return(
            <div className="About">
                <div className="section">
                    <div className="container">
                        <div className="box">
                            <article className="media">
                                <figure className="media-left">
                                    <p className="image">
                                        <img src="/Users/Ryan/GitHub/personal.website/src/assets/head_shot.jpg" alt="head_shot.jpg"/>
                                    </p>
                                </figure>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;