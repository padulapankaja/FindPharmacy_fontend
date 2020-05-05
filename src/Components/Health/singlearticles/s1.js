import React, { Component } from 'react';
import Aside from '../aside'

import s1_1 from '../../../Images/singlepost/s1_1.jpg'

class S1 extends Component {
    constructor() {
        super();
        this.state = {

        };



    }



    render() {
        return (
            <div className="container">

                <div id="single-blog-page" className="wide-100 blog-page-section division">
                    <div className="container">
                        <div className="row">


                            <div className="col-lg-8">
                                <div className="single-blog-post pr-30">


                                    <div className="blog-post-img mb-40">
                                        <img className="img-fluid" src={s1_1} alt="ayurveda therapy" />
                                    </div>


                                    <div className="sblog-post-txt">

                                        <h4 className="h4-lg steelblue-color">Recombinant  DNA  technology </h4>
                                        {/*added start  */}
                                        <span>Posted April 23, 2020 by <span>How Relax</span></span>
                                        {/*added end  */}
                                        {/*added start  */}

                                        <p className="mt-30">In the early  1970s  there was a revolution  in  the  field of genetic research due to the  development  of gene cloning techniques and the discovery of ways of modifying and or combining genes and returning them to living cells.  The latter  is also  called  genetic engineering or recombinant DNA technology.  The recombinant DNA technology has immense commercial and scientific value  with direct applications in the  fields of industry, agriculture and medicine.
									</p>
                                        {/*added end  */}

                                        {/*added start  */}

                                        <p>Since recombinant  DNA  technology  involves the manipulation of the genetic material of an organism, it is important to know the structure and functions of  the  DNA  molecule which constitute  this genetic material.  Therefore, the students are requested to recall what they had learnt on structural and functional aspects of the  DNA  molecule before proceeding beyond
									</p>
                                        {/*added end  */}

                                        <h5 className="h5-md steelblue-color "> <b>Basic steps in Recombinant DNA technology </b></h5>

                                        <p>Recombinant DNA technology comprises a mixture of techniques, some new and some borrowed from other fields such as microbial genetics.  There are several stages involved in the process of constructing a recombinant DNA molecule.
									</p>





                                        <div className="box-list">
                                            <div className="box-list-icon blue-color"><i className="fas fa-angle-double-right"></i></div>
                                            <p className="p-sm">The specific cleavage of DNA by restriction enzymes.  <br />Initially, a DNA containing a gene or regulatory sequence of interest is cut at specific  places with an enzyme called a restriction endonuclease. </p>
                                        </div>
                                        <div className="box-list">
                                            <div className="box-list-icon blue-color"><i className="fas fa-angle-double-right"></i></div>
                                            <p className="p-sm">The fragment of DNA is then be added to the plasmid or viral DNA to make a  recombinant  DNA molecule.  </p>
                                        </div>
                                        <div className="box-list">
                                            <div className="box-list-icon blue-color"><i className="fas fa-angle-double-right"></i></div>
                                            <p className="p-sm">The plasmid is added to bacteria, which take it up in a process called  transformation. </p>
                                        </div>
                                        <div className="box-list">
                                            <div className="box-list-icon blue-color"><i className="fas fa-angle-double-right"></i></div>
                                            <p className="p-sm">Transformed host cells are selected. </p>
                                        </div>
                                        <div className="box-list mb-4">
                                            <div className="box-list-icon blue-color"><i className="fas fa-angle-double-right"></i></div>
                                            <p className="p-sm">Multiplication/ expression/ integration followed by expression of the introduced gene  in the host. </p>
                                        </div>

                                        <h5 className="h5-md steelblue-color"> <b>DNA cleavage by restriction enzymes </b></h5>

                                        <p>Restriction enzymes are found in bacteria where they are part of a system that bacteria used to protect themselves against viruses.  They are called restriction enzymes/ restriction nucleases because they restrict the growth of invading viruses by cutting up the DNA of the virus.  Each such nuclease recognizes a specific sequence of four to eight nucleotides in DNA.  Large numbers of restriction nucleases have been purified from various species of bacteria, most of which recognize different nucleotide sequences and are now available commercially.
                                									</p>
                                        <p>The enzyme makes two incisions, one through each of the sugar-phosphate backbones (i.e., each strand) of the double helix without damaging the nitrogenous bases. The chemical bonds that the enzymes cleave can be reformed by other enzymes known as ligases, so that restriction fragments carved from different chromosomes or genes can be spliced together, provided their ends are complementary.
                                        									</p>

                                        <h5 className="h5-md steelblue-color"> <b>Gene cloning </b> </h5>
                                        <p>The main idea  of molecular cloning is to insert a gene (DNA segment) of interest into an autonomously replicating DNA molecule, so that the inserted DNA segment is also replicated along with it.  This  enables to obtain several copies of  the  inserted  gene.  The  autonomously  replicating DNA  molecule  referred  to above is known as a vector/ vehicle.  The vector containing the inserted foreign DNA  segment is sometimes known as a chimeric vector.  Examples  of  such  vectors used in recombinant DNA technology are plasmids, bacteriophages  and yeast artificial chromosomes.
									</p>
                                        <p>A  plasmid  is  a  small  circular  duplex DNA  molecule  that  resemble viral DNA  in size.  These  plasmid  DNAs have  the  ability  to  enter into bacterial cells.  Inside  the bacterial cell these  plasmid  DNA can  replicate  independent of  bacterial DNA.  Their  function  in bacterial cells  is  not  clearly  known,  however  it  has  been  found  that  plasmids  contain  genes  that  confer  antibiotic  resistance.  Plasmid  DNA  can  be  purified  from bacterial cells.  After  the  purification  of  plasmid  DNA,  it  can be  cleaved  by restriction nucleases.  Using  the same  restriction  nuclease  we can cleave  the DNA  fragment that  should be cloned.  Then  cleaved  plasmid DNA  and DNA fragment that should be cloned are annealed to get a recombinant plasmid. </p>




                                        <div className="post-share-links">

                                            <div className="post-tags-list">
                                                <span><a>DNA </a></span>
                                                <span><a>Nuclease </a></span>
                                                <span><a>Gene cloning  </a></span>
                                            </div>

                                            <div className="post-share-list">
                                                <ul className="share-social-icons clearfix">
                                                    <li><a href="#" className="share-ico ico-facebook"><i className="fab fa-facebook-f"></i> Share</a></li>
                                                    <li><a href="#" className="share-ico ico-twitter"><i className="fab fa-twitter"></i> Tweet</a></li>
                                                </ul>
                                            </div>

                                        </div>
                                        {/* <!-- END BLOG POST SHARE --> */}


                                    </div>




                                    <div className="related-posts">

                                        <h5 className="h5-md steelblue-color">Related Posts</h5>


                                        <div className="row">

                                            <div className="col-md-6">
                                                <div className="blog-post">

                                                    <div className="blog-post-img">
                                                        <img className="img-fluid" src="images/blog/post-2-img.jpg" alt="blog-post-image" />
                                                    </div>

                                                    <div className="blog-post-txt">

                                                        <h5 className="h5-sm steelblue-color"><a href="single-post.html">Your Health Is In Your Hands</a></h5>

                                                        <span>Apr 28, 2019 by <span className="blue-color">Dr.Jonathan Barnes</span></span>

                                                        <p>Quaerat neque purus ipsum neque dolor primis libero tempus impedit tempor blandit sapien at
                                                        gravida donec ipsum, at porta justo...
													</p>

                                                    </div>

                                                </div>
                                            </div>



                                            <div className="col-md-6">
                                                <div className="blog-post">


                                                    <div className="blog-post-img">
                                                        <img className="img-fluid" src="images/blog/post-3-img.jpg" alt="blog-post-image" />
                                                    </div>


                                                    <div className="blog-post-txt">


                                                        <h5 className="h5-sm steelblue-color"><a href="single-post.html">How Weather Impacts Your Health</a></h5>

                                                        <span>Apr 17, 2019 by <span className="blue-color">Dr.Megan Coleman</span></span>

                                                        <p>Quaerat neque purus ipsum neque dolor primis libero tempus impedit tempor blandit sapien at
                                                        gravida donec ipsum, at porta justo...
													</p>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                </div>
                            </div>
                            {/* -------------------------------------------------------------------------------- */}

                            <Aside />
                        </div>
                    </div>


                </div>
            </div>


        );
    }
}


export default S1;