import React, { Component } from 'react';
import Profile from '../static/images/profile.jpg';

export default class Header extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <React.Fragment>
                <header id="home">
                    <nav id="nav-wrap">
                        <a className="mobile-btn" href="#nav-wrap" title="Show Navigation">Show Navigation</a>
                        <a className="mobile-btn" href="#" title="Hide Navigation">Hide Navigation</a>
                        <ul id="nav" className="nav">
                            <li className="current">
                                <a className="smoothscroll" href="#home">Home</a>
                            </li>
                            <li>
                                <a className="smoothscroll" href="#portfolio">Portfolio</a>
                            </li>
                            <li>
                                <a className="smoothscroll" href="#resume">Resume</a>
                            </li>
                            <li>
                                <a className="smoothscroll" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="row banner">
                        <div className="banner-text">
                            <div className="columns">
                                <img className="profile-pic" src={Profile} alt="profile"/>
                            </div>
                            <h1 className="responsive-headline">I am {resumeData.name}.</h1>
                            <h3 className="role-description">
                                {resumeData.roleDescription}
                            </h3>
                            <hr/>
                            <ul className="social">
                                {
                                    resumeData.socialLinks && resumeData.socialLinks.map(item => {
                                        return (
                                            <li key={item.name}>
                                                <a href={item.url} target="">
                                                    <i className={item.className}></i>
                                                </a>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <p className="scrolldown">
                        <a className="smoothscroll" href="#about">
                            <i className="icon-down-circle"></i>
                        </a>
                    </p>
                </header>
            </React.Fragment>
        );
    }
}