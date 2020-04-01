import React, { Component } from 'react';


import './onehelp.css'
class OneHelp extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };



    }
componentWillMount(){
    // console.log("-------------- props-----------");
    // console.log(this.props)
    // console.log("-------------- props-----------");
    
}


    render() {
        return (
           
                <div className="col-md-12 mt-1 mb-1">
                    <div className="row Onehelp_card_view_react mt-1 pb-2">
                        <div className="col-md-12 d-flex justify-content-between new_css_m" style={{ backgroundColor:  this.props.list.ostatus != "Urgent" ? "#eccc68" : "#ff4757", borderTopLeftRadius:'5px',  borderTopRightRadius:'5px'  }}>
                            <h6 className="font-weight-bold m-1 p-1">Province : { this.props.list.oprovince} </h6>
                            <h6 className="font-weight-bold m-1 p-1">District :  { this.props.list.odistrict} </h6>
                            <h6 className="font-weight-bold m-1 p-1">Need : { this.props.list.owhatneed} </h6>
                            <h6 className="font-weight-bold m-1 p-1">Status : { this.props.list.ostatus} </h6>
                        </div>
                        <div className="col-md-12 pb-2" style={{ backgroundColor: '#dfe4ea' }}>
                            <div className="row">
                                <div className="col-md-2 mt-1"><p style={{ fontWeight: '800', marginBottom: '0px' }}>Name  </p></div>
                                <div className="col-md-4  mt-1"><p style={{ marginBottom: '0px' }}> :  { this.props.list.oname}  </p></div>
                                <div className="col-md-2  mt-1"><p style={{ fontWeight: '800' , marginBottom: '0px'}}> Contact No  </p></div>
                                <div className="col-md-4  mt-1"><p style={{ marginBottom: '0px' }}> :  { this.props.list.ocontactno} </p></div>
                                <div className="col-md-2  mt-1"><p style={{ fontWeight: '800' , marginBottom: '0px'}}> Address / Landmark  </p></div>
                                <div className="col-md-10  mt-1"><p style={{ marginBottom: '0px' }}> : { this.props.list.oaddressL} </p></div>
                                <div className="col-md-2  mt-1"><p style={{ fontWeight: '800',marginBottom: '0px' }}> Impotant Information</p></div>
                                <div className="col-md-10  mt-1"><p style={{ marginBottom: '0px' }}> : { this.props.list.oimportant} </p></div>
                            </div>
                        </div>
                        <div className="col-md-12 mt-2">
                            <h6 style={{fontSize:'14px'}}>Provider details</h6>
                        </div>
                        <div className="col-md-12">
                            <div className="row" style={{fontSize:'12px'}}>
                                <div className="col-md-1  mt-1"><p style={{ fontWeight: '800' , marginBottom: '0px' }}>Name   </p></div>
                                <div className="col-md-2   mt-1"><p style={{ marginBottom: '0px' }}> : { this.props.list.yname} </p></div>
                                <div className="col-md-1 mt-1"><p style={{ fontWeight: '800' , marginBottom: '0px' }}> Contact No  </p></div>
                                <div className="col-md-2 mt-1"><p style={{ marginBottom: '0px' }}> : { this.props.list.ycontactno} </p></div>
                                <div className="col-md-1 mt-1"><p style={{ fontWeight: '800' , marginBottom: '0px' }}> Province  </p></div>
                                <div className="col-md-2 mt-1"><p style={{ marginBottom: '0px' }}> : { this.props.list.yprovince} </p></div>
                                <div className="col-md-1 mt-1"><p style={{ fontWeight: '800' , marginBottom: '0px' }}> District   </p></div>
                                <div className="col-md-2 mt-1"><p style={{ marginBottom: '0px' }}> :  { this.props.list.ydistrict}  </p></div>
                                <div className="col-md-3 mt-1"><p style={{ fontWeight: '800' , marginBottom: '0px' }}> How  he/she  know that people or family  </p></div>
                                <div className="col-md-5 mt-1"><p style={{ marginBottom: '0px' }}> :  { this.props.list.yhowknow} </p></div>
                                {/* <div className="col-md-1 mt-1"><p style={{ fontWeight: '800' , marginBottom: '0px' }}> Post Date</p></div>
                              <div className="col-md-2 mt-1"><p style={{ marginBottom: '0px' }}> : 2020-30-04 </p></div> */}

                            </div>
                        </div>         
                    </div>
                </div>
               
                /* <div className="col-md-12">
                    <div className="row Onehelp_card_view_react mt-1 pb-2">
                        <div className="col-md-12 d-flex justify-content-between new_css_m" style={{ backgroundColor: '#ff4757', borderTopLeftRadius:'5px',  borderTopRightRadius:'5px' }}>
                            <h6 className="font-weight-bold m-1 p-1">Province : Southern </h6>
                            <h6 className="font-weight-bold m-1 p-1">District : Galle </h6>
                            <h6 className="font-weight-bold m-1 p-1">Need : Medicines </h6>
                            <h6 className="font-weight-bold m-1 p-1">Status :Urgent </h6>
                        </div>
                        <div className="col-md-12 pb-2" style={{ backgroundColor: '#dfe4ea' }}>
                            <div className="row">
                                <div className="col-md-2 mt-1"><p style={{ fontWeight: '800', marginBottom: '0px' }}>Name  </p></div>
                                <div className="col-md-4  mt-1"><p style={{ marginBottom: '0px' }}> : Lorem ispum kkkssss </p></div>
                                <div className="col-md-2  mt-1"><p style={{ fontWeight: '800' , marginBottom: '0px'}}> Contact No  </p></div>
                                <div className="col-md-4  mt-1"><p style={{ marginBottom: '0px' }}> : 071 62 58 055 </p></div>
                                <div className="col-md-2  mt-1"><p style={{ fontWeight: '800' , marginBottom: '0px'}}> Address / Landmark  </p></div>
                                <div className="col-md-10  mt-1"><p style={{ marginBottom: '0px' }}> : Adress or landmark  Adress or landmark  Adress or landmark </p></div>
                                <div className="col-md-2  mt-1"><p style={{ fontWeight: '800',marginBottom: '0px' }}> Impotant Information</p></div>
                                <div className="col-md-10  mt-1"><p style={{ marginBottom: '0px' }}> : Impotant Information Adress or landmark  Adress or landmark  Adress or landmark </p></div>
                            </div>
                        </div>
                        <div className="col-md-12 mt-2">
                            <h6 style={{fontSize:'14px'}}>Provider details</h6>
                        </div>
                        <div className="col-md-12">
                            <div className="row" style={{fontSize:'12px'}}>
                                <div className="col-md-1  mt-1"><p style={{ fontWeight: '800' , marginBottom: '0px' }}>Name   </p></div>
                                <div className="col-md-2   mt-1"><p style={{ marginBottom: '0px' }}> : Lorem ispum kkkssss </p></div>
                                <div className="col-md-1 mt-1"><p style={{ fontWeight: '800' , marginBottom: '0px' }}> Contact No  </p></div>
                                <div className="col-md-2 mt-1"><p style={{ marginBottom: '0px' }}> : 071 62 58 055 </p></div>
                                <div className="col-md-1 mt-1"><p style={{ fontWeight: '800' , marginBottom: '0px' }}> Province  </p></div>
                                <div className="col-md-2 mt-1"><p style={{ marginBottom: '0px' }}> : Western </p></div>
                                <div className="col-md-1 mt-1"><p style={{ fontWeight: '800' , marginBottom: '0px' }}> District   </p></div>
                                <div className="col-md-2 mt-1"><p style={{ marginBottom: '0px' }}> : Colombo </p></div>
                                <div className="col-md-3 mt-1"><p style={{ fontWeight: '800' , marginBottom: '0px' }}> How  he/she  know that people or family  </p></div>
                                <div className="col-md-5 mt-1"><p style={{ marginBottom: '0px' }}> : Adress or landmark  Adress or landmark  Adress or landmark </p></div>
                                <div className="col-md-1 mt-1"><p style={{ fontWeight: '800' , marginBottom: '0px' }}> Post Date</p></div>
                              <div className="col-md-2 mt-1"><p style={{ marginBottom: '0px' }}> : 2020-30-04 </p></div>

                            </div>
                        </div>         
                    </div>
                </div> */

           
        );
    }
}


export default OneHelp;

