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
			console.log("DATA===",res);
		});
	}

	handleGLogin = (e) =>{
		e.preventDefault();
		API.gLogin().then(function(res){
			console.log("DATA===",res);
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
						        
						        <button className="form-control" onClick={this.handleLogin} >Submit</button>

						        <button className="btn btn-primary" onClick={this.handleGoogleLogin}>Google</button>
						        <button className="btn btn-primary" onClick={this.handleFacebookLogin}>Facebook</button>
						        <button className="btn btn-primary" onClick={this.handleTwitterLogin}>Twitter</button>
						    </form>
				  </div>
				  <span className="fa fa-sign-in"> Don't have an account?<a href="/signup"> Signup</a></span>
				  <p>Or go <a href="/">home</a>.</p>
				</div>
			);
	}
} 

export default Login;



 // <% if (message != null) { %>
	// 			    	<div className="alert-danger"><%= message %></div>
	// 			    <% } %>