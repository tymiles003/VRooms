import React, { Component } from "react";
import API from "../../utils/API";

class LoginForm extends Component{

	constructor(){
		super();
		this.state={
			user:[]
		};
	}

	

	render(){

		return (
				
				<div className="col-sm-8 col-sm-offset-2">
				  <div className="jumbotron text-center">
						    <form action="/login" method="post">
						      <div className="form-group">
						         
						          <input type="text" className="form-control" name="email" placeholder="email" required/>
						      </div>
						      <div className="form-group">
						        
						        <input type="password" className="form-control" name="password" placeholder="password" required/>
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

export default LoginForm;


				    // <h1><span className="fa fa-sign-in"></span> Login</h1>
//  <label>Email</label>
//  <label>Password</label>
