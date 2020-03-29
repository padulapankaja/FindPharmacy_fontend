
import React, { Component } from 'react';

import './howorder.css'


import sinhala from '../Images/Pharmacy_Sinhala.jpg'
import english from '../Images/Pharmacy_English.jpg'
import tamil from '../Images/Pharmacy_tamil.jpg'

class Howorder extends Component {
    constructor() {
        super();
        this.state = {

        };

        

    }

    

    render() {
        return (
            <div className="container">
                    <div className="row">
                        <div className="col-md-12 mt-2">
                            <h6 style={{fontWeight:'900'}}> <b>For more details :</b> <a href="http://www.health.gov.lk/moh_final/sinhala/" style={{fontWeight:'700'}} target="_blank">Health Ministry</a></h6>
                        </div>
                        <div className="col-md-6 mt-2">
                            <img  className="img-fluid" src={sinhala} alt="online Pharmacy " />
                        </div>
                        <div className="col-md-6 mt-2">
                            <img  className="img-fluid" src={english}  alt="online Pharmacy " />
                        </div>
                        <div className="col-md-6 mt-2">
                            <img  className="img-fluid" src={tamil}  alt="online Pharmacy " />
                        </div>
                    </div>
                
            </div>
        );
    }
}


export default Howorder;