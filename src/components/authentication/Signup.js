import React, { Component } from "react";


class Signup extends Component{

    constructor(){
      super();
      this.state={

      };
    }

    render(){

      return (
          <div className="col-sm-8 col-sm-offset-2">
            <div className="jumbotron text-center">
              <h1><span className="fa fa-sign-in"></span> Signup</h1>
              <form action="/signup" method="post">
                <div className="form-group">
                    <label>Email</label>
                    <input type="text" className="form-control" name="email" />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input type="password" className="form-control" name="password" />
                </div>
                <div>
                  <input type="submit" className="form-control" value="Submit" />
                </div>
              </form>
            </div>
            <span className="fa fa-sign-in"> Already have an account?<a href="/login"> Login</a></span>
            <p>Or go <a href="/">home</a>.</p>
          </div>
        );

    }

}

export default Signup;
