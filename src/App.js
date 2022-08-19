import React,{Component} from 'react';
import './App.css';

class App extends Component{
 render(){
 
  return (
    <div className="f1 tc">
      
        <h1>Hello World{this.props.greeting}</h1>
        <p>Welcome to React</p>
    </div>
  );
}
} 
export default App;
