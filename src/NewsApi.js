/*  eslint-disable */

// import axios from "axios";
class NewsApi {
  constructor() {

     this.server = "http://127.0.0.1";
    // this.server = "http://18.220.184.55";
    this.port = ":4000"
    this.authPort = "";
    //cotact us api
    this.api = {
      all: "/pharmacy/view",    
      search: "/pharmacy/search"
    };
  }
}

const NewsApis = new NewsApi();
export default NewsApis;


// all: "/pharmacy/view",      - to get all data
// search: "/pharmacy/search" - to get searched data