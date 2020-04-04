import React, { Component } from 'react';
import axios from 'axios'

import './helpothers.css';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

import ProvincesAndDisctrict from './ProvincesAndDisctrict.json'
import NewsApi from '../../NewsApi'

import uc from '../../Images/uc.jpg'
import lucidex from '../../Images/lucidex.png'

class HelpforOthers extends Component {
    constructor() {
        super();
        // -------------------------------------------------------------
        // -----------------------------bind your onchanges---------------------
        // -------------------------------------------------------------
        this.youOnchangeName = this.youOnchangeName.bind(this)
        this.youOnchangeContactNumber = this.youOnchangeContactNumber.bind(this)
        this.youOnchangeNic = this.youOnchangeNic.bind(this)
        this.youOnchangeProvince = this.youOnchangeProvince.bind(this)
        this.youOnchangeDistrict = this.youOnchangeDistrict.bind(this)
        this.youOnchangeHowknow = this.youOnchangeHowknow.bind(this)

        // -------------------------------------------------------------
        // -----------------------------bind other onchanges---------------------
        // -------------------------------------------------------------

        this.otherOnchangeName = this.otherOnchangeName.bind(this)
        this.otherOnchangeContactNumber = this.otherOnchangeContactNumber.bind(this)
        this.otherOnchangeProvince = this.otherOnchangeProvince.bind(this)
        this.otherOnchangeDistrict = this.otherOnchangeDistrict.bind(this)
        this.otherOnchangeAddress = this.otherOnchangeAddress.bind(this)
        this.otherOnchangeWhatneed = this.otherOnchangeWhatneed.bind(this)
        this.otherOnchangeStatus = this.otherOnchangeStatus.bind(this)
        this.otherOnchangeImportant = this.otherOnchangeImportant.bind(this)
        // -----------------------------------------------------------------------------
        // --------------------------------------Form Submit----------------------------
        // -----------------------------------------------------------------------------

        this.OnsubmitForm = this.OnsubmitForm.bind(this)

        this.state = {
            //your state
            yname: '',
            ycontactno: '',
            ynic: '',
            yprovince: '',
            ydistrict: '',
            yhowknow: '',

            // other state
            oname: '',
            ocontactno: '',
            oprovince: '',
            odistrict: '',
            oaddressL: '',
            owhatneed: '',
            ostatus: '',
            oimportant: '',

            // all provinces and sitrics

            allProvincesandDistriecs: [],
            userselectedprovince: [],
            otheruserliveddistrict: [],
            // loading animation
            loading: false

        };



    }


// alert ---------------------------------------------------



