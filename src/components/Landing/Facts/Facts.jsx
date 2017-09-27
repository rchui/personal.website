import React, { Component } from 'react';

import './Facts.css';

class Facts extends Component {
    render() {
        return(
            <div className="Facts">
                <div className="section">
                    <div className="container">
                        <h1 className="title is-2 facts-title highlight1">A Few Things About Me</h1>
                        <div className="columns">
                            <div className="column is-2"></div>
                            <div className="column">
                            I love college football (Go Huskies!), I have a dog named Pepper, my favorite number is 2, I'm not a huge fan of IPAs, I play video games like it's my life, avid hicker in the summer and snowboarder in the winter, my favorite food is chicken schnitzel, and I've never broken a bone in my body (lucky?).
                            </div>
                            <div className="column is-2"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Facts;