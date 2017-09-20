import React, { Component } from "react";


class FormContent extends Component{

    constructor(props){
        super(props);
        this.state={

        };
    }

    render(){

        return (

    <div className="" style={{height: "269px", background:""}}>
		<div className="item">
			<span>{this.props.id}</span>
			<div className="arrow"><div className="arrow-right"></div></div>
		</div>
        <div className="question"><span>{this.props.quest}<span className="asterisk">*</span></span></div>
		<div className="content">
							<div className="description">
					Mine's Pedro. Let's not be strangers for much longer.
				</div>
							<div className="content-wrapper">
		<div className="attachment-wrapper">
			<div className="attachment">
				<img src="https://images.typeform.com/images/8g37kjdgiQ/image/default#.gif" 
                    data-original="https://images.typeform.com/images/8g37kjdgiQ/image/default#.gif" 
                    data-first-frame="https://images.typeform.com/images/8g37kjdgiQ/image/default.gif" 
                    style={{width: "105px",height:"105px", display:"block", opacity:"1" }}
                    className="freezeframe_done" 
                    animated="https://images.typeform.com/images/8g37kjdgiQ/image/default#.gif" />
			<div className="control">
				<div className="">
					<input className="inputField" type="text" autocomplete="off" name="userInput" onChange={this.props.handleUserInput}/>
				</div>
			</div>
			<div className="clear"></div>
		</div>
		<div className="clear"></div>
		
		<div className="confirm container step0">
			<div className="button-wrapper confirm">
				<div className="button nav enabled" onClick={this.props.onEnter}><span>OK</span><span className="confirm"></span> 	</div>
			</div>
			<div className="text">press <strong>ENTER</strong></div>
		</div>
			</div>
		</div>
	</div>
    </div>

        );
    }
}

export default FormContent;