import React, { Component } from "react";
import ContactForm from "./contactForm";
import styled, { keyframes } from 'styled-components';
import { Helmet } from "react-helmet";
import Navbar from '../common/Navbar';
import Footer from "../common/Footer";
import API from "../../utils/API.js";



// const keyFrameExampleOne = keyframes`
//   0% {
//         transform: translateY(1000px);
//     }
//     100% {
//         transform: translateY(-2%);
//     }`;


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
        console.log("user input ===== ", this.state.userInput);
       
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
            console.log("calling send email API");
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


// <!--<ul class="questions" style="margin-top: 246px; margin-bottom: 326px; top: 0px; transition: top ease-out 1000ms 0ms;">
											




// <li class="textfield required attachment  visible active focus ready" id="6914119" data-model="{&quot;id&quot;:&quot;6914119&quot;,&quot;type&quot;:&quot;textfield&quot;,&quot;name&quot;:&quot;&quot;,&quot;required&quot;:true,&quot;showPadlockIcon&quot;:false}">
// 	<div class="wrapper" style="height: 269px;">
// 		<div class="item">
// 			<span>1</span>
// 			<div class="arrow"><div class="arrow-right"></div></div>
// 		</div>
//         <div class="question"><span>What's your first name, stranger?<span class="asterisk">*</span></span></div>
// 		<div class="content">
// 							<div class="description">
// 					Mine's Pedro. Let's not be strangers for much longer.
// 				</div>
// 							<div class="content-wrapper">
// 		<div class="attachment-wrapper">
// 			<div class="attachment" 
			
// 				<figure class="freezeframe-container 3" style="display: inline-block; overflow: hidden; background: transparent;">
// 					<img src="https://images.typeform.com/images/8g37kjdgiQ/image/default#.gif" data-original="https://images.typeform.com/images/8g37kjdgiQ/image/default#.gif" data-first-frame="https://images.typeform.com/images/8g37kjdgiQ/image/default.gif" style="width: 105px; height: 105px; display: block; opacity: 1;" class="freezeframe_done" animated="https://images.typeform.com/images/8g37kjdgiQ/image/default#.gif">
// 				</figure>
// 			<div class="control">
// 				<div class="input">
// 					<input class="" type="text" autocomplete="off">
// 				</div>
// 			</div>
// 			<div class="clear"></div>
// 		</div>
// 		<div class="clear"></div>
		
// 		<div class="confirm container step0">
// 			<div class="button-wrapper confirm">
// 				<div class="button nav enabled"><span>OK</span><span class="confirm"></span> 	</div>
// 			</div>
// 			<div class="text">press <strong>ENTER</strong></div>
// 		</div>
// 			</div>
// 		</div>
// 	</div>
// </li>
				  								




// <li class="email required attachment  visible" id="6914120" data-model="{&quot;id&quot;:&quot;6914120&quot;,&quot;type&quot;:&quot;email&quot;,&quot;name&quot;:&quot;&quot;,&quot;required&quot;:true,&quot;showPadlockIcon&quot;:false}">
// 	<div class="wrapper" style="height: 269px;">
// 		<div class="item">
// 			<span></span>
// 			<div class="arrow"><div class="arrow-right"></div></div>
// 		</div>
//         <div class="question"><span>What's the best email address for you,&nbsp;?<span class="asterisk">*</span></span></div>
// 		<div class="content">
// 							<div class="description">
// 					I'll use this to get back to you. No spam or unexpected newsletters here.
// 				</div>
// 							<div class="content-wrapper">
// 		<div class="attachment-wrapper">
			
        
                                                

// <div class="attachment" data-attachment="{&quot;image&quot;:&quot;https:\/\/images.typeform.com\/images\/uzCjAMwAFD\/image\/default#.gif&quot;,&quot;width&quot;:105,&quot;height&quot;:105,&quot;video_source&quot;:&quot;&quot;,&quot;video_id&quot;:&quot;&quot;}" style="width: 105px; height: 105px;">
// 						<figure class="freezeframe-container 2" style="display: inline-block; overflow: hidden; background: url(&quot;https://images.typeform.com/images/uzCjAMwAFD/image/default-firstframe.png&quot;) 0% 0% / contain;"><img src="https://images.typeform.com/images/uzCjAMwAFD/image/default#.gif" data-original="https://images.typeform.com/images/uzCjAMwAFD/image/default#.gif" data-first-frame="https://images.typeform.com/images/uzCjAMwAFD/image/default.gif" style="width: 105px; height: 105px; display: block; opacity: 0;" class="freezeframe_done" animated="https://images.typeform.com/images/uzCjAMwAFD/image/default#.gif"></figure>
// 			</div>
// 			<div class="control">
// 				<div class="input">
// 					<input type="text" class="" autocomplete="off">
// 				</div>
// 			</div>
// 			<div class="clear"></div>
// 		</div>
// 					<div class="clear"></div>
// <div class="message "><span></span><div></div></div>
// 			<div class="confirm container step0">
	



// <div class="button-wrapper confirm">
// 	<div class="button nav enabled"><span>OK</span><span class="confirm"></span> 	</div>
// </div>
// 	<div class="text">press <strong>ENTER</strong></div>
// </div>
		
// 			</div>
// 		</div>
// 	</div>
// </li>
				  								




