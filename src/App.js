import React, {Component} from 'react';
import './App.css';
import { Route ,Link} from 'react-router-dom';

const HomePage = (props) => {
 
  return (

    <div> 
    <Link to = '/topics'>Topic</Link>
    <h1>Home Page</h1>
    </div>
  );

}

const TopicsList = (props) => {
  return (
    <div>
    <button onClick = {() => props.history.push('/')}>homepage</button>
    <h1>Topic List</h1>
    </div>

  );

}
const TopicDetail = () => {
  return (
    <div>
    <h1>Topic Detail Page</h1>
    </div>
  );

}
class App extends Component {
  render(){
    return(
      <div>
      <Route exact path ='/' component = {HomePage } />
      <Route exact path = '/topics' component ={TopicsList} />
      <Route path = '/topics/:topicID' component = {TopicDetail} />  
      </div>
    );
  }
}



export default App;