    callConfirmMessage(title, message){
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







    //------------------------------------------------------component will mount ---------------------------------------
    async componentWillMount() {
        await this.setState({
            allProvincesandDistriecs: ProvincesAndDisctrict.Districst
        })

        await console.log(this.state.allProvincesandDistriecs);

    }






    // -----------------------------------------------------------------------------------------------------------------------------------------------Your Details Onchanges  ------------------------
    // -----------------------------------------------------------------------------------------------------------------------------------------------Your Details Onchanges  ------------------------
    // -----------------------------------------------------------------------------------------------------------------------------------------------Your Details Onchanges  ------------------------


    // name
    youOnchangeName(e) {
        this.setState({
            yname: e.target.value
        })

    }
    // contact
    youOnchangeContactNumber(e) {
        this.setState({
            ycontactno: e.target.value
        })

    }
    // nic
    youOnchangeNic(e) {
        this.setState({
            ynic: e.target.value
        })

    }
    // province
    async  youOnchangeProvince(e) {
        await this.setState({
            yprovince: e.target.value
        })


        var temp1 = this.state.allProvincesandDistriecs
        let slectedObject = temp1.find(el => el.province === this.state.yprovince);

        await this.setState({
            userselectedprovince: slectedObject.districts
        })

        console.log(this.state.userselectedprovince);

    }
    // state
    async  youOnchangeDistrict(e) {




        this.setState({
            ydistrict: e.target.value
        })

    }

    // how know
    youOnchangeHowknow(e) {
        this.setState({
            yhowknow: e.target.value
        })

    }

    // -----------------------------------------------------------------------------------------------------------------------------------------------Other Details Onchanges  ------------------------
    // -----------------------------------------------------------------------------------------------------------------------------------------------Your Details Onchanges  ------------------------
    // -----------------------------------------------------------------------------------------------------------------------------------------------Your Details Onchanges  ------------------------

    //name
    otherOnchangeName(e) {
        this.setState({
            oname: e.target.value
        })

    }
    //cn
    otherOnchangeContactNumber(e) {
        this.setState({
            ocontactno: e.target.value
        })

    }
    //province
    async  otherOnchangeProvince(e) {

        await this.setState({
            oprovince: e.target.value
        })


        var temp1 = this.state.allProvincesandDistriecs
        let slectedObject = temp1.find(el => el.province === this.state.oprovince);

        await this.setState({
            otheruserliveddistrict: slectedObject.districts
        })


        console.log(this.state.otheruserliveddistrict);

    }



    //district
    otherOnchangeDistrict(e) {

        this.setState({
            odistrict: e.target.value
        })

    }
    //address
    otherOnchangeAddress(e) {
        this.setState({
            oaddressL: e.target.value
        })

    }
    //wht need
    otherOnchangeWhatneed(e) {
        this.setState({
            owhatneed: e.target.value
        })

    }
    //status
    otherOnchangeStatus(e) {
        this.setState({
            ostatus: e.target.value
        })

    }
    //important
    otherOnchangeImportant(e) {
        this.setState({
            oimportant: e.target.value
        })

    }


  async  OnsubmitForm(e) {
        e.preventDefault();
        this.setState({
            loading: true
        });
    
        const HelpforOthers = {
            yname: this.state.yname,
            ycontactno: this.state.ycontactno,
            ynic: this.state.ynic,
            yprovince: this.state.yprovince,
            ydistrict: this.state.ydistrict,
            yhowknow: this.state.yhowknow,

            // other state
            oname: this.state.oname,
            ocontactno: this.state.ocontactno,
            oprovince: this.state.oprovince,
            odistrict: this.state.odistrict,
            oaddressL: this.state.oaddressL,
            owhatneed: this.state.owhatneed,
            ostatus: this.state.ostatus,
            oimportant: this.state.oimportant
        };

        console.log(HelpforOthers);




        var resfrom ;
        await axios.post(`${NewsApi.server}${NewsApi.port}${NewsApi.authPort}${NewsApi.api.addhelp}`, HelpforOthers) .then(res => {
            // window.location.replace("/view");
            console.log("This is form back end *---------------");
            
            resfrom = res
            console.log(res);
            
        }) .catch(function (error) {
            console.log(error);
            alert(error);
        });

    this.setState({
        loading: false
    });

    if(resfrom.status === 200){

        console.log(resfrom.status);
        

        await   this.callConfirmMessage("Done", "Thank You")

    }else{
        this.callConfirmMessage("Alert", "Something went wrong")
    }
        // after submit
        this.setState({
            //your state
            yname: '',
            ycontactno: '',
            ynic: '',
            yprovince: '',
            ydistrict: '',
            yhowknow: '',

            // other state
            oname: '',
            ocontactno: '',
            oprovince: '',
            odistrict: '',
            oaddressL: '',
            owhatneed: '',
            ostatus: '',
            oimportant: ''

        })

      await   window.location.replace("/");
     
    }

    // ------------------------------------------------------------------------------------------------------------------------------------------------main render ------------------------
    // ------------------------------------------------------------------------------------------------------------------------------------------------main render ------------------------
    // ------------------------------------------------------------------------------------------------------------------------------------------------main render ------------------------
    // ------------------------------------------------------------------------------------------------------------------------------------------------main render ------------------------
    render() {
        return (
            <div className="container">
                {/* form start here */}
                <form onSubmit={this.OnsubmitForm}>
                    <div className="row">
                        {/* right */}
                        <div className="col-md-5 formCards">
                            <p className="addTitle">Your Informations (ඔබගේ විස්තර / உங்கள் தகவல்கள் )</p>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <p className="formLables">Name <span style={{ color: 'red' }}>*</span></p>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Your Name"
                                            name="yourname"
                                            value={this.state.yname}
                                            onChange={this.youOnchangeName}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <p className="formLables">Contact Number  <span style={{ color: 'red' }}>*</span> </p>
                                        <input
                                            type="tel"
                                            pattern="[0-9+.]+"
                                            className="form-control"
                                            placeholder="Your Contact Number"
                                            name="yourcontactnumber"
                                            value={this.state.ycontactno}
                                            onChange={this.youOnchangeContactNumber}
                                            required

                                        />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <p className="formLables">NIC / Driving Licence No / Passport No </p>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Your NIC / Driving Licence No / Passport No "
                                            name="yournic"
                                            value={this.state.ynic}
                                            onChange={this.youOnchangeNic}


                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <p className="formLables">Province  <span style={{ color: 'red' }}>*</span></p>
                                        <select required
                                            className="form-control "
                                            name="yourprovince"
                                            onChange={this.youOnchangeProvince}
                                            value={this.state.yprovince}
                                        >
                                            <option value="">Your Province</option>
                                            {
                                                this.state.allProvincesandDistriecs.map((data, i) =>
                                                    (<option key={i} value={data.province} >{data.province}</option>))
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <p className="formLables">Your District  <span style={{ color: 'red' }}>*</span></p>
                                        <select required
                                            className="form-control "
                                            name="yourdistrict"
                                            onChange={this.youOnchangeDistrict}
                                            value={this.state.ydistrict}
                                        >
                                            <option value="">Your District</option>
                                            {
                                                this.state.userselectedprovince.map((data, i) =>
                                                    (<option key={i} value={data} >{data}</option>))
                                            }

                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <p className="formLables">How you know that people or family  <span style={{ color: 'red' }}>*</span></p>
                                        <textarea
                                            className="form-control"
                                            name="howyouknow"
                                            rows="5"
                                            placeholder="How you know that people or family..."
                                            value={this.state.yhowknow}
                                            onChange={this.youOnchangeHowknow}
                                            required
                                        ></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* right */}

                        {/* left */}
                        <div className="col-md-6 formCards">
                            <p className="addTitle">Others Informations ( පීඩාවට පත් පුද්ගලයන් හෝ පවුල් පිලිබද විස්තර / உதவியற்ற குடும்பம் அல்லது நபர்கள் பற்றிய விவரங்கள்) </p>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <p className="formLables">Name  <span style={{ color: 'red' }}>*</span></p>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Name..."
                                            name="other"
                                            value={this.state.oname}
                                            onChange={this.otherOnchangeName}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        {/* <p className="formLables" style={{display:'inline-block'}}>Contact Number</p> <p  style={{display:'inline-block', padding:'0px', margin:'0px 0px 5px 0px', fontSize:'11px',  fontWeight:'600'}}>If you have</p> */}
                                        <p className="formLables" >Contact Number</p>
                                        <input
                                            type="tel"
                                            pattern="[0-9+.]+" s
                                            className="form-control"
                                            placeholder="Contact Number..."
                                            name="othercontact"
                                            value={this.state.ocontactno}
                                            onChange={this.otherOnchangeContactNumber}


                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <p className="formLables">Province  <span style={{ color: 'red' }}>*</span></p>
                                        <select required
                                            className="form-control "
                                            name="otherprovince"
                                            onChange={this.otherOnchangeProvince}
                                            value={this.state.oprovince}
                                        >
                                            <option value="">Others Province</option>
                                            {
                                                this.state.allProvincesandDistriecs.map((data, i) =>
                                                    (<option key={i} value={data.province} >{data.province}</option>))
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <p className="formLables">District  <span style={{ color: 'red' }}>*</span></p>
                                        <select required
                                            className="form-control "
                                            name="otherdistrict"
                                            onChange={this.otherOnchangeDistrict}
                                            value={this.state.odistrict}
                                        >
                                            <option value="">Others District</option>
                                            {
                                                this.state.otheruserliveddistrict.map((data, i) =>
                                                    (<option key={i} value={data} >{data}</option>))
                                            }

                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <p className="formLables">Adress or landmark  <span style={{ color: 'red' }}>*</span></p>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Address or Lanndmark..."
                                            name="otherlandmark"
                                            value={this.state.oaddressL}
                                            onChange={this.otherOnchangeAddress}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            <p className="addTitle">Important Information </p>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <p className="formLables">What they need  <span style={{ color: 'red' }}>*</span></p>
                                        <select required
                                            className="form-control "
                                            name="typeoftheyneed"
                                            onChange={this.otherOnchangeWhatneed}
                                            value={this.state.owhatneed}
                                        >
                                            <option value="">Select One </option>
                                            <option value="Medicines">Medicines</option>
                                            <option value="Foods"> Foods</option>
                                            <option value="Other"> Other</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <p className="formLables">Status  <span style={{ color: 'red' }}>*</span></p>
                                        <select required
                                            className="form-control "
                                            name="theystatus"
                                            onChange={this.otherOnchangeStatus}
                                            value={this.state.ostatus}
                                        >
                                            <option value="">Select One</option>
                                            <option value="Not-Urgent">Not Urgent</option>
                                            <option value="Urgent"> Urgent</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <p className="formLables">Important Information  <span style={{ color: 'red' }}>*</span></p>
                                        <textarea
                                            className="form-control"
                                            name="importantinpormationaboutthey"
                                            rows="5"
                                            placeholder="Other details"
                                            value={this.state.oimportant}
                                            onChange={this.otherOnchangeImportant}
                                            required
                                        ></textarea>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-11">
                            <center>
                            <div className="btnInAddForm" style={{float:'right'}}>
                                {/* <button
                                    type="button"
                                    className="btn btn-info"
                                >
                                    Clear
                                              </button> */}
                                <button type="submit" className="btn btn-success">
                                    Add
                                         </button>

                            </div>
                            </center>
                        </div>
                    </div>
                </form>

                {/* form end here */}







                {/* cominng soon ---------------------------------------------- */}


                {/* <div className="row mt-3">
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
                </div> */}
                {/* cominng soon ---------------------------------------------- */}

            </div>
        );
    }
}


export default HelpforOthers;