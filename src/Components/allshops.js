   /*  eslint-disable */
import React, { Component } from 'react';

import '../Components/allshops.css';

import axios from 'axios'

import NewsApi from '../NewsApi'


import Oneshop from './oneshop'
import Loading from "../Components/loading"

import p1 from '../Images/main-qimg-7bb4172052a760365f5a1c35142eaea3.png'
import p2 from '../Images/pharmacy_app.png'

import AllDistrics from './Districts.json'

import Switch from "react-switch";
class AllShops extends Component {
    constructor(props) {
        super(props);
        this.ListofAllPharmacy = this.ListofAllPharmacy.bind(this)
        this.OnchangeSearch = this.OnchangeSearch.bind(this)
        this.Onsubmit = this.Onsubmit.bind(this)
        this.ListofSearchPharmacy = this.ListofSearchPharmacy.bind(this)
        this.onchangeDistrcs = this.onchangeDistrcs.bind(this)
        this.onChangeMoheArea = this.onChangeMoheArea.bind(this)
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            allshops: [],
            searchKey: '',
            searchedArray: [],
            loading: false,
            image: true,
            AlldestricsandMoheAreas: [],
            userSelectedDistrct: '',
            userSelectedMoheAred: [],
            covidDetails: [],
            checked: false
        };



    }




    async  componentWillMount() {

        await this.setState({
            AlldestricsandMoheAreas: AllDistrics.Districst
        })
        // await console.log(this.state.AlldestricsandMoheAreas);

        await axios.get("https://www.hpb.health.gov.lk/api/get-current-statistical").then(res => {


            this.setState({
                covidDetails: res.data.data
            })

        }).catch(function (error) {
            console.log(error);
        })

        // await console.log(this.state.covidDetails);


    }

    ListofAllPharmacy() {
        return this.state.allshops.map((data, i) => {
            return <Oneshop list={data} key={i} index={i} />;
        });
    }

    ListofSearchPharmacy() {
        return this.state.searchedArray.map((data, i) => {
            return <Oneshop list={data} key={i} index={i} />;
        });
    }


    OnchangeSearch(e) {
        this.setState({
            searchKey: e.target.value
        })
    }

    async  Onsubmit(e) {
        this.setState({
            loading: true,
            image: false

        })

        e.preventDefault();
        var search = this.state.searchKey

        if (search === null || search === "" || search === undefined) {
            search = "Colombo"
        }
        const keyWor = {
            id: search
        }
        // await console.log("This is key worwd------");
        // await console.log(search);

        await axios.post(`${NewsApi.server}${NewsApi.port}${NewsApi.api.search}`, { keyWor }).then(res => {

            this.setState({
                searchedArray: res.data
            })

        }).catch(function (error) {
            console.log(error);
        })

        // await console.log(this.state.searchedArray);
        await this.ListofSearchPharmacy()
        this.setState({
            loading: false,
            // searchKey:''
            image: false,
            // userSelectedDistrct:'',
            // userSelectedMoheAred:[]
        })



    }



    async  onchangeDistrcs(e) {


        await this.setState({
            userSelectedDistrct: e.target.value
        })
        // await console.log(this.state.userSelectedDistrct);

        var temp1 = this.state.AlldestricsandMoheAreas
        let slectedObject = temp1.find(el => el.districtName === this.state.userSelectedDistrct);
        // await console.log(slectedObject);
        await this.setState({
            userSelectedMoheAred: slectedObject.moharea
        })

        // await console.log(this.state.userSelectedMoheAred);



    }

    async  onChangeMoheArea(e) {
        // console.log(e.target.value);
        await this.setState({
            searchKey: e.target.value
        })
        // await console.log(this.state.searchKey);
    }

    handleChange(checked) {
        this.setState({ checked });


    }


    render() {
        return (
            <div className="container">
                {this.state.loading ? <Loading /> : null}
                <div className="row">
                    <div className="col-md-3 mt-2">
                        <h5>Find Your Nearest Pharmacy</h5>
                    </div>
                    <div className="col-md-4 mt-2">
                        <h5>ඔබේ ළඟම ෆාමසිය සොයා ගන්න</h5>
                    </div>
                    <div className="col-md-5 mt-2">
                        <h5>உங்கள் அருகிலுள்ள மருந்தகத்தைக் கண்டுபிடி</h5>
                    </div>
                    <div className="col-md-12 mt-4">
                        <form onSubmit={this.Onsubmit}>
                            <div className="row mt-2">
                                {/* right */}
                                <div className="col-md-4 mb-2">

                                    <select className="form-control" onChange={this.onchangeDistrcs} required>
                                        <option value="Badulla">Select Your Distrcit</option>
                                        {

                                            this.state.AlldestricsandMoheAreas.map((data, i) =>
                                                (<option key={i} value={data.districtName} >{data.districtName}</option>))
                                        }
                                    </select>
                                </div>
                                <div className="col-md-4 mb-2">

                                    <select className="form-control" onChange={this.onChangeMoheArea} required>
                                        <option>Select Your Nearest Town</option>
                                        {

                                            this.state.userSelectedMoheAred.map((data, i) =>
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
                                    <p style={{ fontSize: '13px', fontWeight: '700' }}> Please Select Your District and Nearest Town  and Click Search</p>
                                </div>
                                <div className="col-md-3">
                                    <p style={{ fontSize: '13px', fontWeight: '700' }}> කරුණාකර ඔබේ දිස්ත්‍රික්කය සහ ළඟම නගරය තෝරන්න</p>
                                </div>
                                <div className="col-md-6">
                                    <p style={{ fontSize: '13px', fontWeight: '700' }}> தயவுசெய்து உங்கள் மாவட்டத்தையும் அருகிலுள்ள நகரத்தையும் தேர்ந்தெடுத்து தேடலைக் கிளிக் செய்க</p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="row">

                    <div className="col-md-12">
                        <center>
                            <img style={{ display: this.state.image == true ? 'block' : 'none', width: '40%' }} className="img-fluid mb-4 mt-4" src={p1} />

                        </center>
                    </div>
                    <div className="all_pharam" style={{ display: this.state.searchedArray.length <= 0 ? 'none' : 'block' }} >
                        <h3 className="all_pharam_title" style={{ display: this.state.searchedArray.length <= 0 ? 'none' : 'block' }} >{this.state.searchedArray.length} &nbsp; Pharmacies  Available </h3>
                    </div>
                    {/* {this.ListofAllPharmacy()} */}
                    {this.ListofSearchPharmacy()}

                </div>

                <div className="row text-center">
                    <br />
                    <div className="col-md-12 mt-2 ">
                        <h4 style={{ fontWeight: '900' }}> COVID-19 patients reported in Sri Lanka.</h4>
                    </div>
                    <div className="col-md-4 mt-2">

                        <div className="card card-image " style={{ backgroundColor: '#ff9f43' }}>
                            <div className="text-white text-center d-flex align-items-center rgba-black-slight py-5 px-4" style={{ height: '200px', borderRadius: '10px' }}>
                                <div>

                                    <h3 className="card-title pt-2"><strong>{this.state.covidDetails.local_total_cases}</strong></h3>
                                    <p>Cumulative count of confirmed COVID-19 cases in Sri Lanka</p>

                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-4  mt-2">
                        <div className="card card-image " style={{ backgroundColor: '#1dd1a1' }}>
                            <div className="text-white text-center d-flex align-items-center rgba-black-slight py-5 px-4 " style={{ height: '200px', borderRadius: '10px' }}>
                                <div>

                                    <h2 className="card-title pt-2"><strong>{this.state.covidDetails.local_recovered}</strong></h2>
                                    <p>Total COVID-19 cases recovered and discharged in Sri Lanka</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-4  mt-2">
                        <div className="card card-image " style={{ backgroundColor: '#ee5253' }}>
                            <div className="text-white text-center d-flex align-items-center rgba-black-slight py-5 px-4" style={{ height: '200px', borderRadius: '10px' }}>
                                <div>

                                    <h3 className="card-title pt-2"><strong>0{this.state.covidDetails.local_deaths}</strong></h3>
                                    <p>Total deaths due to COVID-19 reported in Sri Lanka</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-12 mt-2">
                        <br />
                        <h4 style={{ fontWeight: '900' }} > COVID-19 patients reported in Globally</h4>
                    </div>
                    <div className="col-md-4 mt-2">

                        <div className="card card-image " style={{ backgroundColor: '#ff9f43' }}>
                            <div className="text-white text-center d-flex align-items-center rgba-black-slight py-5 px-4" style={{ height: '200px', borderRadius: '10px' }}>
                                <div>

                                    <h3 className="card-title pt-2"><strong>{this.state.covidDetails.global_total_cases}</strong></h3>
                                    <p>Total global confirmed COVID-19 cases</p>

                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-4  mt-2">
                        <div className="card card-image " style={{ backgroundColor: '#1dd1a1' }}>
                            <div className="text-white text-center d-flex align-items-center rgba-black-slight py-5 px-4 " style={{ height: '200px', borderRadius: '10px' }}>
                                <div>

                                    <h2 className="card-title pt-2"><strong>{this.state.covidDetails.global_recovered}</strong></h2>
                                    <p>Total Global COVID-19 cases who recovered</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-4  mt-2">
                        <div className="card card-image " style={{ backgroundColor: '#ee5253' }}>
                            <div className="text-white text-center d-flex align-items-center rgba-black-slight py-5 px-4" style={{ height: '200px', borderRadius: '10px' }}>
                                <div>

                                    <h3 className="card-title pt-2"><strong>{this.state.covidDetails.global_deaths}</strong></h3>
                                    <p>Total global deaths due to COVID-19</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>



            </div>
        );
    }
}


export default AllShops;