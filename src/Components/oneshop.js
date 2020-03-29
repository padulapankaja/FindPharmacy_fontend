
import React, { Component } from 'react';



class Oneshop extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };




    }

    componentWillMount() {
        // console.log(this.props.list)
    }

    render() {
        return (

                <div className="col-lg-6 col-md-12 col-sm-12 text-left mt-3" data-aos="fade-up" style={{ borderRadius: '15px' }}>
                    <div className="card_view_react" >
                        <div className="card booking-card" style={{ border: 'none' }}>
                            <div className="card-body" style={{height:'100%'}}>


                                <div className="row">
                                    {/* {this.props.list.no} */}

                                    <div className="col-md-12">
                                        <p className="card-title" style={{ fontWeight: '600' }}>Pharamacy Name  : {this.props.list.nop}    </p>
                                    </div>
                                    <div className="col-md-5">
                                        <p className="card-title" style={{ fontWeight: '600' }}>District  : {this.props.list.district} </p>
                                    </div>
                                    <div className="col-md-7">
                                        <p className="card-title" style={{ fontWeight: '600' }}>MOH Area  : {this.props.list.moharea} </p>
                                    </div>
                                    <div className="col-md-12">
                                        <p className="mb-1" ><b>Address :  {this.props.list.address}  </b></p>
                                    </div>

                                    <div className="col-md-12"> <p> <i class="fas fa-phone-square" style={{ color: '#7f8c8d' }}></i> <b>Phone</b>  :{this.props.list.contactno}</p> </div>

                                    <div className="col-md-12">
                                        <hr />
                                    </div>
                                    <div className="col-md-12 row">  
                                        <div className="col-md-12"> <p ><b>Online Contact Details</b> </p></div>
                                        <div className="col-md-6" style={{display:this.props.list.whatsappno != "" ? 'block' : 'none'}}>    <a  style={{color:'black'}}  href={`tel:+94${this.props.list.whatsappno}`} > <p><i className="fab fa-whatsapp" style={{ color: 'green' }}></i> <b>Whatsapp no</b> : {this.props.list.whatsappno}</p></a> </div>
                                        <div className="col-md-6" style={{display:this.props.list.viberno != "" ? 'block' : 'none'}}> <a  style={{color:'black'}}  href={`tel:+94${this.props.list.viberno}`} > <p>  <i class="fab fa-viber" style={{ color: 'purple' }}></i> <b>Viber no</b>   : {this.props.list.viberno} </p> </a> </div>
                                        <div className="col-md-12" style={{display:this.props.list.email != "" ? 'block' : 'none'}}> <a  style={{color:'black'}}  href={`mailto:${this.props.list.email}`} >  <p><i class="far fa-envelope-open" style={{ color: '#7f8c8d' }}></i> <b>Email</b>   : {this.props.list.email} </p> </a></div>
                                    </div>

                                    <div className="col-md-12" >
                                        <hr />
                                    </div>

                                    <div className="col-md-12 row"  >
                                        <div className="col-md-12" > <p > <b>Details Of Pharmacy  </b></p> </div>
                                        <div className="col-md-5" style={{display:this.props.list.pharmacistname != "" ? 'block' : 'none'}}> <p> <b>Pharmacist Name</b> :  {this.props.list.pharmacistname}</p> </div>
                                        <div className="col-md-4" style={{display:this.props.list.owner != "" ? 'block' : 'none'}}> <p> <b>Owner</b>   : {this.props.list.owner} </p> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}


export default Oneshop;