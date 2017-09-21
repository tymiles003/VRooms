import React, { Component } from "react";


class FormContent extends Component{

    constructor(props){
        super(props);
        this.state={

        };
    }

    render(){

        return (

    <div className="listItem" style={{height: "269px", background:""}}>
		<div className="item">
			<span>{this.props.id}</span>
		</div>
        <div className="question"><span>{this.props.quest}<span className="asterisk"> *</span></span></div>
        <div className="clear"></div>
		<div className="content">
			<div className="" style={{fontStyle: "italic", marginBottom: "20px", padding:"0 35px"}}>
					Let's not be strangers for much longer.
			</div>
		<div className="content-wrapper">
		    <div className="attachment-wrapper">
			    <div className="attachment">
				    <img src="https://images.typeform.com/images/8g37kjdgiQ/image/default#.gif" 
                        style={{width: "105px",height:"105px", display:"block", opacity:"1" }}
                        className="freezeframe_done" 
                     />
			        <div className="control">

                    {(this.props.id < 4) ? 
				        (<div className="">
					        <input className="inputField" type="text" autoComplete="off" name="userInput" onChange={this.props.handleUserInput}/>
				        </div>)
                        :
                        (<div className="textarea-wrapper">
					        <textarea className="textArea" maxlength="800" autoComplete="off" style={{overflow: "hidden", wordWrap: "break-word", resize: "none", height: "80px"}}></textarea>
											<span className="txtarea-tip"><strong>SHIFT</strong> + <strong>ENTER</strong> to make a line break</span>
									</div>)
                    }
			        </div>
			        <div className="clear"></div>
		        </div>
		<div className="clear"></div>
		
		<div className={(this.props.id < 4) ?"confirm container step0"  :"sendBtn"} >
			<div className="button-wrapper confirm">
				<div className="button nav enabled contact-us-button" onClick={this.props.onEnter}>
                    {(this.props.id < 4) ? 
                        <span>OK</span>
                      : <span >SEND</span>}
                </div>
			</div>
		</div>
	</div>
</div>
</div>
</div>

        );
    }
}

export default FormContent;