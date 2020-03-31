   /*  eslint-disable */
import React, { Component } from 'react';
import axios from 'axios'

import NewsApi from '../NewsApi'
import PhiDis from './PhiDis.json'
import Loading from "../Components/loading"
import p1 from '../Images/main-qimg-7bb4172052a760365f5a1c35142eaea3.png'
import p2 from '../Images/new.png'

class FindPhis extends Component {
    constructor() {
        super();
        this.OnchangePhiSearch = this.OnchangePhiSearch.bind(this)
        this.onSubmitPhis = this.onSubmitPhis.bind(this)
        this.state = {
            allphis: [],
            searchedphiArea: '',
            alldis: [],
            image: true,
            loading: false,

        };




    }


    async   componentWillMount() {
        await this.setState({
            alldis: PhiDis.Districst
        })
        // await console.log(this.state.alldis);

    }



    async onSubmitPhis(e) {
        this.setState({
            loading: true,
            image: false,

        })
        e.preventDefault();

        var search = this.state.searchedphiArea

        if (search === null || search === "" || search === undefined) {
            search = "Colombo"
        }
        const keyWor = {
            id: search
        }
        // await console.log("This is key worwd------");
        // await console.log(search);

        await axios.post(`${NewsApi.server}${NewsApi.port}${NewsApi.api.sarchphi}`, { keyWor }).then(res => {

            this.setState({
                allphis: res.data
            })

            // console.log(this.state.allphis);


        }).catch(function (error) {
            console.log(error);
        })

        await this.ListofSearchPhis()

        this.setState({
            loading: false,
            image: false

        })


        if (this.state.allphis.length <= 0) {
            this.setState({
                image: true
            })
        }
    }

    OnchangePhiSearch(e) {
        this.setState({
            searchedphiArea: e.target.value
        })
    }

    ListofSearchPhis() {
        return this.state.allphis.map((data, i) => {
            return (<div className="col-md-4 mt-1 mb-1">
                <div className="card text-center" >
                    <div className=" card-header success-color white-text">
                        Area : {data.area}
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Name :  {data.name}</h5>
                        <h4 className="card-text">MOH OFFICE  :  {data.office}</h4>


                        <a href={`tel:${data.cn}`} className="btn btn-success btn-sm">Call : 0{data.cn} </a>
                    </div>
                    <div className="card-footer text-muted  " style={{ fontSize: '13px', backgroundColor: '#bdc3c7 !important' }}>
                        <p className="m-0 p-0">Membership No:  {data.no}</p>
                    </div>
                </div>
            </div>
            );
        });
    }


    render() {
        return (
            <div className="container">

                <div className="row">
                    <div className="col-md-3 mt-2">
                        <h5>Find Your Nearest PHI</h5>
                    </div>
                    <div className="col-md-4 mt-2">
                        <h5>ඔබේ ළඟම සිටින PHI සොයා ගන්න</h5>
                    </div>
                    <div className="col-md-5 mt-2">
                        <h5>உங்கள் அருகிலுள்ள PHI ஐக் கண்டறியவும்</h5>
                    </div>
                    {this.state.loading ? <Loading /> : null}
                    <div className="col-md-12 mt-4">
                        {/* start form ---------------------------------------------------------------------------- */}

                        <form onSubmit={this.onSubmitPhis}>
                            <div className="row mt-2">
                                {/* right */}
                                <div className="col-md-6 mb-2">

                                    <select className="form-control" onChange={this.OnchangePhiSearch} required>
                                        <option value="">Select Your Districst</option>


                                        {

                                            this.state.alldis.map((data, i) =>
                                                (<option key={i} value={data.districtName} >{data.districtName}</option>))
                                        }
                                    </select>
                                </div>
                                <div className="col-md-6  ">
                                    <button type="submit" className="btn btn-success btn-md _search_btn ">
                                        Search
                                  </button>
                                </div>
                                <div className="col-md-3">
                                    <p style={{ fontSize: '13px', fontWeight: '700' }}> Please Select Your District  Click Search</p>
                                </div>
                                <div className="col-md-3">
                                    <p style={{ fontSize: '13px', fontWeight: '700' }}> කරුණාකර ඔබේ දිස්ත්‍රික්කය  තෝරන්න</p>
                                </div>
                                <div className="col-md-6">
                                    <p style={{ fontSize: '13px', fontWeight: '700' }}>தயவுசெய்து உங்கள் மாவட்ட கிளிக் தேடலைத் தேர்ந்தெடுக்கவும்</p>
                                </div>
                            </div>
                        </form>

                        {/* end form ---------------------------------------------------------------------------- */}

                    </div>
                </div>
                {/* end main section ---------------------------------------------------------------------------------------------------------------------------------------- */}

                <div className="col-md-12">
                    <center>
                        <img style={{ display: this.state.image == true ? 'block' : 'none', width: '70%' }} className="img-fluid mb-4 mt-4" src={p2} />
                    </center>

                </div>

                {/* start phis list */}
                <div className="row">

                    {/* one phi card  start ---------------------------- */}

                    {this.ListofSearchPhis()}


                </div>
                {/* start phis list */}

            </div>
        );
    }
}


export default FindPhis;