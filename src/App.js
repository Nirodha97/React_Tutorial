import React, {Component} from 'react';
import './App.css'
class App extends Component {
  

  render(){
    const styles={
      border:'solid',
      textAlign:'center',
      boxShadow:'2px 2px'
    }
    return (
      <div className="App">
      <div style={styles}>Style
      </div>
      <button>Button 1 </button>
      react {this.name} 

      </div>
    );
  } 
}


const Appinstanse = new App();
console.log(Appinstanse.name)
export default App;
