import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Login from "./authentication/login";
 
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
 
class CustomModal extends React.Component {
  constructor(props) {
    super(props);
    console.log("inside Login modal constructor",props.modalIsOpen);
 
    this.state = {
      modalIsOpen: props.modalIsOpen
    };
 
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
 
  openModal() {
        this.setState({modalIsOpen: true});
          
    // this.setState({modalIsOpen: true});
  }
  
  toggleModal(){
    this.setState({modelIsOpen: !this.state.modelIsOpen});
    // return this.state.modelIsOpen;
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }
 
  closeModal() {
    console.log("!this.state.modelIsOpe ", !(this.state.modalIsOpen));
    this.setState({modalIsOpen: false});
  }
 
 componentWillMount(){
    // this.setState({modalIsOpen: false});
    Modal.setAppElement("body");
     
 }

 componentWillReceiveProps(){
   console.log("inside componentWillReceiveProps ==", this.props.modalIsOpen);
   if(this.props.modalIsOpen){
     this.openModal();
   }
 }

  render() {
      console.log("Login modal render function", this.state.modalIsOpen);
      console.log("Props modelIsOpen == ", this.props.modelIsOpen);
      if(this.props.modelIsOpen){
        openModal();
      }
    return (
         <Modal 
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

        <div className="modal-header">
            <button type="button" className="close"  onClick={this.closeModal}>×</button>
            <h4 className="modal-title">Login with</h4>
        </div>
        
        <Login />
         
        </Modal>
    );
  }
}
//  export {this.openModal};
 export default CustomModal;
// ReactDOM.render(<App />, appElement);
// overlayClassName={{afterOpen:"modal-overlay"}}

// <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
          // <button onClick={this.closeModal}>close</button>
          // <div>I am a modal</div>
          // <form>
          //   <input />
          //   <button>tab navigation</button>
          //   <button>stays</button>
          //   <button>inside</button>
          //   <button>the modal</button>
          // </form>