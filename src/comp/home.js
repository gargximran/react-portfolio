import React, {Component} from 'react';
import imranImage from '../assets/img/imran-hossain.png'
import bannerImage from '../assets/img/banner.jpg'
import { connect } from 'react-redux'
import {activeLoader, deactivateLoader, donePreloader} from "../redux/actions/preloader";
import {Link} from "react-router-dom";

class Home extends Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.deactivateLoader();
        }, 1000);
        setTimeout(() => {
            this.props.donePreloader();
        }, 2000);

    }

    componentWillUnmount() {
        this.props.activeLoader();
    }

    render() {
        return (
            <>
                {
                    this.props.loader.loader ?
                        '' :
                        <main className="site-wrapper">
                        <div className="pt-table">
                            <div className="pt-tablecell page-home relative"
                                 style={{backgroundImage: 'url(' + bannerImage +')'}}>
                                <div className="overlay"></div>

                                <div className="container">
                                    <div className="row">
                                        <div className="col-xs-12 col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8">
                                            <div className="page-title home text-center">
                                                <img src={imranImage} alt="" style={{width: '100%'}}></img>
                                                <p>A web programmer from Bangladesh, who focuses on modern web application &amp; A freelance programmer focusing on remarkable &amp; clean
                                                    workflow.</p>
                                            </div>

                                            <div className="hexagon-menu clear">
                                                <div className="hexagon-item">
                                                    <div className="hex-item">
                                                        <div></div>
                                                        <div></div>
                                                        <div></div>
                                                    </div>
                                                    <div className="hex-item">
                                                        <div></div>
                                                        <div></div>
                                                        <div></div>
                                                    </div>
                                                    <Link to="/welcome" className="hex-content">
                                                        <span className="hex-content-inner">
                                                            <span className="icon">
                                                                <i className="tf-dial"></i>
                                                            </span>
                                                            <span className="title">Welcome</span>
                                                        </span>
                                                        <svg viewBox="0 0 173.20508075688772 200" height="200" width="174"
                                                             version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
                                                                fill="#1e2530"></path>
                                                        </svg>
                                                    </Link>
                                                </div>
                                                <div className="hexagon-item">
                                                    <div className="hex-item">
                                                        <div></div>
                                                        <div></div>
                                                        <div></div>
                                                    </div>
                                                    <div className="hex-item">
                                                        <div></div>
                                                        <div></div>
                                                        <div></div>
                                                    </div>
                                                    <Link to="/about" className="hex-content">
                                                        <span className="hex-content-inner">
                                                            <span className="icon">
                                                                <i className="tf-profile-male"></i>
                                                            </span>
                                                            <span className="title">About</span>
                                                        </span>
                                                        <svg viewBox="0 0 173.20508075688772 200" height="200" width="174"
                                                             version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
                                                                fill="#1e2530"></path>
                                                        </svg>
                                                    </Link>
                                                </div>
                                                <div className="hexagon-item">
                                                    <div className="hex-item">
                                                        <div></div>
                                                        <div></div>
                                                        <div></div>
                                                    </div>
                                                    <div className="hex-item">
                                                        <div></div>
                                                        <div></div>
                                                        <div></div>
                                                    </div>
                                                    <Link to="/service" className="hex-content">
                                            <span className="hex-content-inner">
                                                <span className="icon">
                                                    <i className="tf-tools-2"></i>
                                                </span>
                                                <span className="title">Services</span>
                                            </span>
                                                        <svg viewBox="0 0 173.20508075688772 200" height="200" width="174"
                                                             version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
                                                                fill="#1e2530"></path>
                                                        </svg>
                                                    </Link>
                                                </div>
                                                <div className="hexagon-item">
                                                    <div className="hex-item">
                                                        <div></div>
                                                        <div></div>
                                                        <div></div>
                                                    </div>
                                                    <div className="hex-item">
                                                        <div></div>
                                                        <div></div>
                                                        <div></div>
                                                    </div>
                                                    <Link to="/resume" className="hex-content">
                                            <span className="hex-content-inner">
                                                <span className="icon">
                                                    <i className="tf-tools"></i>
                                                </span>
                                                <span className="title">Resume</span>
                                            </span>
                                                        <svg viewBox="0 0 173.20508075688772 200" height="200" width="174"
                                                             version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
                                                                fill="#1e2530"></path>
                                                        </svg>
                                                    </Link>
                                                </div>
                                                <div className="hexagon-item">
                                                    <div className="hex-item">
                                                        <div></div>
                                                        <div></div>
                                                        <div></div>
                                                    </div>
                                                    <div className="hex-item">
                                                        <div></div>
                                                        <div></div>
                                                        <div></div>
                                                    </div>
                                                    <Link to="/works" className="hex-content">
                                            <span className="hex-content-inner">
                                                <span className="icon">
                                                    <i className="tf-briefcase2"></i>
                                                </span>
                                                <span className="title">Works</span>
                                            </span>
                                                        <svg viewBox="0 0 173.20508075688772 200" height="200" width="174"
                                                             version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
                                                                fill="#1e2530"></path>
                                                        </svg>
                                                    </Link>
                                                </div>
                                                <div className="hexagon-item">
                                                    <div className="hex-item">
                                                        <div></div>
                                                        <div></div>
                                                        <div></div>
                                                    </div>
                                                    <div className="hex-item">
                                                        <div></div>
                                                        <div></div>
                                                        <div></div>
                                                    </div>
                                            {/*        <a href="testimonials.html" className="hex-content">*/}
                                            {/*<span className="hex-content-inner">*/}
                                            {/*    <span className="icon">*/}
                                            {/*        <i className="tf-chat"></i>*/}
                                            {/*    </span>*/}
                                            {/*    <span className="title">Testimonials</span>*/}
                                            {/*</span>*/}
                                            {/*            <svg viewBox="0 0 173.20508075688772 200" height="200" width="174"*/}
                                            {/*                 version="1.1" xmlns="http://www.w3.org/2000/svg">*/}
                                            {/*                <path*/}
                                            {/*                    d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"*/}
                                            {/*                    fill="#1e2530"></path>*/}
                                            {/*            </svg>*/}
                                            {/*        </a>*/}
                                                </div>
                                                <div className="hexagon-item">
                                                    <div className="hex-item">
                                                        <div></div>
                                                        <div></div>
                                                        <div></div>
                                                    </div>
                                                    <div className="hex-item">
                                                        <div></div>
                                                        <div></div>
                                                        <div></div>
                                                    </div>
                                                    <Link to="/contact" className="hex-content">
                                            <span className="hex-content-inner">
                                                <span className="icon">
                                                    <i className="tf-envelope2"></i>
                                                </span>
                                                <span className="title">Contact</span>
                                            </span>
                                                        <svg viewBox="0 0 173.20508075688772 200" height="200" width="174"
                                                             version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
                                                                fill="#1e2530"></path>
                                                        </svg>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>


                                    </div>

                                </div>


                            </div>

                        </div>

                    </main>
                }


            </>
        );
    }
}

const stateToProps = state => {
    return {
        loader: state.loader
    }
}

const dispatchToProps = dispatch => {
    return {
        activeLoader: () => dispatch(activeLoader()),
        deactivateLoader: () => dispatch(deactivateLoader()),
        donePreloader: () => dispatch(donePreloader())

    }
}

export default connect(stateToProps, dispatchToProps)(Home);