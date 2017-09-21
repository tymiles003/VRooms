import React, {Component} from "react";
import styled, { keyframes } from 'styled-components';
import ReactDOM from "react-dom";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import FormContent from "./FormContent";



const keyFrameExampleOne = keyframes`
  0% {
        transform: translateY(1000px);
    }
    100% {
        transform: translateY(-2%);
    }`;

class ContactForm extends Component{

    constructor(props){
        super(props);
        this.state={
            visible:true
        }
    }
    componentDidMount(){
        // var myEl = ReactDOM.findDOMNode(this.refs.collection);
        // myEl.css("animation", ".5s ease-out 0s infinite keyFrameExampleOne");
        // console.log("CSS Animation == ", myEl.css("animation"));

        setTimeout(function(){
            this.setState({visible:false});
    }, 5000);
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
                    handleUserInput = {this.props.handleUserInput} />


     </div>
 </li>

 <li className={this.props.id === 2 ? "li-show" : "li-hide"} id="2" >
	<div className="" style={{height: "269px", background:"",transitionDelay: "1s"}}>

            <FormContent id={this.props.id} 
                    quest={this.props.quest} 
                    handleChange={this.props.handleChange} 
                    onEnter = {this.props.clicked}
                    handleUserInput = {this.props.handleUserInput}
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
                    />
     </div>
 </li>


</ReactCSSTransitionGroup>

    );
    }
}

// const ContactForm = props => {
// 	//   render() {
// 	 


// }

// : (<li className="textfield required attachment  visible active focus ready" id="1" 
// style={{}}
// data-model="{&quot;id&quot;:&quot;6914119&quot;,&quot;type&quot;:&quot;textfield&quot;,&quot;name&quot;:&quot;&quot;,&quot;requied&quot;:true,&quot;showPadlockIcon&quot;:false}">
// 	<div className="" style={{height: "269px", background:"",transitionDelay: "1s"}}>
//         HELLO WORLD  123
//         </div>
//         </li>) 
// }

export default ContactForm;