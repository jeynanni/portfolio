import React, { Component } from 'react';
import './css/App.css';
import About from './components/about/About';
import Contacts from './components/contacts/Contacts';
import Home from './components/home/Home';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import logoMini from './components/about/logoMini.png';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

      <div className="App">
      <Router>
      <div><nav className='navbar'>
       
          
            <Link to="/">Home  <br/> </Link>
         
            <Link to="/about">About  <br/></Link>
         
            <Link to="/contacts">Contacts  <br/></Link>
            <img src={logoMini} className='logoMini' alt='logoMini'></img>
            
          <br/>
        </nav>
        <Route path='/' exact component={Home}/>
        <Route path='/contacts/' component={Contacts}/>
        <Route path='/about/' component={About}/>
      </div>
      </Router>

      
       
        
      </div>
       
    );
  }
}

export default App;
