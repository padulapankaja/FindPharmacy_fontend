/*  eslint-disable */

// import axios from "axios";
class NewsApi {
  constructor() {
   /// this.serverNews = "http://89.40.15.19";
 // this.server = "http://127.0.0.1";  //locally
      this.server = "http://13.59.253.94";    //rahals server
    this.port = ":4000"
    this.portNews = ":9000";
    this.authPort = "";
    //cotact us api
    this.api = {
      all: "/pharmacy/view",    
      search: "/pharmacy/search",
      sarchphi: "/phi/searchphi",
      news: "/news/search",
      addhelp: "/helpforothers/add/",
      viewhelp: "/helpforothers/search/",
      // articels 
      getall: '/art/get',
      getspecific: '/art/sin/'


     
    };
  }
}

const NewsApis = new NewsApi();
export default NewsApis;


// all: "/pharmacy/view",      - to get all data
// search: "/pharmacy/search" - to get searched data
