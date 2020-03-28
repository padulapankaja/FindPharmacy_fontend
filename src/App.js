   /*  eslint-disable */

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import AllShops from './Components/allshops'
import Howorder from './Components/howorder'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse,
   MDBIcon, MDBFooter, MDBContainer, MDBRow, MDBCol
} from "mdbreact";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

    

  }

  

  render() {
    return (
      <div>
      <Router>
      <div className="App">
        <MDBNavbar color="default-color" dark expand="md" >
          <MDBNavbarBrand>
            <strong className="white-text">Find Nearest Pharmacy </strong>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left>
              <MDBNavItem active>
                <MDBNavLink to="/">Find</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/howorder">How Order</MDBNavLink>
              </MDBNavItem>
              {/* <MDBNavItem>
                <MDBNavLink to="/view">About Us</MDBNavLink>
              </MDBNavItem> */}
              {/* <MDBNavItem>
                <MDBNavLink to="/update/:id">Update</MDBNavLink>
              </MDBNavItem> */}
            </MDBNavbarNav>
            {/* <MDBNavbarNav right>
              <MDBNavItem>
                <MDBNavLink className="waves-effect waves-light" to="#!">
                  <MDBIcon fab icon="twitter" />
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink className="waves-effect waves-light" to="#!">
                  <MDBIcon fab icon="google-plus-g" />
                </MDBNavLink>
              </MDBNavItem>
             
            </MDBNavbarNav> */}
          </MDBCollapse>
        </MDBNavbar>
      </div>
      <Switch>
        <Route path="/"  exact component={AllShops} />
        <Route path="/howorder"  exact component={Howorder} />
       
        </Switch>
    </Router>
      <div className="footer">
      <MDBFooter color="default-color" className="font-small pt-4 mt-4">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="12 mb-1">
              <center>
              <h5 className="title" style={{fontWeight:'900'}}>      Stay Home &nbsp; |&nbsp; Stop The Spread &nbsp;| &nbsp;Save  Lives</h5>
              </center>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
          <a href="http://lucidex.lk/" target="_blank">  &copy; {new Date().getFullYear()} Copyright&nbsp;: &nbsp; <b>Lucidex</b></a>
          </MDBContainer>
        </div>
      </MDBFooter>
    </div>
    </div>
    );
  }
}


export default App;