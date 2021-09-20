import React, {Component} from 'react';
class App extends Component {
  
  state = { 
    counter: 0
  }

  increment =() => {
    this.setState({counter: this.state.counter+1});
  }

  render(){

    return (
      <div className="App">
      <button onClick={() => this.increment()}>Increment</button>
      <div>Div 1 {this.state.counter}</div>
      </div>
    );
  } 
}



export default App;
