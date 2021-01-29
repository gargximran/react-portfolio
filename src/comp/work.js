import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {activeLoader, deactivateLoader, donePreloader} from "../redux/actions/preloader";
import {connect} from "react-redux";
import {loadAllWorks} from "../redux/actions/works";

class Work extends Component {

    componentWillMount() {
        loadAllWorks();
    }

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
                                <div className="pt-tablecell page-works relative">

                                    <Link to="/" className="page-close"><i className="tf-ion-close"> </i></Link>


                                    <div className="container">
                                        <div className="row">
                                            <div
                                                className="col-xs-12 col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8">
                                                <div className="page-title text-center">
                                                    <h2>My <span className="primary">works</span> <span
                                                        className="title-bg">works</span></h2>
                                                    <p>Check out my past work from list.</p>
                                                </div>
                                            </div>
                                        </div>



                                        <div className="row">
                                            {
                                                this.props.works.map(work => {
                                                    return (
                                                        <div className="col-xs-12 col-sm-12 col-md-12" key={work.row_id}>
                                                            <figure className="works-item">
                                                                <figcaption className="works-inner">
                                                                    <h4><a href={work.link} target={'_blank'}>{work.name}</a></h4>
                                                                    <p style={{whiteSpace: "pre-wrap", lineHeight: '17px'}}>{work.details}</p>
                                                                </figcaption>
                                                            </figure>
                                                        </div>
                                                    )
                                                })
                                            }



                                        </div>
                                    </div>

                                    <nav className="clear">
                                        <div className="container mb-3 mt-3">
                                            <div className="flex flex-middle space-between">
                                                <span className="prev-page"><Link to="/resume"
                                                                               className="link">&larr; Prev Page</Link></span>
                                                <span className="copyright hidden-xs">Copyright &copy; 2021 Imran Hossain, All Rights Reserved.</span>
                                                <span className="next-page"><Link to="/contact"
                                                                               className="link">Next Page &rarr;</Link></span>
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
}

const stateToProps = state => {
    return {
        loader: state.loader,
        works: state.works
    }
}

const dispatchToProps = dispatch => {
    return {
        activeLoader: () => dispatch(activeLoader()),
        deactivateLoader: () => dispatch(deactivateLoader()),
        donePreloader: () => dispatch(donePreloader())

    }
}

export default connect(stateToProps, dispatchToProps)(Work);
