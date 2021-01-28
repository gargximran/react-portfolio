import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {activeLoader, deactivateLoader, donePreloader} from "../redux/actions/preloader";
import {connect} from "react-redux";
import axios from "axios";

class Contact extends Component {

    constructor(props) {
        super(props)

        this.state = {
            contactForm : {
                name: '',
                email: '',
                title: '',
                message: '',
                send: false
            }
        }
    }


    componentDidMount() {
        setTimeout(() => {
            this.props.deactivateLoader();
        }, 1000);
        setTimeout(() => {
            this.props.donePreloader();
        }, 2000);

    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            contactForm: {
                ...this.state.contactForm, [name]: value, send: false
            }
        })


    }

    handleSubmit(event) {
        event.preventDefault();
        const body = [
            [
                this.state.contactForm.name || '', this.state.contactForm.email || '', this.state.contactForm.title || '', this.state.contactForm.message || ''
            ]
        ]
        axios.post('https://v1.nocodeapi.com/gargximran/google_sheets/udwotKEDORySJMaj?api_key=wXdHVoigsYLuUPEBO&tabId=contact', body)
            .then(res => {
                this.setState({
                    contactForm: {
                        name: '',
                        email: '',
                        title: '',
                        message: '',
                        send: true
                    }
                })
            })
            .catch(err => {

            })
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
                                <div className="pt-tablecell page-contact relative">

                                    <Link to="/" className="page-close"><i className="tf-ion-close"></i></Link>


                                    <div className="container">
                                        <div className="row">
                                            <div
                                                className="col-xs-12 col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8">
                                                <div className="page-title text-center">
                                                    <h2>Get in <span className="primary">touch</span> <span
                                                        className="title-bg">Contact</span></h2>
                                                    <p>Any query? Feel free to ask. You can choose any contact media from bellow to reach me. thank you!</p>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="row">
                                            <div className="col-xs-12 col-sm-5 col-md-4 col-lg-3">
                                                <div className="contact-block">
                                                    <div className="media">
                                                        <div className="media-left">
                                                            <i className="tf-envelope2"></i>
                                                        </div>
                                                        <div className="media-body">
                                                            <h4>Email</h4>
                                                            <p><a href="mailto:gargximran@gmail.com">gargximran@gmail.com</a>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="contact-block">
                                                    <div className="media">
                                                        <div className="media-left">
                                                            <i className="tf-phone2"></i>
                                                        </div>
                                                        <div className="media-body">
                                                            <h4>Phone</h4>
                                                            <p><a href="tel:+88 01994-016046">+88 01994-016046</a></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="contact-block">
                                                    <div className="media">
                                                        <div className="media-left">
                                                            <i className="tf-mobile"></i>
                                                        </div>
                                                        <div className="media-body">
                                                            <h4>Skype</h4>
                                                            <p><a href="skype:live:f5c5025dd62a4602
">Imran Hossain</a></p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <ul className="contact-social">
                                                    <li>
                                                        <span className="contact-social-hex"></span>
                                                        <a href="https://www.facebook.com/gargximran"><i
                                                            className="tf-ion-social-facebook"></i></a>
                                                    </li>
                                                    <li>
                                                        <span className="contact-social-hex"></span>
                                                        <a href="whttps://www.linkedin.com/in/imran-hossain-b24184131/"><i
                                                            className="tf-ion-social-linkedin"></i></a>
                                                    </li>
                                                    <li>
                                                        <span className="contact-social-hex"></span>
                                                        <a href="https://github.com/gargximran"><i className="tf-ion-social-github"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div
                                                className="col-xs-12 col-sm-7 col-md-7 col-md-offset-1 col-lg-offset-2">
                                                <div className="section-title clear">
                                                    <h3>Send me a meesage</h3>
                                                    <span className="bar-dark"></span>
                                                    <span className="bar-primary"></span>
                                                </div>

                                                <form onSubmit={e => this.handleSubmit(e)} id="contact-form" className="row contact-form no-gutter">
                                                    <div className="col-xs-12 col-sm-6">
                                                        <div className="input-field name">
                                                            <span className="input-icon" id="name"><i
                                                                className="tf-profile-male"></i></span>
                                                            <input value={this.state.contactForm.name} onChange={e => (this.handleChange(e))} name='name' type="text" className="form-control"
                                                                   placeholder="Enter your name"></input>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-12 col-sm-6">
                                                        <div className="input-field email">
                                                            <span className="input-icon" id="email"><i
                                                                className="tf-envelope2"></i></span>
                                                            <input value={this.state.contactForm.email} type="email" onChange={e => (this.handleChange(e))} name='email' className="form-control"
                                                                   placeholder="Your email address"></input>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-12 col-sm-12">
                                                        <div className="input-field">
                                                            <span className="input-icon" id="subject"><i
                                                                className="tf-pricetags"></i></span>
                                                            <input value={this.state.contactForm.title} type="text" className="form-control" onChange={e => (this.handleChange(e))} name='title'
                                                                   placeholder="Enter the discussion title"></input>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-12 col-sm-12">
                                                        <div className="input-field message">
                                                            <span className="input-icon"><i className="tf-pencil2"></i></span>
                                                            <textarea name="message" id="message" onChange={e => (this.handleChange(e))}
                                                                      className="form-control"
                                                                      placeholder="Write your message" value={this.state.contactForm.message}></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-12 col-sm-12">
                                                        <div className="input-field">
                                            <span className="btn-border">
                                                <button type="submit"
                                                        className="btn btn-primary btn-custom-border text-uppercase">Send Message now</button>
                                            </span>
                                                        </div>
                                                        <div className="msg-success" style={{display: this.state.contactForm.send && 'inline-block'}}>Your Message was sent
                                                            successfully
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>

                                    <nav className=" clear">
                                        <div className="container mb-3">
                                            <div className="flex flex-middle space-between">
                                                <span className="prev-page"><Link to="/works"
                                                                               className="link">&larr; Prev Page</Link></span>
                                                <span className="copyright hidden-xs">Copyright &copy; 2021 Imran Hossain, All Rights Reserved.</span>
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

export default connect(stateToProps, dispatchToProps)(Contact);
