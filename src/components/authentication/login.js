import React, { Component } from "react";
import API from "../../utils/API";

class Login extends Component{

	constructor(){
		super();
		this.state={
			user:[]
		};
	}

	handleGoogleLogin = (event) =>{
    	event.preventDefault();
    	console.log("inside handle google login class function");
		API.loginGoogle().then(function(res){
			console.log("data ===",res);
		});
	}

	handleFacebookLogin = () =>{
		API.loginFacebook().then(function(res){
			console.log(res);
		});
	}

	handleTwitterLogin = () =>{
		API.loginTwitter().then(function(res){
			console.log(res);
		});
	}

	handleLogin = () =>{
		API.login().then(function(res){
			console.log("DATA===",res.data);
			console.log("User===",res.user);
			console.log("Response===",res);


		});
	}

	render(){

		return (
				<div className="col-sm-8 col-sm-offset-2">
				  <div className="jumbotron text-center">
				    <h1><span className="fa fa-sign-in"></span> Login</h1>
						    <form action="/login" method="post">
						      <div className="form-group">
						          <label>Email</label>
						          <input type="text" className="form-control" name="email" />
						      </div>
						      <div className="form-group">
						        <label>Password</label>
						        <input type="password" className="form-control" name="password" />
						      </div>
						        
						        <button className="form-control" type="submit">Submit</button>

						        <a href="auth/google" className="btn btn-primary" >Google</a>
						        <a href="auth/facebook" className="btn btn-primary" >Facebook</a>
						        <a href="auth/twitter" className="btn btn-primary">Twitter</a>
						    </form>
				  </div>
				  <span className="fa fa-sign-in"> Don't have an account?<a href="/signup"> Signup</a></span>
				  <p>Or go <a href="/">home</a>.</p>
				</div>
			);
	}
} 

export default Login;



