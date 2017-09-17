import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Navbar from '../common/Navbar';
import API from "../../utils/API.js"


const style = {
    errMsg : {
      color:"red", 
      fontWeight:"bold", 
      fontSize:"11px", 
      marginTop: "-10px",
      marginBottom: "20px" 
    }
}


class Signup extends Component{

    constructor(props){
      super(props);
      this.state={
          errorMessage:"",
          email:"",
          password:"",
          password2:"",
          formErrors: [],
          emailValid: false,
          passwordValid: false
      };
    }

    handleUserInput =  (e) => {

        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value}, 
                      () => { this.validateField(name, value) });

      // e.target.className = "inputError";               
}

validateField(fieldName, value) {
  let fieldValidationErrors = this.state.formErrors;
  let emailValid = this.state.emailValid;
  let passwordValid = this.state.passwordValid;

  switch(fieldName) {
    case 'email':
      emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
      fieldValidationErrors.email = emailValid ? '' : 'Email Id is invalid';
      if(fieldValidationErrors.email === ""){
          let err = this.isEmailExists(value);
          console.log("before if failure loop err == ", err);
          if(err === "failure"){
            console.log("inside failure loop");
            emailValid = false;
            fieldValidationErrors.email = "Email Already taken";
            // this.setState({errorMessage:"Email Already taken"});
          }
        }
      break;
    case 'password':
      passwordValid = value.length >= 6;
      fieldValidationErrors.password = passwordValid ? '': ' Password is too short';
      break;
    default:
      break;
  }
  
  this.setState({formErrors: fieldValidationErrors,
                  emailValid: emailValid,
                  passwordValid: passwordValid
                }, this.validateForm);
}


    isEmailExists = (email) => {
      // event.preventDefault();
      console.log("insided isEmailExists");
      this.setState({errorMessage:""});
      API.isEmailExists(email).then(res => {
        console.log("response of isEmailExists ==  ",res.data);
        if(res.data === "failure"){
          this.setState({errorMessage:"Email Already taken"});
        }
        console.log("Error Message == ", this.state.errorMessage);
        return res.data;
      });
      
    }

    passwordMatches = (e) => {
      e.preventDefault();
    }

    render(){

      let err = false;
      // if(this.state.formErrors){
      //   err = true;
      // }
     
      return (

<div>
      <Helmet>
				<link rel="stylesheet" href="/css/pages/signup.css" />
			</Helmet>
      
        <Navbar logo_filename="VRooms_V11_Hori_White" theme="opaque-black-bg"/>

        <div className="error">{this.state.errorMessage}</div>

        <div id="login-box">
          <div className="left">
            <h1>Sign up</h1>
            <form action="/signup" method="post">
                <input type="text" name="email" placeholder="E-mail" className={(!this.state.emailValid) ? "inputError" : "inputText"} onChange={this.handleUserInput}/>
                {(!this.state.emailValid) ? <div style={style.errMsg}>{this.state.formErrors.email}</div> : ""}
                
                <input type="password" name="password" placeholder="Password" className={(!this.state.passwordValid) ? "inputError" : "inputText"} onChange={this.handleUserInput}/>
                {(!this.state.passwordValid) ? <div style={style.errMsg}>{this.state.formErrors.password}</div> : ""}
               
                <input type="password" name="password2" placeholder="Retype password" className={err ? "inputError" : "inputText"} onChange={this.handleUserInput}/>
                {err ? <span style={style.errMsg}>{this.state.formErrors}</span> : ""}
                
                <input type="submit" name="signup_submit" value="Sign me up" />
              </form>
            </div>

          <div className="right">
            <span className="loginwith">Sign in with Social network</span>
            
            <button className="social-signin facebook"><a href="auth/facebook" >Log in with facebook</a></button>
            <button className="social-signin twitter"><a href="auth/twitter">Log in with Twitter</a></button>
            <button className="social-signin google" ><a href="auth/google" >Log in with Google+</a></button>
          </div>
          <div className="line"></div>
          <div className="or">OR</div>
      </div>

</div>

         
        );

    }

}

export default Signup;


//  <div className="col-sm-8 col-sm-offset-2">
//             <div className="jumbotron text-center">
//               <h1><span className="fa fa-sign-in"></span> Signup</h1>
//               <form action="/signup" method="post">
//                 <div className="form-group">
//                     <label>Email</label>
//                     <input type="text" className="form-control" name="email" />
//                 </div>
//                 <div className="form-group">
//                   <label>Password</label>
//                   <input type="password" className="form-control" name="password" />
//                 </div>
//                 <div>
//                   <input type="submit" className="form-control" value="Submit" />
//                 </div>
//               </form>
//             </div>
//             <span className="fa fa-sign-in"> Already have an account?<a href="/login"> Login</a></span>
//             <p>Or go <a href="/">home</a>.</p>
//           </div>

            // <input type="text" name="username" placeholder="Username" />
