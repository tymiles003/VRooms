import React, {Component} from "react";
import styled, { keyframes } from 'styled-components';
import ReactDOM from "react-dom";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import FormContent from "./FormContent";




class ContactForm extends Component{

    constructor(props){
        super(props);
        this.state={
            visible:true
        }
    }
    componentDidMount(){
       
    }

    render(){
        return (
<ReactCSSTransitionGroup
                    transitionName="anim"
                    transitionAppear={true}
                    transitionEnterTimeout={5000}
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}
                    component="ul"
                    > 
           
        
<li className={this.props.id === 1 ? "li-show" : "li-hide"} id="1" >

	<div className="" style={{background:"",transitionDelay: "1s"}}>

        <FormContent id={this.props.id} 
                    quest={this.props.quest} 
                    handleChange={this.props.handleChange} 
                    onEnter = {this.props.clicked}
                    handleUserInput = {this.props.handleUserInput} 
                    img = {this.props.img}
                    enableOk = {this.props.enableOk}
                    />


     </div>
 </li>

 <li className={this.props.id === 2 ? "li-show" : "li-hide"} id="2" >
	<div className="" style={{height: "269px", background:"",transitionDelay: "1s"}}>

            <FormContent id={this.props.id} 
                    quest={this.props.quest} 
                    handleChange={this.props.handleChange} 
                    onEnter = {this.props.clicked}
                    handleUserInput = {this.props.handleUserInput}
                    img = {this.props.img}
                    enableOk = {this.props.enableOk}
                    />
     </div>
 </li>

 <li className={this.props.id === 3 ? "li-show" : "li-hide"} id="3" >
	<div className="" style={{height: "269px", background:"",transitionDelay: "1s"}}>
            <FormContent id={this.props.id} 
                    quest={this.props.quest} 
                    handleChange={this.props.handleChange} 
                    onEnter = {this.props.clicked}
                    handleUserInput = {this.props.handleUserInput}
                    img = {this.props.img}
                    enableOk = {this.props.enableOk}
                    />
     </div>
 </li>

 <li className={this.props.id === 4 ? "li-show" : "li-hide"} id="4" >
	<div className="" style={{height: "269px", background:"",transitionDelay: "1s"}}>
            <FormContent id={this.props.id} 
                    quest={this.props.quest} 
                    handleChange={this.props.handleChange} 
                    onEnter = {this.props.clicked}
                    handleUserInput = {this.props.handleUserInput}
                    img = {this.props.img}
                    enableOk = {this.props.enableOk}
                    />
     </div>
 </li>


</ReactCSSTransitionGroup>

    );
    }
}



export default ContactForm;