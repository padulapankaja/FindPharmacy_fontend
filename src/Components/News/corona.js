   /*  eslint-disable */
import React, { Component } from 'react';

import axios from 'axios'
import NewsApi from '../../NewsApi'
import Loading from "../loading"
import moment from "moment";
import newsImage from "../../Images/news.png"
import './newsstyle.css'

class Corona extends Component {
    constructor() {
        super();
        this.HealthNews = this.HealthNews.bind(this)
        this.state = {
            allNews: [],
            loading: false,
        };



    }

    async componentWillMount() {
        this.setState({
            loading: true,

        })
        const Keywordserach = {
            key: 'covid19',
            mkt: 'en'
        };
        await axios.post(`${NewsApi.server}${NewsApi.port}${NewsApi.api.news}`, Keywordserach).then(res => {
            this.setState({
                allNews: res.data.value
            })
            // console.log(this.state.allNews);

        }).catch(function (error) {
            console.log(error);
        })

        this.setState({
            loading: false,

        })
        await this.HealthNews
    }

    HealthNews() {
        return this.state.allNews.map((data, i) => {
            return (
                // <div className="col-md-3 mb-4">
                //     <div className="card card-cascade narrower" style={{ height: '100%' }}>

                //         <div className="view view-cascade" style={{ height: '200px' }}>
                //             <img className="card-img-top" src={`${data.image === undefined ? newsImage : data.image.thumbnail.contentUrl}`} alt="Ayurveda corona news" />
                //         </div>

                //         <div className="card-body card-body-cascade">
                //             <p className="card-title" style={{ fontSize: '15px', fontWeight: '700 !important' }}>Name : {data.name} </p>
                //             <p className="pink-text" style={{ fontSize: '12px', fontWeight: '700 !important' }}>Date : {moment(data.datePublished).format("MMM - DD - YYYY")}</p>
                //             <p className="card-text" style={{ fontSize: '13px', fontWeight: '700 !important' }}> {data.description}</p>
                //             <a href={`${data.url}`} target="_blank" className="btn btn-unique btn-sm" >Read More</a>
                //         </div>

                //     </div>
                // </div>
                // -------------------------------------------------------------------
                <div className="col-md-12 mt-1 mb-1">
                  <div className="card_news_all"> 
                    <a href={`${data.url}`} target="_blank" style={{textDecoration:'none', color:'black'}} >
                  <div className="row">
                    <div className="col-md-4">
                    <p className="card-title" style={{ fontSize: '15px', fontWeight: '800 !important' }}> <b>{data.name} </b></p>
                    <p className="pink-text" style={{ fontSize: '12px', fontWeight: '700 !important' }}>{moment(data.datePublished).format("MMM - DD - YYYY")}</p>
                    {/* <a href={`${data.url}`} target="_blank" className="btn btn-unique btn-sm" >Read More</a> */}
                    </div>    
                    <div className="col-md-6">
                   <p className="card-text" style={{ fontSize: '13px', fontWeight: '700 !important' }}> {data.description}</p>

                    </div>    
                    <div className="col--md-2">
                     <img className="img-fluid news_images_ss" src={`${data.image === undefined ? newsImage : data.image.thumbnail.contentUrl}`} alt="how relax" style={{height:'100px', width:'100px'}} />

                    </div>
                    </div>  
                    </a>  
                    </div>  
                </div>
            );
        });
    }
    render() {
        return (
            <div className="container">
                {this.state.loading ? <Loading /> : null}
                <h3 className="text-bold m-2 p-2" style={{ color: 'red' }}>Lates COVID 19 Updates </h3>
                <div className="row">
                    <div className="col-md-12">
                        <center>
                            <img src={newsImage} style={{ display: this.state.allNews.length <= 0 ? 'block' : 'none', width: '50%' }} className="img-fluid" alt="ayurveda relax" />
                        </center>
                    </div>
                    {this.HealthNews()}

                </div>

            </div>
        );
    }
}


export default Corona;