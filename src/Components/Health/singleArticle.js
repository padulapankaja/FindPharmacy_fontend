import React, {Component} from 'react';

import './singleArticle.css';
import s1_1 from '../../Images/singlepost/s1_1.jpg'
import parse from 'html-react-parser';
import NewsApi from "../../NewsApi";
import axios from "axios";
import moment from 'moment'


class SingleArticle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            single: null,
            title: '',
            img: '',
            author: '',
            tag1: '',
            tag2: '',
            tag3: '',
            smaldes: '',
            content: '',
            date: ''

        };


    }

    async UNSAFE_componentWillMount() {
        console.log(this.props);
        await this.getSingledata();

        await this.getallArticels();
        await this.setContent();
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


    async getSingledata() {
        console.log("dssssssssssssssssssssss");
        var Data = {}

        await axios.get(
            `${NewsApi.server}${NewsApi.port}${NewsApi.api.getspecific}${this.props.match.params.id}`,
        ).then(Response => {
            Data = Response.data.data
        })
            .catch(err => {
                console.error(err);

            });
        await this.setState({
            single: Data,

        });
        await console.log(this.state.single);
    }

    setContent() {
        const {single} = this.state
        this.setState({
            author: single.author,
            content: single.content,
            date: single.date,
            img: single.image,
            smaldes: single.smalldes,
            tag1: single.tag1,
            tag2: single.tag2,
            tag3: single.tag3,
            title: single.title
        })
    }

    render() {
        var popularpost = this.state.articles.reverse().slice(0, 3).map((data, i) => {
            return (

                <li key={data._id} className="clearfix d-flex align-items-center mt-2 mb-2">
                    <img className="img-fluid" style={{height: '50px', width: '80px'}}
                         src={`${NewsApi.server}${NewsApi.port}/${data.image}`} alt="ayurveda health"/>
                    <p className="ml-1" style={{fontSize: '12px', fontWeight: '600'}}>{data.title}</p>
                </li>
            );
        });

        const {title, img, author, tag1, tag2, tag3, content, date} = this.state;
        return (
            <div className="container">

                <div id="single-blog-page" className="wide-100 blog-page-section division mt-3">
                    <div className="container">
                        <div className="row">


                            <div className="col-lg-8">
                                <div className="single-blog-post pr-30">


                                    <div className="blog-post-img mb-40">
                                        <img className="img-fluid" src={`${NewsApi.server}${NewsApi.port}/${img}`} alt="stress relief method"/>
                                    </div>


                                    <div className="sblog-post-txt mt-2">

                                        <h4 className="h4-lg steelblue-color mb-1" style={{fontWeight:'800'}}> <b> {title} </b></h4>
                                        <span className="mt-1 mb-4 " style={{fontSize:'12px' , fontWeight:'700'}}>Posted {moment(date).startOf('hour').fromNow()} &nbsp;  |  &nbsp; {moment(date).format('MMMM Do YYYY')}
                                            <span className="mt-1 mb-4 " style={{fontSize:'12px' , fontWeight:'700'}}> by {author}</span></span>
                                <br/>
                                <br/>
                                          {parse(content)}

                                        <div className="tags-cloud sidebar-div mb-50 ">
                                            {/*<h5 className="h5-sm steelblue-color">Tags </h5>*/}

                                            <span className="badge m-1"><a className="m-2 p-1"
                                                                           style={{color: 'black'}}>{tag1}</a></span>
                                            <span className="badge m-1"><a className="m-2 p-1"
                                                                           style={{color: 'black'}}>{tag2}</a></span>
                                            <span className="badge m-1"><a className="m-2 p-1"
                                                                           style={{color: 'black'}}>{tag3}</a></span>

                                        </div>
                                        {/* <!-- END BLOG POST SHARE --> */}


                                    </div>


                                </div>
                            </div>

                            <aside id="sidebar" className="col-lg-4">


                                <div className="popular-posts sidebar-div mb-50">
                                    <h5 className="h5-sm steelblue-color">Popular Posts</h5>
                                    <ul className="popular-posts">
                                        {popularpost}
                                    </ul>
                                </div>


                                <div className="tags-cloud sidebar-div mb-50">

                                    {/* <!-- Title --> */}
                                    <h5 className="h5-sm steelblue-color">Tags Cloud</h5>

                                    <span className="badge  m-1"><a className="m-2" style={{color: 'black'}}>Effective Treatment</a></span>
                                    <span className="badge m-1"><a className="m-2" style={{color: 'black'}}>Molecular Biology</a></span>
                                    <span className="badge m-1"><a className="m-2"
                                                                   style={{color: 'black'}}>Diagnostic</a></span>
                                    <span className="badge m-1"><a className="m-2"
                                                                   style={{color: 'black'}}>Pediatrics</a></span>
                                    <span className="badge m-1"><a className="m-2"
                                                                   style={{color: 'black'}}>Lifestyle</a></span>
                                    <span className="badge m-1"><a className="m-2"
                                                                   style={{color: 'black'}}>Pharma</a></span>
                                    <span className="badge m-1"><a className="m-2" style={{color: 'black'}}>Medicine</a></span>
                                    <span className="badge m-1"><a className="m-2" style={{color: 'black'}}>Research</a></span>
                                </div>
                            </aside>


                        </div>
                    </div>


                </div>
            </div>


        );
    }
}


export default SingleArticle;
