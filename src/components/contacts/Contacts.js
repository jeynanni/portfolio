import React, { Component } from 'react';
import './Contacts.css';
import { Button } from 'reactstrap';
import { Form, Text } from 'react-form';
//import Menu from '../menu/Menu';
import logoMini from '../about/logoMini.png';

class Contacts extends Component {
    constructor( props ) {
        super( props );
        this.state = {};
      }
    render () {
        return (
            <div>
<Form
            onSubmit={submittedValues => this.setState( { submittedValues } )}>
            { formApi => (
              <form onSubmit={formApi.submitForm} id="form3">
                <label htmlFor="firstName2">E-mail</label>
                <Text field="firstName" id="firstName2" />
                <label htmlFor="friend1">Name</label>
                <Text field={['friends', 0]} id="friend1" />
                <label htmlFor="friend2">Surname</label>
                <Text field={['friends', 1]} id="friend2" />
                <label htmlFor="friend3">text-area</label>
                <Text field={['friends', 2]} id="friend3" />
                <button type="submit" className="mb-4 btn btn-primary">Submit</button>
              </form>
            )}
          </Form>
                <img src={logoMini} className='logoMini' alt='logoMini'></img>
                <footer><i>create by Jessica Nanni</i></footer>
            </div>
        )
    }
}




export default Contacts;