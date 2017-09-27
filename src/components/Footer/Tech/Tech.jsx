import React, { Component } from 'react';
import './Tech.css';

let techPaths = [
    ["React", "https://facebook.github.io/react/", "Facebook's JavaScript library for building user interfaces."],
    ["Bulma", "http://bulma.io/", "A modern CSS framework based on Flexbox."],
    ["Font-Awesome", "http://fontawesome.io", "A one-size fits all font, and customizable, scalable vector icons."],
    ["MobX", "https://github.com/mobxjs/mobx", "A simple, scalable and battle tested state management solution."]
]

class Tech extends Component {
    render() {
        return(
            <div className="Tech">
                <div className="section">
                    <div className="container">
                        <h1 className="title is-4 highlight1">This site was built with:</h1>
                        <div className="columns">
                            {techPaths.map((value, index) => {
                                return(
                                    <div className="column">
                                        <a href={value[1]}>
                                            <div className="card">
                                                <header className="card-header">
                                                    <p className="card-header-title contrast">{value[0]}</p>
                                                </header>
                                                <div className="card-content send-left">
                                                    <div className="content">{value[2]}</div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Tech;