import axios from "axios";

const API = {
  // Retrieves all quotes from the db
  // getQuotes: function() {
  //   return axios.get("/api/quotes");
  // },
  // // Saves a new quote to the db
  // saveQuote: function(text) {
  //   return axios.post("/api/quotes", { text });
  // },
  // // Deletes a quote from the db
  // deleteQuote: function(id) {
  //   return axios.delete(`/api/quotes/${id}`);
  // },
  // // Toggles a quote's favorite property in the db
  // favoriteQuote: function(quote) {
  //   quote.favorited = !quote.favorited;
  //   const { _id, favorited } = quote;
  //   return axios.patch(`/api/quotes/${_id}`, { favorited });
  // },

  loginFacebook: function(){
  console.log("inside handle facebook login API function");

    return axios.get("/auth/facebook");
  },

  loginGoogle: function(){
  console.log("inside handle google login API function");

    return axios.get("/auth/google").then(function(res){
      console.log("response ;;; ",res);
    });
  },

  loginTwitter: function(){
    return axios.get("/auth/twitter");
  },

  login: function(){
    console.log("inside API login function");
    return axios.post("/login").then(function(res){
      console.log("response === ", res);
    });
  },

  signup: function(){
    return axios.post("/signup");
  }

  // gLogin:function(){
  //   return axios.get("http://localhost:5000/glogin");
  // }


};

export default API;
