import React, {Component} from 'react';
import {Link} from "react-router-dom";
import imranImage from '../assets/img/133631843_1307631789615026_939976124895431361_o (1).jpg'
import {activeLoader, deactivateLoader, donePreloader} from "../redux/actions/preloader";
import {connect} from "react-redux";

class About extends Component {

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
        const skills = [
            {
                name: 'Python',
                detail: 'Programming Language'
            },
            {
                name: 'JavaScript',
                detail: 'Programming Language'
            },
            {
                name: 'TypeScript',
                detail: 'Superset of JS'
            },
            {
                name: 'PHP',
                detail: 'Programming Language'
            },
            {
                name: 'Django',
                detail: 'Backend framework of PYTHON'
            },
            {
                name: 'Flask',
                detail: 'Micro Web Framework of PYTHON'
            },
            {
                name: 'Laravel',
                detail: 'PHP web framework'
            },
            {
                name: 'Lumen',
                detail: 'Micro Web Framework of PHP'
            },
            {
                name: 'React',
                detail: 'JavaScript library'
            },
            {
                name: 'Redux',
                detail: 'State Manager of JS Big Scale Apps'
            },
            {
                name: 'Angular',
                detail: 'Front-end Framework of TypeScript'
            },
            {
                name: 'Vue Js',
                detail: 'Progressive JavaScript Framework'
            },
            {
                name: 'Node Js',
                detail: 'JavaScript Runtime'
            },
            {
                name: "Mongo DB",
                detail: 'Database system of No-SQL'
            },
            {
                name: 'MY-SQL',
                detail: 'Database system of SQL'
            }

        ]

        return (
            <>
                {
                    this.props.loader.loader ?
                        '' :
                        <main className="site-wrapper">
                            <div className="pt-table">
                                <div className="pt-tablecell page-about relative">

                                    <Link to="/" className="page-close"><i className="tf-ion-close"></i></Link>


                                    <div className="container">
                                        <div className="row">
                                            <div className="col-xs-12 col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8">
                                                <div className="page-title text-center">
                                                    <h2>About <span className="primary">me</span> <span
                                                        className="title-bg">Name</span></h2>
                                                    <p>I am working as a professional Web Programming since 2016. Worked in more
                                                        than 5 live projects and also with more than 20 different
                                                        clients!</p>
                                                </div>
                                            </div>

                                            <div className="col-xs-12 col-md-6">
                                                <div className="about-author">
                                                    <figure className="author-thumb">
                                                        <img src={imranImage} alt=""></img>
                                                    </figure>
                                                    <div className="author-desc">
                                                        <p><b>Date of birth:</b> 27th february, 1998</p>
                                                        <p><b>Language:</b> English, Bengali, Hindi</p>
                                                        <p><b>Expert in:</b> Full Stack Web development</p>
                                                        <p><b>Freelance:</b> Available</p>
                                                    </div>

                                                </div>

                                                <p>I'm a self motivated programmer that has been specialising in web programming
                                                    for the past four years although I have experience in full-stack web Projects.</p>
                                            </div>


                                            <div className="col-xs-12 col-md-6">
                                                <div className="section-title clear">
                                                    <h3>Skills</h3>
                                                </div>
                                                <div className="skill-wrapper">
                                                    {
                                                        skills.map(skill => {
                                                            return (
                                                                <div className="progress clear">
                                                                    <div className="skill-name">{skill.name}</div>
                                                                    <div className={'ml-2'}>{skill.detail}</div>


                                                                </div>
                                                            )
                                                        })
                                                    }

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <nav className="clear">
                                        <div className="container mb-3">
                                            <div className="flex flex-middle space-between">
                                                <span className="prev-page"><Link to="/welcome" className="link">&larr; Prev Page</Link></span>
                                                <span className="copyright hidden-xs">Copyright &copy; 2021 Imran Hossain, All Rights Reserved.</span>
                                                <span className="next-page"><Link to="/service"
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

export default connect(stateToProps, dispatchToProps)(About);
