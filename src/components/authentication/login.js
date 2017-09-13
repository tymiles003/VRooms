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
						    <form action="/login" method="post">
						      <div className="form-group">
						         
						          <input type="text" className="form-control" name="email" placeholder="email"/>
						      </div>
						      <div className="form-group">
						        
						        <input type="password" className="form-control" name="password" placeholder="password"/>
						      </div>
						        
						        <button className="form-control" type="submit" className="btn login">Login</button>
								<h5>-----------------OR---------------</h5>
						        <a href="auth/google" className="btn google" >Google</a>
						        <a href="auth/facebook" className="btn facebook" >Facebook</a>
						        <a href="auth/twitter" className="btn twitter">Twitter</a>
						    </form>
				  </div>
				  <span className=""> Don't have an account?<a href="/signup"> Signup</a></span>
				  <p>Or go <a href="/">home</a>.</p>
				</div>
			);
	}
} 

export default Login;


				    // <h1><span className="fa fa-sign-in"></span> Login</h1>
//  <label>Email</label>
//  <label>Password</label>
