import React, { Component } from 'react';
import axios from 'axios'
import Buttons from './Buttons'


export default class FormContact extends Component {
    state = {
      name: '',
      email: '',
      ville: '',
      message: ''
    };

    handleChange = (evt) => {
        console.log(evt);
      this.setState({ [evt.target.name]: evt.target.value });
    };

    handleSubmit(e){
        e.preventDefault();
        console.log(this.state.name)
        // const name = document.getElementById('name').value;
        // const email = document.getElementById('email').value;
        // const ville = document.getElementById('ville').value;
        // const message = document.getElementById('message').value;
       const url="http://localhost:3001/contact";
       const data = {
        name: this.state.name,   
        email: this.state.email,
        ville: this.state.ville,  
        message: this.state.message
    }
        axios.post(url,data)
        .then((response)=>{
         console.log(response)
            if (response.data.msg === 'success'){
                alert("Message Sent."); 
                this.resetForm()
            }else if(response.data.msg === 'fail'){
                alert("Message failed to send.")
            }
        })
    }

    resetForm(){
        document.getElementById('form_user').reset();
    }
  render () {
    return (
      <form
        method='post'
        action='/'
        className='form'
        id='form_user'
        onChange={this.handleChange}
        onSubmit={this.handleSubmit.bind(this)} noValidate
      >
        
          <label htmlFor='lastname' className='label-ref' aria-label='Nom'>
            Nom :
          </label>
          <input
            id='name'
            type='text'
            className='input-text input'
            placeholder='Name'
            value={this.state.name}
            name='name'
            required
            noValidate
          />
        
          <label htmlFor='email' className='label-ref' aria-label='Email'>
            Email :
          </label>
          <input
            id='email'
            type='email'
            className='input-text input'
            placeholder='Email'
           value={this.state.email}
            name='email'
            required
          />
        
        
          <label id="ville" htmlFor='firstname' className='label-ref' aria-label='Ville'>
            Ville :
          </label>
          <input
            id='ville'
            type='text'
            className='input-text input'
            value={this.state.ville}
            name='ville'
          />
    
          <label
          
            htmlFor='post-descr'
            className='label-descr label'
            aria-label='Message'
          >
            Votre message :
          </label>
          <input
            type='text'
            className='text'
            value={this.state.message}
            name='message'
          /> 
         
          <Buttons
            type='submit'
            aria-label='Envoyer'
            className='button button-primary white'
            text='Envoyer'
          />
      
      </form>
    )
  }
}
