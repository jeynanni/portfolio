import React, { Component } from 'react';
import './Home.css';
import { Button } from 'reactstrap'
//import Menu from '../menu/Menu'
import Logo from './Logo.png'

class Home extends Component {

    render() {
        return (
            <div>
               <img src={Logo} className='Logo' alt='Logo'></img> 
                <h1 className='title'>Into my World!</h1>
                <footer><i>create by Jessica Nanni</i></footer>
            </div>
        )
    }
}

export default Home;