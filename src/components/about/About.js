import React, { Component } from 'react';
import './About.css';
import { Button } from 'reactstrap'
//import Menu from '../menu/Menu'
import foto from './foto.jpg'
import logoMini from './logoMini.png'
import { Table } from 'reactstrap';

class About extends Component {

    render () {
        return (
         
            <div class='myBio'>
            <div>
              <img src={foto} className='foto' alt='foto'></img>
            </div>  
            <div>
                <p className='text'><i><b>N</b>ata nel 1985, anno in cui viene egistrata We Are the World, Ritorno al Futuro sbarca al cinema, le nostre console non saranno più le stesse perchè nasce Super Mario Bros e la Microsoft lancia la prima versione di Widows. Poi abbiamo la Juve che vince la prima coppa intercontinentale e il povero Siani che ci lascia. Nel frattempo una piccola bambina nata in mezzo alla campagna, gli animali e tante vecchie storie, cresce, va a scuola tra successi ed errori imperdonabili. Eccomi qui a 33 anni a provarne un'altra, ad andare avanti. Ma il la vita è fatta per chi sa attendere ed io aspetto. </i></p>
            </div>
            <img src={logoMini} className='logoMini' alt='logoMini'></img>
            <footer><i>create by Jessica Nanni</i></footer>
            </div>
            
        )
    }
}


export default About;