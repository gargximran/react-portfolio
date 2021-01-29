import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {activeLoader, deactivateLoader, donePreloader} from "../redux/actions/preloader";
import {connect} from "react-redux";

class Service extends Component {

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

        const services = [
            {
                name: 'Frontend',
                detail: 'Build frontend awesome frontend application'
            },
            {
                name: 'Backend',
                detail: 'Build backend application'
            },
            {
                name: 'API Building',
                detail: 'Build api for your frontend cross platform'
            },
            {
                name: 'Server Application',
                detail: 'Build server as need cross platform'
            },
            {
                name: 'Micro Service',
                detail: 'Work as a part of large project with micro-service architecture'
            }

        ];

        return (
            <>
                {
                    this.props.loader.loader ?
                        '' :
                        <section className="site-wrapper">
                            <div className="pt-table">
                                <div className="pt-tablecell page-services relative">
                                    <Link to="/" className="page-close"><i className="tf-ion-close"></i></Link>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-xs-12 col-lg-offset-1 col-lg-10">
                                                <div className="page-title text-center">
                                                    <h2>Awesome <span className="primary">Services</span> <span
                                                        className="title-bg">Services</span></h2>
                                                    <p>Some awesome service list for your desire. Feel free to ask for out of the box. Let see how can I help you out!</p>
                                                </div>

                                                <div className="hexagon-menu services clear">
                                                    {
                                                        services.map(service => {
                                                            return (
                                                                <div className="service-hex" key={service.name}>
                                                                    <svg viewBox="0 0 173.20508075688772 200" height="200" width="174"
                                                                         version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                                        <path
                                                                            d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
                                                                            fill="#1e2530"></path>
                                                                    </svg>

                                                                    <div className="content">
                                                                        <div className="icon">
                                                                            <i className="et-line icon-lightbulb"></i>
                                                                        </div>
                                                                        <h4>{service.name}</h4>
                                                                        <p>{service.detail}</p>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })
                                                    }


                                                </div>

                                            </div>


                                        </div>

                                    </div>


                                    <nav className="clear">
                                        <div className="container mt-3 mb-3">
                                            <div className="flex flex-middle space-between">
                                                <span className="prev-page"><Link to="/about"
                                                                               className="link">&larr; Prev Page</Link></span>
                                                <span className="copyright hidden-xs">Copyright &copy; 2021 Imran Hossain, All Rights Reserved.</span>
                                                <span className="next-page"><Link to="/resume" className="link">Next Page &rarr;</Link></span>
                                            </div>
                                        </div>

                                    </nav>


                                </div>

                            </div>

                        </section>
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

export default connect(stateToProps, dispatchToProps)(Service);
