import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {activeLoader, deactivateLoader, donePreloader} from "../redux/actions/preloader";
import {connect} from "react-redux";

class Resume extends Component {

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
                                <div className="pt-tablecell page-resume relative">

                                    <Link to="/" className="page-close"><i className="tf-ion-close"></i></Link>


                                    <div className="container">
                                        <div className="row">
                                            <div
                                                className="col-xs-12 col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8">
                                                <div className="page-title text-center">
                                                    <h2>My <span className="primary">history</span> <span
                                                        className="title-bg">Resume</span></h2>
                                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                                                        diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                                                        aliquam erat volutpat.</p>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="row">
                                            <div className="col-xs-12 col-sm-6">
                                                <div className="history-block">
                                                    <div className="section-title light clear">
                                                        <h3>Education</h3>
                                                    </div>

                                                    <div className="history-scroller">
                                                        <div className="history-item">
                                                            <div className="history-icon">
                                                                <span className="history-hex"></span>
                                                                <i className="tf-documents5"></i>
                                                            </div>
                                                            <div className="history-text">
                                                                <h5>Merin Land College</h5>
                                                                <span>2012 - 2014</span>
                                                            </div>
                                                        </div>

                                                        <div className="history-item">
                                                            <div className="history-icon">
                                                                <span className="history-hex"></span>
                                                                <i className="tf-documents5"></i>
                                                            </div>
                                                            <div className="history-text">
                                                                <h5>Merin Land College</h5>
                                                                <span>2012 - 2014</span>
                                                                <p>Claritas est etiam processus dynamicus,
                                                                    qui <br></br> sequitur mutationem consuetudium lectorum.
                                                                </p>
                                                            </div>
                                                        </div>

                                                        <div className="history-item">
                                                            <div className="history-icon">
                                                                <span className="history-hex"></span>
                                                                <i className="tf-documents5"></i>
                                                            </div>
                                                            <div className="history-text">
                                                                <h5>Merin Land College</h5>
                                                                <span>2012 - 2014</span>
                                                            </div>
                                                        </div>

                                                        <div className="history-item">
                                                            <div className="history-icon">
                                                                <span className="history-hex"></span>
                                                                <i className="tf-documents5"></i>
                                                            </div>
                                                            <div className="history-text">
                                                                <h5>Merin Land College</h5>
                                                                <span>2012 - 2014</span>
                                                            </div>
                                                        </div>

                                                        <div className="history-item">
                                                            <div className="history-icon">
                                                                <span className="history-hex"></span>
                                                                <i className="tf-documents5"></i>
                                                            </div>
                                                            <div className="history-text">
                                                                <h5>Merin Land College</h5>
                                                                <span>2012 - 2014</span>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>

                                            </div>

                                            <div className="col-xs-12 col-sm-6">
                                                <div className="history-block">
                                                    <div className="section-title light clear">
                                                        <h3>Experiences</h3>
                                                    </div>

                                                    <div className="history-scroller">
                                                        <div className="history-item">
                                                            <div className="history-icon">
                                                                <span className="history-hex"></span>
                                                                <i className="tf-documents5"></i>
                                                            </div>
                                                            <div className="history-text">
                                                                <h5>Merin Land College</h5>
                                                                <span>2012 - 2014</span>
                                                            </div>
                                                        </div>

                                                        <div className="history-item">
                                                            <div className="history-icon">
                                                                <span className="history-hex"></span>
                                                                <i className="tf-documents5"></i>
                                                            </div>
                                                            <div className="history-text">
                                                                <h5>Merin Land College</h5>
                                                                <span>2012 - 2014</span>
                                                                <p>Claritas est etiam processus dynamicus,
                                                                    qui <br></br> sequitur mutationem consuetudium lectorum.
                                                                </p>
                                                            </div>
                                                        </div>

                                                        <div className="history-item">
                                                            <div className="history-icon">
                                                                <span className="history-hex"></span>
                                                                <i className="tf-documents5"></i>
                                                            </div>
                                                            <div className="history-text">
                                                                <h5>Merin Land College</h5>
                                                                <span>2012 - 2014</span>
                                                            </div>
                                                        </div>

                                                        <div className="history-item">
                                                            <div className="history-icon">
                                                                <span className="history-hex"></span>
                                                                <i className="tf-documents5"></i>
                                                            </div>
                                                            <div className="history-text">
                                                                <h5>Merin Land College</h5>
                                                                <span>2012 - 2014</span>
                                                            </div>
                                                        </div>

                                                        <div className="history-item">
                                                            <div className="history-icon">
                                                                <span className="history-hex"></span>
                                                                <i className="tf-documents5"></i>
                                                            </div>
                                                            <div className="history-text">
                                                                <h5>Merin Land College</h5>
                                                                <span>2012 - 2014</span>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>

                                            </div>

                                        </div>

                                    </div>


                                    <nav className="clear">
                                        <div className="container mb-3">
                                            <div className="flex flex-middle space-between">
                                                <span className="prev-page"><Link to="/service"
                                                                               className="link">&larr; Prev Page</Link></span>
                                                <span className="copyright hidden-xs">Copyright &copy; 2021 Imran Hossain, All Rights Reserved.</span>
                                                <span className="next-page"><Link to="/works" className="link">Next Page &rarr;</Link></span>
                                            </div>
                                        </div>

                                    </nav>


                                </div>

                            </div>

                        </main>
                }

            </>
        );
    }
};

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

export default connect(stateToProps, dispatchToProps)(Resume);
