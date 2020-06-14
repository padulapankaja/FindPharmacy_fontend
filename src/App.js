import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import AllShops from './Components/allshops'
import Howorder from './Components/howorder'
import FindPhis from './Components/findphis'
import HealthNews from './Components/News/healthnews'
import AyurvedaNews from './Components/News/ayurvedanews'
import Corona from './Components/News/corona'
import HelpforOthers from './Components/Forum/helpforothers'
import ViewWhoWantHelp from './Components/Forum/viewhowwanthelp'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import lucidex from './Images/lucidex.png'
import howrelaxonlylogo from './Images/howrelaxOnlyLogo.png'
import word from './Images/howrelaxwords.png'
import AboutUs from './Components/CommoanPages/aboutus'
import PP from './Components/CommoanPages/pp'
import TOS from './Components/CommoanPages/tos'
import CN from './Components/CommoanPages/contact'
import HealthAticles from './Components/Health/healthArticles'
import SinglePost from './Components/Health/singleArticle'
import S1 from './Components/Health/singlearticles/s1'

import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse,
    MDBIcon, MDBFooter, MDBContainer, MDBRow, MDBCol, MDBDropdown, MDBDropdownItem, MDBDropdownToggle, MDBDropdownMenu
} from "mdbreact";

class App extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);

        this.state = {
            collapse: false
        };


    }

    onClick() {
        this.setState({
            collapse: !this.state.collapse,
        });
    }
    render() {
        return (
            <div>
                <Router>
                    <div className="App">
                        <MDBNavbar color="default-color" dark expand="md">
                            <MDBNavbarBrand>
                                {/* <strong className="white-text">HowRelax </strong> */}
                                <img src={word} className="img-fluid" style={{height: '30px'}}/>
                            </MDBNavbarBrand>
                            <MDBNavbarToggler onClick={this.onClick}/>
                            <MDBCollapse id="navbarCollapse3" isOpen={this.state.collapse} navbar>

                                <MDBNavbarNav left>

                                    <MDBNavItem>
                                        <MDBNavLink to="/ar">Articles</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="/healthnews">Health News</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink to="/ayurveda">Ayurveda News </MDBNavLink>
                                    </MDBNavItem>

                                    <MDBNavItem>
                                        <MDBNavLink to="/corona"  style={{color: '#2980b9', fontWeight: '900'}}>Corona Updates </MDBNavLink>
                                    </MDBNavItem>



                                    {/*<MDBNavItem>*/}
                                    {/*    <MDBDropdown>*/}
                                    {/*        <MDBDropdownToggle nav caret>*/}
                                    {/*            <div className="d-md-inline">News</div>*/}
                                    {/*        </MDBDropdownToggle>*/}
                                    {/*        <MDBDropdownMenu className="dropdown-default">*/}
                                    {/*            <MDBDropdownItem href="/corona"*/}
                                    {/*                             style={{color: '#2980b9', fontWeight: '900'}}>Lates*/}
                                    {/*                Corona Updates</MDBDropdownItem>*/}
                                    {/*            <MDBDropdownItem href="/ha">Health Articles</MDBDropdownItem>*/}

                                    {/*        </MDBDropdownMenu>*/}
                                    {/*    </MDBDropdown>*/}
                                    {/*</MDBNavItem>*/}
                                    <MDBNavItem>
                                        <MDBDropdown>
                                            <MDBDropdownToggle nav caret>
                                                <div className="d-md-inline">Emergency</div>
                                            </MDBDropdownToggle>
                                            <MDBDropdownMenu className="dropdown-default">
                                                <MDBDropdownItem href="/">Find Pharmacy</MDBDropdownItem>
                                                <MDBDropdownItem href="/findphis">Find PHI Agents</MDBDropdownItem>
                                                <MDBDropdownItem href="/howorder">How Order</MDBDropdownItem>

                                            </MDBDropdownMenu>
                                        </MDBDropdown>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBDropdown>
                                            <MDBDropdownToggle nav caret>
                                                <div className="d-md-inline">Help for Others</div>
                                            </MDBDropdownToggle>
                                            <MDBDropdownMenu className="dropdown-default">
                                                <MDBDropdownItem href="/howwanthelp">Who needs help</MDBDropdownItem>
                                                <MDBDropdownItem href="/helpforothers">Add
                                                    informations</MDBDropdownItem>
                                            </MDBDropdownMenu>
                                        </MDBDropdown>
                                    </MDBNavItem>
                                </MDBNavbarNav>
                                <MDBNavbarNav right>
                                    <MDBNavItem>
                                        <MDBNavLink className="waves-effect waves-light" to="/aboutus"
                                                    style={{fontWeight: '700'}}>
                                            <img src={howrelaxonlylogo} className="img-fluid"
                                                 style={{height: '30px', width: '30px'}}/>
                                        </MDBNavLink>
                                    </MDBNavItem>
                                </MDBNavbarNav>
                            </MDBCollapse>
                        </MDBNavbar>
                    </div>
                    <Switch>
                        <Route path="/" exact component={AllShops}/>
                        <Route path="/howorder" exact component={Howorder}/>
                        <Route path="/findphis" exact component={FindPhis}/>
                        <Route path="/healthnews" exact component={HealthNews}/>
                        <Route path="/ayurveda" exact component={AyurvedaNews}/>
                        <Route path="/corona" exact component={Corona}/>
                        <Route path="/helpforothers" exact component={HelpforOthers}/>
                        <Route path="/howwanthelp" exact component={ViewWhoWantHelp}/>
                        <Route path="/aboutus" exact component={AboutUs}/>
                        <Route path="/cn" exact component={CN}/>
                        <Route path="/tos" exact component={TOS}/>
                        <Route path="/pp" exact component={PP}/>
                        <Route path="/ar" exact component={HealthAticles}/>
                        <Route path='/ar/wes/:id' component={SinglePost}/>
                        <Route path='*' component={HealthAticles}/>
                        <Route path='*' component={HealthAticles}/>
                        <Route component={() => (<div>404 Not found </div>)} />

                    </Switch>
                    {/* ******************************************** */}
                    <MDBFooter color="teal accent-4" className="font-small pt-4 mt-4">
                        <MDBContainer fluid className="text-center text-md-left">
                            <MDBRow>
                                <MDBCol className="col-12 col-md-3">
                                    <img src={word} className="img-fluid" style={{height: '30px'}}/>
                                    <p  className="ml-2 p-1" style={{fontWeight: '500', color:"white", fontSize:'12px'}}> Welcome to How Relax, your number one source for all things your relax life.</p>
                                </MDBCol>
                                <MDBCol className="col-6 col-md-3">
                                    <ul>
                                        <li className="list-unstyled mt-1 "
                                            style={{fontWeight: '400', textAlign: 'left'}}>
                                            <a href="/">Find Pharmacy</a>
                                        </li>
                                        <li className="list-unstyled mt-1 "
                                            style={{fontWeight: '400', textAlign: 'left'}}>
                                            <a href="/findphis">Find PHI Agents</a>
                                        </li>
                                        <li className="list-unstyled mt-1 "
                                            style={{fontWeight: '400', textAlign: 'left'}}>
                                            <a href="/howwanthelp">Who need Help</a>
                                        </li>
                                        <li className="list-unstyled mt-1 "
                                            style={{fontWeight: '400', textAlign: 'left'}}>
                                            <a href="/helpforothers">Add Informations</a>
                                        </li>
                                    </ul>
                                </MDBCol>
                                <MDBCol className="col-6 col-md-3">
                                    <ul>
                                        <li className="list-unstyled mt-1 "
                                            style={{fontWeight: '400', textAlign: 'left'}}>
                                            <a href="/corona">Lates Corona Updates</a>
                                        </li>
                                        <li className="list-unstyled mt-1 "
                                            style={{fontWeight: '400', textAlign: 'left'}}>
                                            <a href="/healthnews">Health News</a>
                                        </li>
                                        <li className="list-unstyled mt-1 "
                                            style={{fontWeight: '400', textAlign: 'left'}}>
                                            <a href="/ayurveda">Ayurvedic News</a>
                                        </li>
                                    </ul>
                                </MDBCol>
                                <MDBCol className="col-6 col-md-3">
                                    <ul>
                                        <li className="list-unstyled mt-1 "
                                            style={{fontWeight: '400', textAlign: 'left'}}>
                                            <a href="/aboutus">About Us</a>
                                        </li>
                                        <li className="list-unstyled mt-1 "
                                            style={{fontWeight: '400', textAlign: 'left'}}>
                                            <a href="/cn">Contact Us</a>
                                        </li>
                                        <li className="list-unstyled mt-1 "
                                            style={{fontWeight: '400', textAlign: 'left'}}>
                                            <a href="/tos">Terms and Conditions</a>
                                        </li>
                                        <li className="list-unstyled mt-1 "
                                            style={{fontWeight: '400', textAlign: 'left'}}>
                                            <a href="/pp">Privacy Policy</a>
                                        </li>
                                    </ul>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                        <div className="footer-copyright text-center py-1">
                            <MDBContainer fluid>
                                <a href="http://lucidex.lk/"
                                   target="_blank"> Copyright&nbsp; &copy; {new Date().getFullYear()} &nbsp;: &nbsp;
                                    <b>Lucidex</b></a>
                            </MDBContainer>
                        </div>
                    </MDBFooter>
                </Router>
            </div>
        );
    }
}


export default App;
