import React, { Component } from 'react';

import './common.css'
import newimg from '../../Images/newnew.png'

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

class ContactUS extends Component {
    constructor() {
        super();
        this.callConfirmMessage = this.callConfirmMessage.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.state = {

        };



    }

    async   onSubmit() {
        await this.callConfirmMessage("Thank You", "We will contact you as soon as possible");
        await window.location.replace("/");

    }

    callConfirmMessage(title, message) {
        confirmAlert({
            title: title,
            message: message,
            buttons: [
                {
                    label: 'OK',

                }
            ]
        });
    }


    render() {
        return (
            <div className="container">
                <div className="row mt-2">
                    <div className="col-md-6 box_shp Cn_PA">
                        <div className="col-md-12 " >
                            <h3>Contact Us</h3>
                        </div>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label for="inputEmail4">First Name *</label>
                                    <input type="text" className="form-control" id="inputEmail4" placeholder="First Name..." required />
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="inputEmail4">Last Name *</label>
                                    <input type="text" className="form-control" id="inputEmail4" placeholder="Last Name ..." required />
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="inputEmail4">Email</label>
                                    <input type="email" className="form-control" id="inputEmail4" placeholder="Email..." required />
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="inputPassword4">Country *</label>
                                    <input type="text" className="form-control" id="inputPassword4" placeholder="Country..." required />
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="inputAddress">Subject *</label>
                                <input type="text" className="form-control" id="inputAddress" placeholder="Sybject..." required />
                            </div>
                            <div className="form-group">
                                <label for="inputAddress2">Message *</label>
                                <input type="text" className="form-control" id="inputAddress2" placeholder="Your Message..." required />
                            </div>
                            <button type="submit" className="btn btn-success" >Submit</button>
                        </form>
                    </div>
                    <div className="col-md-6">
                        <div className="col-md-12" >
                            <h4>Social Networks</h4>
                        </div>
                        <div className="row ml-1" >
                            <div className="col-md-3 mt-2 mr-2 box_shp">
                                <a  className={""}  style={{color:'black'}} href="https://www.facebook.com/lucidexsolutions/" target="_blank">
                                    <i className="fa fa-facebook mr-1 p-1"></i><span>Facebook</span>
                                </a>
                            </div>
                            <div className="col-md-3 mt-2 mr-2 box_shp">
                                <a  className={""}  style={{color:'black'}} href="https://www.linkedin.com/company/31043839/" target="_blank">
                                    <i className="fa fa-linkedin mr-1 p-1"></i><span>Linkedin</span>
                                </a>
                            </div>
                            <div className="col-md-3 mt-2 mr-2 box_shp">
                                <a  className={""}  style={{color:'black'}} href="https://www.instagram.com/lucidex_solutions/" target="_blank">
                                    <i className="fa fa-instagram mr-1 p-1m"></i><span>Instagram</span>
                                </a>
                            </div>
                            <div className="col-md-3 mt-2 mr-2 box_shp">
                                <a  className={""} style={{color:'black'}}  href="https://twitter.com/lucidex_" target="_blank">
                                    <i className="fa fa-twitter mr-1 p-1" ></i><span>Twitter</span>
                                </a>
                            </div>
                            <div className="col-md-6 mt-2 box_shp">
                                <a  className={""}  style={{color:'black'}} href="mailto:inhowrelax@gmail.com" >
                                    <i className="fa fa-envelope mr-1 p-1" ></i><span>Email : inhowrelax@gmail.com</span>
                                </a>
                            </div>
                            <div className="col-md-6 mt-2 box_shp">
                                <img src={newimg} className="img-fluid" />
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}


export default ContactUS;

