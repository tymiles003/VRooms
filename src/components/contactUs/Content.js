import React, { Component } from "react";
import ContactForm from "./contactForm";
import styled, { keyframes } from 'styled-components';
import { Helmet } from "react-helmet";
import Navbar from '../common/Navbar';
import Footer from "../common/Footer";
import API from "../../utils/API.js";



const listIds = [1,2,3,4];
const questions = ["What's your first name, stranger?",
                   "What's the best email address for you?",
                   "What's your message about?",
                   "What's your message"];
const questImage = ["https://images.typeform.com/images/8g37kjdgiQ/image/default#.gif",
                    "https://images.typeform.com/images/uzCjAMwAFD/image/default#.gif",
                    "https://images.typeform.com/images/Hicd2jwmsH/image/default#.gif",
                    "https://images.typeform.com/images/Hicd2jwmsH/image/default#.gif"];


class Content extends Component{

    constructor(props){
        super(props);
        this.state={
            name:"",
            value:"",
            quest:"",
            img:"",
            id:1,
            answers:[],
            userInput: "",
            enableOk: false
            
        }
    }

    componentDidMount(){

        this.setState({quest:questions[this.state.id - 1],
                       img:questImage[this.state.id - 1],
                     });
                       
    }

    handleUserInput = (e) =>{
        e.preventDefault();
         const name = e.target.name;
        const value = e.target.value;
         this.setState({[name]: value});

         if(this.state.userInput){
             this.setState({enableOk:true});
         } else{
             this.setState({enableOk:false});
             
         }
    }

    

    clicked = (e) => {
        e.preventDefault();
       
        let userInputs = this.state.answers;
        userInputs.push(this.state.userInput);

        let listId = this.state.id;listId++;
        this.setState({
            id : listId,
            quest : questions[listId-1],
            answers : userInputs,
            img : questImage[listId-1],
            enableOk:false
        });

        if(this.state.id === 4){
            console.log("=============Sending An Email=================");
            API.sendEmail(this.state.answers);
        }
        
    }


    render(){
        return (
<div className="pageWrapper">
        <Helmet>
                <link rel="stylesheet" href="/css/pages/About.css"></link>
				<link rel="stylesheet" href="/css/pages/contactUs.css" />
		</Helmet> 

        <Navbar logo_filename="vrooms-logo-white" theme="opaque-black-bg"/>   

    <div className ="formWrapper">    
        <div className="formContainer">
            <div className="form form-mobile">
                
                {(this.state.id <= 4) ? 
                (<div >

                    <ul className="questions" style={{marginTop: "5%", transition: "top ease-out 1000ms 0ms",
                    transitionDelay: "10s", animation: ".5s ease-out 0s infinite keyFrameExampleOne"}} >
                        <ContactForm id={this.state.id} 
                                    quest={this.state.quest} 
                                    clicked={this.clicked}
                                    handleUserInput={this.handleUserInput}
                                    img = {this.state.img}
                                    enableOk = {this.state.enableOk}
                                    />
                    </ul>

                </div>)
                : <h2 style={{color:"black", textAlign:"center"}}> Thank you! We will be in touch!</h2>
                }
             </div>
        </div>
    </div>            
        <Footer />
</div>    


        );
    }

}

export default Content;