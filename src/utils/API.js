import axios from "axios";

const API = {

    logout: function() {
        return axios.get("/logout/");
    },

    isEmailExists: function(email) {
        console.log("inside handle facebook login API function");
        return axios.post("/emailExists", { email });
    },

    loginGoogle: function() {
        console.log("inside handle google login API function");
        return axios.get("/auth/google").then(function(res) {
            console.log("response ;;; ", res);
        });
    },

    loginTwitter: function() {
        return axios.get("/auth/twitter");
    },

    login: function() {
        console.log("inside API login function");
        return axios.post("/login").then(function(res) {
            console.log("response === ", res);
        });
    },

    signup: function() {
        return axios.post("/signup");
    },

    // gLogin:function(){
    //   return axios.get("http://localhost:5000/glogin");
    // }

    //   scrapeZillow: (qURL) => {
    // 	  return axios({
    // 		  method: 'POST',
    // 		  url: '/scrape',
    // 		  data: qURL
    // 	  })
    // 	  .then( (response) => {
    // 		//   console.log('response',response);
    // 		  return response;
    // 	  })
    // 	  .catch( error => console.log('error',error) )
    //   }

    fetchListing: zpid => {
        //   const apiURL = 'http://www.zillow.com/webservice/GetUpdatedPropertyDetails.htm';
        return axios({
            method: "POST",
            url: "/fetch-listing",
            data: zpid
        })
        .then(response => response)
        .catch(error => console.log("error", error));
    },

    sendEmail: (answers) => {
        console.log("inside send email API");
        return axios.post("/api/email", {answers});

    }
};

export default API;