// <li class="list    visible" id="6914121" data-model="{&quot;id&quot;:&quot;6914121&quot;,&quot;type&quot;:&quot;list&quot;,&quot;name&quot;:&quot;&quot;,&quot;required&quot;:false,&quot;showPadlockIcon&quot;:false}">
// 	<div class="wrapper" style="height: 226px;">
// 		<div class="item">
// 			<span></span>
// 			<div class="arrow"><div class="arrow-right"></div></div>
// 		</div>
//         <div class="question"><span>What's your message about?</span></div>
// 		<div class="content">
// 							<div class="description">
// 					Think of this as like the subject field in an email. But already filled in for you.
// 				</div>
// 							<div class="content-wrapper">

// 			<div class="attachment-wrapper">
				
//      		<div class="control">
//      			<div class="multiple">Choose as many as you like</div>
//      			<ul class="columns">

// 																	<li id="8290816" class="container step0" style="width: 247px;">
// 							<input type="hidden" name="value" value="I'd like to work with you" autocomplete="off">
// 							<div class="letter"><span>A</span></div>
// 							<span class="label">I'd like to work with you</span>
// 							<span class="tick"></span>
// 							<div class="aux ">
// 	<div class="bg"></div>
// 	<div class="bd"></div>
// </div>
// 						</li>

// 																	<li id="8290817" class="container step0" style="width: 247px;">
// 							<input type="hidden" name="value" value="I have some feedback" autocomplete="off">
// 							<div class="letter"><span>B</span></div>
// 							<span class="label">I have some feedback</span>
// 							<span class="tick"></span>
// 							<div class="aux ">
// 	<div class="bg"></div>
// 	<div class="bd"></div>
// </div>
// 						</li>

// 																	<li id="8290818" class="container step0" style="width: 247px;">
// 							<input type="hidden" name="value" value="I'm looking for some advice" autocomplete="off">
// 							<div class="letter"><span>C</span></div>
// 							<span class="label">I'm looking for some advice</span>
// 							<span class="tick"></span>
// 							<div class="aux ">
// 	<div class="bg"></div>
// 	<div class="bd"></div>
// </div>
// 						</li>

// 																	<li id="8290819" class="container step0" style="width: 247px;">
// 							<input type="hidden" name="value" value="I'd just like to chat" autocomplete="off">
// 							<div class="letter"><span>D</span></div>
// 							<span class="label">I'd just like to chat</span>
// 							<span class="tick"></span>
// 							<div class="aux ">
// 	<div class="bg"></div>
// 	<div class="bd"></div>
// </div>
// 						</li>

// 														</ul>
// 			</div>
// 			<div class="clear"></div>
// 		</div>
// 					<div class="clear"></div>
// <div class="message "><span></span><div></div></div>
// 			<div class="confirm container step0">
	



// <div class="button-wrapper confirm">
// 	<div class="button nav enabled"><span>OK</span><span class="confirm"></span> 	</div>
// </div>
// 	<div class="text">press <strong>ENTER</strong></div>
// </div>
// 			</div>
// 		</div>
// 	</div>
// </li>
				  								




// <li class="textarea  attachment" id="6914122" data-model="{&quot;id&quot;:&quot;6914122&quot;,&quot;type&quot;:&quot;textarea&quot;,&quot;name&quot;:&quot;&quot;,&quot;required&quot;:false,&quot;showPadlockIcon&quot;:false}">
// 	<div class="wrapper" style="height: 251px;">
// 		<div class="item">
// 			<span></span>
// 			<div class="arrow"><div class="arrow-right"></div></div>
// 		</div>
//         <div class="question"><span>What's your message?</span></div>
// 		<div class="content">
// 							<div class="content-wrapper">
// 		<div class="attachment-wrapper">
			
        
                                                

// <div class="attachment" data-attachment="{&quot;image&quot;:&quot;https:\/\/images.typeform.com\/images\/Hicd2jwmsH\/image\/default#.gif&quot;,&quot;width&quot;:105,&quot;height&quot;:105,&quot;video_source&quot;:&quot;&quot;,&quot;video_id&quot;:&quot;&quot;}" style="width: 105px; height: 105px;">
// 						<figure class="freezeframe-container 1" style="display: inline-block; overflow: hidden; background: url(&quot;https://images.typeform.com/images/Hicd2jwmsH/image/default-firstframe.png&quot;) 0% 0% / contain;"><img src="https://images.typeform.com/images/Hicd2jwmsH/image/default#.gif" data-original="https://images.typeform.com/images/Hicd2jwmsH/image/default#.gif" data-first-frame="https://images.typeform.com/images/Hicd2jwmsH/image/default.gif" style="width: 105px; height: 105px; display: block; opacity: 0;" class="freezeframe_done" animated="https://images.typeform.com/images/Hicd2jwmsH/image/default#.gif"></figure>
// 			</div>
// 			<div class="control">
// 				<div class="textarea-wrapper">
// 					<textarea class="" maxlength="" autocomplete="off" style="overflow: hidden; word-wrap: break-word; resize: none; height: 41px;"></textarea>
// 											<span class="txtarea-tip"><strong>SHIFT</strong> + <strong>ENTER</strong> to make a line break</span>
// 									</div>
// 			</div>
// 		</div>
// 					<div class="clear"></div>
// <div class="message "><span></span><div></div></div>
// 			<div class="confirm container step0">
	



// <div class="button-wrapper confirm">
// 	<div class="button nav enabled"><span>OK</span><span class="confirm"></span> 	</div>
// </div>
// 	<div class="text">press <strong>ENTER</strong></div>
// </div>
// 			</div>
// 		</div>
// 	</div>
// </li>
// 				  					</ul>-->


//  {this.state.showForm ?  <ContactForm visible={this.state.showForm} /> : <ContactForm visible={this.state.showForm} />}