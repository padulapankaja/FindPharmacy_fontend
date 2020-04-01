import React, { Component } from 'react';

import './viewhowneed.css'
import axios from 'axios'

import OneHelp from './onehelp'

import ProvincesAndDisctrict from './ProvincesAndDisctrict.json'
import NewsApi from '../../NewsApi'
import Loading from "../loading"


import helpforthers from '../../Images/helpforthers.jpg'

class ViewWhoWantHelp extends Component {
    constructor(props) {
        super(props);
        this.OnchangeDistrict = this.OnchangeDistrict.bind(this)
        this.onchangeProvince = this.onchangeProvince.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.getSearchlist = this.getSearchlist.bind(this)
        this.state = {
            allProvincesandDistriecs: [],
            searchedProvince: '',
            image: true,
            loading: false,
            userselectedprovince: [],
            distrcit: '',
            yprovince: '',
            searchedArray: []
        };



    }

    async componentWillMount() {
        await this.setState({
            allProvincesandDistriecs: ProvincesAndDisctrict.Districst,
            image: true,
        })

        // await console.log(this.state.allProvincesandDistriecs);

    }


    async onchangeProvince(e) {
        await this.setState({
            searchedProvince: e.target.value
        })

        var temp1 = this.state.allProvincesandDistriecs
        let slectedObject = temp1.find(el => el.province === this.state.searchedProvince);

        await this.setState({
            userselectedprovince: slectedObject.districts
        })

        // console.log(this.state.userselectedprovince);


    }


    async  OnchangeDistrict(e) {
        this.setState({
            distrcit: e.target.value
        })

    }

    async onSubmit(e) {
        this.setState({
            loading: true,
            image: true,

        })

        e.preventDefault();
        var search = this.state.distrcit

        if (search === null || search === "" || search === undefined) {
            search = "Colombo"
        }
        const keyWor = {
            id: search
        }
        await axios.post(`${NewsApi.server}${NewsApi.port}${NewsApi.api.viewhelp}`, { keyWor }).then(res => {

            this.setState({
                searchedArray: res.data
            })

        }).catch(function (error) {
            console.log(error);
        })
        this.setState({
            loading: false,
            image: false,

        })

        // await console.log(this.state.searchedArray);
        await this.getSearchlist();
      

    }


    getSearchlist() {
        return this.state.searchedArray.reverse().map((data, i) => {
            return <OneHelp list={data} key={i} index={i} />;
        });
    }




    render() {
        return (
            <div className="container">
                  {this.state.loading ? <Loading /> : null}
                <div className="col-md-12 row">
                    <div className="col-md-3 mt-2">
                        <h5>Help For Others</h5>
                    </div>
                    <div className="col-md-4 mt-2">
                        <h5>සමාජ සත්කාර</h5>
                    </div>
                    <div className="col-md-5 mt-2">
                        <h5>மற்றவர்களுக்கு உதவுங்கள்</h5>
                    </div>
                    <div className="col-md-12 mt-4">
                        <form onSubmit={this.onSubmit}>
                            <div className="row mt-2">
                                {/* right */}
                                <div className="col-md-4 mb-2">

                                    <select className="form-control" onChange={this.onchangeProvince} required
                                        value={this.state.searchedProvince}
                                    >
                                        <option value="Western">Select Your Province</option>
                                        {
                                            this.state.allProvincesandDistriecs.map((data, i) =>
                                                (<option key={i} value={data.province} >{data.province}</option>))
                                        }

                                    </select>
                                </div>
                                <div className="col-md-4 mb-2">

                                    <select className="form-control" name="distrct" onChange={this.OnchangeDistrict}
                                        value={this.state.distrcit}
                                        required>
                                        <option value="">Your District</option>
                                        {
                                            this.state.userselectedprovince.map((data, i) =>
                                                (<option key={i} value={data} >{data}</option>))
                                        }

                                    </select>
                                </div>
                                <div className="col-md-3">
                                    <button type="submit" className="btn btn-success btn-md _search_btn ">
                                        Search
                                         </button>
                                </div>
                                <div className="col-md-3">
                                    <p style={{ fontSize: '13px', fontWeight: '700' }}> Please Select Your Province and District and Click Search</p>
                                </div>
                                <div className="col-md-3">
                                    <p style={{ fontSize: '13px', fontWeight: '700' }}> කරුණාකර ඔබේ දිස්ත්‍රික්කය පළාත සහ දිස්ත්‍රික්කය තෝරන්න</p>
                                </div>
                                <div className="col-md-6">
                                    <p style={{ fontSize: '13px', fontWeight: '700' }}> தயவுசெய்து உங்கள் மாகாணம் மற்றும் மாவட்டத்தைத் தேர்ந்தெடுத்து தேடலைக் கிளிக் செய்க</p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
              
              
                <div className="col-md-12">
                        <center>
                            <img style={{ display: this.state.image == true ? 'block' : 'none', width: '40%' }} className="img-fluid mb-4 mt-4" src={helpforthers}  alt="Find nearest pharmacy"/>

                        </center>
                    </div>
                {/* ----------------------------------------------------------------------------------------------------------------------------------------------- */}
                <div className="row">
                    {this.getSearchlist()}
                </div>

            </div>
        );
    }
}


export default ViewWhoWantHelp;