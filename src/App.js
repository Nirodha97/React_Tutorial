import React, {Component} from 'react';
class App extends Component {
  
 
  render(){

    const var1 = {
      key1:" Nirodha",
      Key2:"Madhubhashana "
    }
    return (
      <div className="App">
     {React.createElement(
       'div',
       {className :"app"},
      var1.key1
     )}

     <div>
       {var1.Key2}
     </div>
      </div>
    );
  } 
}



export default App;
