/*  eslint-disable */

import React, { Component } from 'react';

import '../Components/allshops.css';

import axios from 'axios'

import NewsApi from '../NewsApi'


import Oneshop from './oneshop'
import Loading from "../Components/loading"






class AllShops extends Component {
    constructor(props) {
        super(props);
        this.ListofAllPharmacy = this.ListofAllPharmacy.bind(this)
        this.OnchangeSearch = this.OnchangeSearch.bind(this)
        this.Onsubmit = this.Onsubmit.bind(this)
        this.ListofSearchPharmacy = this.ListofSearchPharmacy.bind(this)
        this.state = {
            allshops: [],
            searchKey: '',
            searchedArray: [],
            loading: false,
        };



    }


    async componentWillMount() {
        this.setState({
            loading: true,
        })
        await axios.get(`${NewsApi.server}${NewsApi.port}${NewsApi.api.all}`).then(res => {
            console.log("Success Send");
            console.log(res);

            this.setState({
                allshops: res.data
            })

        }).catch(function (error) {
            console.log(error);
        })

        await console.log(this.state.allshops);


        this.ListofAllPharmacy()

        this.setState({
            loading: false,
        })
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
        })
        console.log("Keyword -----");
        console.log(this.state.searchKey);

        e.preventDefault();
        var search = this.state.searchKey

        const keyWor = {
            id: search
        }

        await axios.post(`${NewsApi.server}${NewsApi.port}${NewsApi.api.search}`, { keyWor }).then(res => {
            console.log("Keyqord");
            console.log(res);

            this.setState({
                searchedArray: res.data
            })

        }).catch(function (error) {
            console.log(error);
        })

        await console.log(this.state.searchedArray);

        await this.ListofSearchPharmacy()
        this.setState({
            loading: false,
        })
    }




    render() {
        return (
            <div className="container">
                {this.state.loading ? <Loading /> : null}
                <div className="row">
                    <div className="col-md-12">
                        <form onSubmit={this.Onsubmit}>
                            <div className="row mt-2">
                                {/* right */}
                                <div className="col-md-6 mb-2">


                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter  MOH Area "
                                        name="fname"
                                        onChange={this.OnchangeSearch}
                                        required
                                    />
                                </div>
                                <div className="col-md-6  ">
                                    <button type="submit" className="btn btn-success btn-md _search_btn ">
                                        Search
                                         </button>
                                </div>
                                <div className="col-md-12">
                                    <p> <b>Please Enter Your MOH Area  and Click Search</b></p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="row">

                    <div className="all_pharam" style={{ display: this.state.searchedArray.length <= 0 ? 'none' : 'block' }} >
                        <h3 style={{ display: this.state.searchedArray.length <= 0 ? 'none' : 'block' }} >{this.state.searchedArray.length} &nbsp; &nbsp; Pharmacies  in &nbsp;&nbsp; {this.state.searchKey}&nbsp;&nbsp;  MOH Area </h3>
                    </div>
                    {/* {this.ListofAllPharmacy()} */}
                    {this.ListofSearchPharmacy()}

                </div>
                <div className="row mt-2">
                    <div className="all_pharam">
                        <h3>All Pharmacies</h3>
                    </div>
                    {this.ListofAllPharmacy()}

                </div>
            </div>
        );
    }
}


export default AllShops;