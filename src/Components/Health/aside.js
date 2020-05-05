import React, { Component } from 'react';



class Aside extends Component {
    constructor() {
        super();
        this.state = {

        };

        

    }

    

    render() {
        return (
            
            <aside id="sidebar" className="col-lg-4">

            <div className="blog-categories sidebar-div mb-50">
                <h5 className="h5-sm steelblue-color">Categories</h5>

                <ul className="blog-category-list clearfix">
                    <li><a ><i className="fas fa-angle-double-right blue-color"></i> Western Medicine </a> <span>(5)</span></li>
                    <li><a ><i className="fas fa-angle-double-right blue-color"></i> Ayurveda</a> <span>(13)</span></li>
                    <li><a ><i className="fas fa-angle-double-right blue-color"></i> Stress Relief</a> <span>(6)</span></li>
                    <li><a ><i className="fas fa-angle-double-right blue-color"></i> News </a> <span>(8)</span></li>
                    {/* <li><a href="#"><i className="fas fa-angle-double-right blue-color"></i> Pharma</a> <span>(12)</span></li> */}
                </ul>

            </div>

            <div className="popular-posts sidebar-div mb-50">

                <h5 className="h5-sm steelblue-color">Popular Posts</h5>

                <ul className="popular-posts">

                    <li className="clearfix d-flex align-items-center">

                        <img className="img-fluid" src="images/blog/latest-post-1.jpg" alt="blog-post-preview" />

                        <div className="post-summary">
                            <a href="single-post.html">Etiam sapien accumsan molestie ante empor ...</a>
                            <p>43 Comments</p>
                        </div>

                    </li>

                    <li className="clearfix d-flex align-items-center">

                        <img className="img-fluid" src="images/blog/latest-post-2.jpg" alt="blog-post-preview" />

                        <div className="post-summary">
                            <a href="single-post.html">Blandit tempor sapien ipsum, porta justo ...</a>
                            <p>38 Comments</p>
                        </div>

                    </li>

                    <li className="clearfix d-flex align-items-center">

                        <img className="img-fluid" src="images/blog/latest-post-3.jpg" alt="blog-post-preview" />

                        <div className="post-summary">
                            <a href="single-post.html">Cursus risus laoreet turpis auctor varius ...</a>
                            <p>29 Comments</p>
                        </div>

                    </li>
                </ul>

            </div>


            <div className="tags-cloud sidebar-div mb-50">

                <h5 className="h5-sm steelblue-color">Tags Cloud</h5>

                <span className="badge"><a >Effective Treatment</a></span>
                <span className="badge"><a >Molecular Biology</a></span>
                <span className="badge"><a >Diagnostic</a></span>
                <span className="badge"><a >Pediatrics</a></span>
                <span className="badge"><a >Lifestyle</a></span>
                <span className="badge"><a >Pharma</a></span>
                <span className="badge"><a >Medicine</a></span>
                <span className="badge"><a >Research</a></span>
            </div>



            <div className="image-widget sidebar-div">
                <a href="#">
                    <img className="img-fluid" src="images/blog/image-widget.jpg" alt="image-widget" />
                </a>
            </div>


        </aside>
        );
    }
}


export default Aside;