import React, { Component } from 'react';
import { Link } from 'react-router'

import './healthArticles.css';
import axios from 'axios'

import NewsApi from '../../NewsApi'
import parse from 'html-react-parser';

import moment from 'moment'
class HealthArticles extends Component {
    constructor() {
        super();
        this.state = {
            articles: []
        };



    }

    UNSAFE_componentWillMount() {
        this.getallArticels()
    }

    async getallArticels() {
        var Data = {};

        await axios.get(
            `${NewsApi.server}${NewsApi.port}${NewsApi.api.getall}`,

        ).then(Response => {
            Data = Response.data
        })
            .catch(err => {
                console.error(err);

            });
        await this.setState({
            articles: Data
        })
        await console.log(this.state.articles);

    }


    changecontetnt(title) {
        document.getElementById('bp_content').innerHTML = title
    }

    render() {


        var allArticels = this.state.articles.map((data, i) => {
            return (

                <div className="col-12" >
                    <div key={data._id} className="posts-holder pr-30 mt-1 mb-4"  >
                        <div className="blog-post">

                            <div className="blog-post-img">
                                <img className="img-fluid" style={{ width: '100%' }} src={`${NewsApi.server}${NewsApi.port}/${data.image}`} alt="stress relief method" />
                            </div>

                            <div className="blog-post-txt">


                                <h5 className="h5-xl steelblue-color mt-3"><a style={{ color: 'black', fontWeight: '600' }} href={`/ar/wes/${data._id}`}  >{data.title}</a></h5>

                                <span style={{ fontSize: '12px' }}>  {moment(data.date).startOf('hour').fromNow()} &nbsp;  |  &nbsp; {moment(data.date).format('MMMM Do YYYY')}</span>

                                <p > {data.smalldes}...
                        </p>

                            </div>


                            <div className="tags-cloud sidebar-div mb-50">
                                {/*<h5 className="h5-sm steelblue-color">Tags </h5>*/}

                                <span className="badge m-1"><a className="m-2 p-1" style={{ color: 'black' }}>{data.tag1}</a></span>
                                <span className="badge m-1"><a className="m-2 p-1" style={{ color: 'black' }}>{data.tag2}</a></span>
                                <span className="badge m-1"><a className="m-2 p-1" style={{ color: 'black' }}>{data.tag3}</a></span>

                            </div>
                        </div>
                    </div>
                </div>
            );
        });



        var popularpost = this.state.articles.reverse().slice(0, 3).map((data, i) => {
            return (

                <li key={data._id} className="clearfix d-flex align-items-center mt-2 mb-2" >
                    <img className="img-fluid" style={{ height: '50px', width: '80px' }} src={`${NewsApi.server}${NewsApi.port}/${data.image}`} alt="ayurveda health" />
                    <p className="ml-1" style={{ fontSize: '12px', fontWeight: '600' }} >{data.title}</p>
                </li>
            );
        });

        return (
            <div className="container">

                <div id="blog-page" className="wide-100 blog-page-section division">
                    <div className="container mt-3">
                        <div className="row mt-4">


                            <div className="col-lg-8 mt-3">
                                <div className="row">

                                    {allArticels}
                                </div>
                            </div>



                            {/* <!-- SIDEBAR --> */}
                            <aside id="sidebar" className="col-lg-4">
                                {/* <!-- POPULAR POSTS --> */}
                                <div className="popular-posts sidebar-div mb-50">
                                    <h5 className="h5-sm steelblue-color">Popular Posts</h5>
                                    <ul className="popular-posts">
                                        {popularpost}
                                    </ul>
                                </div>
                                {/* <!-- TAGS CLOUD --> */}
                                <div className="tags-cloud sidebar-div mb-50">

                                    {/* <!-- Title --> */}
                                    <h5 className="h5-sm steelblue-color">Tags Cloud</h5>

                                    <span className="badge  m-1"><a className="m-2" style={{ color: 'black' }}>Effective Treatment</a></span>
                                    <span className="badge m-1"><a className="m-2" style={{ color: 'black' }}>Molecular Biology</a></span>
                                    <span className="badge m-1"><a className="m-2" style={{ color: 'black' }}>Diagnostic</a></span>
                                    <span className="badge m-1"><a className="m-2" style={{ color: 'black' }}>Pediatrics</a></span>
                                    <span className="badge m-1"><a className="m-2" style={{ color: 'black' }}>Lifestyle</a></span>
                                    <span className="badge m-1"><a className="m-2" style={{ color: 'black' }}>Pharma</a></span>
                                    <span className="badge m-1"><a className="m-2" style={{ color: 'black' }}>Medicine</a></span>
                                    <span className="badge m-1"><a className="m-2" style={{ color: 'black' }}>Research</a></span>
                                </div>

                            </aside>
                            {/* <!-- END SIDEBAR --> */}


                        </div>
                        {/* <!-- End row -->	 */}
                    </div>
                    {/* <!-- End container --> */}
                </div>
                {/* <!-- END BLOG PAGE CONTENT --> */}
            </div>
        );
    }
}


export default HealthArticles;
