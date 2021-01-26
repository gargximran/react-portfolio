import React, {Component} from 'react';
import { connect } from 'react-redux'
import {activeLoader, deactivateLoader, donePreloader} from "../redux/actions/preloader";
import {Link} from "react-router-dom";

import authorImage from '../assets/img/imran-author.png'

class Welcome extends Component {

    componentDidMount() {
        this.props.activeLoader();
        setTimeout(() => {
            this.props.deactivateLoader();
        }, 1000);
        setTimeout(() => {
            this.props.donePreloader();
        }, 2500);

    }

    render() {
        return (
            <main className="site-wrapper">
                <div className="pt-table">
                    <div className="pt-tablecell page-welcome relative">

                        <Link to="/" className="page-close"><i className="tf-ion-close"></i></Link>


                        <div className="author-image-large">
                            <img src={authorImage} alt=""></img>
                        </div>

                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12 col-md-6 col-lg-7">
                                    <div className="page-title">
                                        <h2>Imran <span className="primary">Hossain</span> <span
                                            className="title-bg">About</span></h2>
                                        <p>A web programmer from Bangladesh, who focuses on modern web application &amp; A freelance programmer focusing on remarkable &amp; clean
                                            workflow..</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores repellendus
                                            corporis, tenetur inventore perferendis reprehenderit autem dignissimos non
                                            quos unde eveniet sapiente necessitatibus consequuntur ea ab dolore, minus
                                            nam eaque.</p>
                                    </div>
                                </div>
                            </div>

                        </div>


                        <nav className="page-nav clear">
                            <div className="container">
                                <div className="flex flex-middle space-between">
                                    <span className="prev-page"><Link to="/"
                                                                   className="link">&larr; Prev Page</Link></span>
                                    <span className="copyright hidden-xs">Copyright &copy; 2021 Imran Hossain, All Rights Reserved.</span>
                                    <span className="next-page"><Link to="/"
                                                                   className="link">Next Page &rarr;</Link></span>
                                </div>
                            </div>

                        </nav>


                    </div>

                </div>

            </main>
        );
    }
}


const stateToProps = state => {
    return {}
}

const dispatchToProps = dispatch => {
    return {
        activeLoader: () => dispatch(activeLoader()),
        deactivateLoader: () => dispatch(deactivateLoader()),
        donePreloader: () => dispatch(donePreloader())

    }
}

export default connect(stateToProps, dispatchToProps)(Welcome);