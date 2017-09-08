import 'aframe';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Entity, Scene} from 'aframe-react';

// Showcasing gallery list of real estate
class Showcase extends React.Component {
  constructor(props) {
    super(props);
  //   this.state = {
  //     quotes: []
  //   };
  //   // Binding getQuotes to this component since we'll be passing this method to 
  //   // other components to use
  //   this.getQuotes = this.getQuotes.bind(this);
  // }
  // // Getting all quotes once the component has mounted
  // componentDidMount() {
  //   this.getQuotes();
  //   // getQuotes() {}

  //   API.getQuotes().then((res) => {
  //     const favoriteQuotes = res.data.filter(quote => quote.favorited);
  //     this.setState({ quotes: favoriteQuotes });
  //   });
  // }
  // // A helper method for rendering one panel for each quote
  // renderQuotes() {
  //   return this.state.quotes.map(quote => (
  //     <Panel
  //       quote={quote}
  //       key={quote._id}
  //       getQuotes={this.getQuotes}
  //     />
  //   ));
   }
  render() {
    return (
      <a-scene>
        <Entity primitive='a-sky' src="assets/img/gallery/test-world3.jpg"/>
        <a-text font="kelsonsans" value="Wayne's Home in Miami" width="6" position="-2.5 0.25 -1.5"
              rotation="0 15 0"></a-text>       
      </a-scene>
    );
  }
}

export default Showcase;




// <a-scene>

//         <a-sky src="assets/img/gallery/test-world3.jpg" rotation="0 -130 0"></a-sky>
//         <a-text font="kelsonsans" value="Wayne's Home in Miami" width="6" position="-2.5 0.25 -1.5"
//               rotation="0 15 0"></a-text>       
//       </a-scene>