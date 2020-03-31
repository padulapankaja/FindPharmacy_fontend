import React, { Component } from 'react';

import './helpothers.css';

import uc from '../../Images/uc.jpg'
import lucidex from '../../Images/lucidex.png'

class HelpforOthers extends Component {
    constructor() {
        super();
        this.state = {

        };

        

    }

    

    render() {
        return (
            <div className="container">
                <div className="row mt-3">
                    <div className="col-md-12">
                        <center>
                        <img src={uc} className="img-fluid" style={{width:'50%'}} alt="covid19 help for others" />
                        </center>
                    </div>
                    <div className="col-md-12 mt-2">
                        <center>
                        <img src={lucidex} className="img-fluid" style={{width:'10%'}} alt="covid19 help for others" />
                        </center>
                    </div>
                </div>
            </div>
        );
    }
}


export default HelpforOthers;