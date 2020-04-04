import React, { Component } from 'react';

import './common.css';
import how from '../../Images/howrelax1.png'

import newimg from '../../Images/newnew.png'

class AboutUs extends Component {
    constructor() {
        super();
        this.state = {

        };



    }



    render() {
        return (
            <div className="container">
                <div className="row Abou_Div">
                    <div className="col-md-12 mt-3">
                        <h3>About US</h3>
                    </div>
                    <div className="col-md-6">
                        <p style={{lineHeight:'30px'}}>Welcome to How Relax, your number one source for all things your relax life. We're dedicated to giving you the very best of things, with a focus on how relief stress, important needs of medicine.


                        Founded in 2020 by Lucidex , How Relax has come a long way from its beginnings in Sri Lanka. When Lucidex first started out, their passion for  drove them to research  so that How Relax can offer you Latest news about western and ayurveda. We now serve customers all over world and are thrilled that we're able to turn our passion into our own website.


                        we hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us. <br />


                        Sincerely, <br />

                        Lucidex</p>
                    </div>
                    <div className="col-md-6">
                        <img  src={newimg} className="img-fluid"/>
                    </div>
                </div>

            </div>
        );
    }
}


export default AboutUs;