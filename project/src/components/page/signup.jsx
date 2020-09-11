import React, { Component } from 'react'
import AuthContext from './../auth/AuthContext'
import Buttons from './../Buttons'
import './../../styles/contact.css'
import './../../styles/buttons.css'
// import AuthProvider from '../auth/AuthProvider
import axios from 'axios'


export default class Signup extends Component {
  state = {
    // définition de valeurs de base pour les tests de dev ("mettre à chaîne vide une fois dev ok")
    first_name: 'Jane',
    last_name: 'Doe',
    email: 'j.doe@foo.bar',
    password: '12345'
  }

  createUser = async e => {
    e.preventDefault() // classique : empêche l'event submit du formulaire de rafraîchir la page
    await axios.post("http://localhost:5555/signup", this.state)
  }

  static contextType = AuthContext // la classe Signup est désormais 'abonnée' au AuthProvider

  fileInput = React.createRef() // on créé une référence ici, utilisée sur le l'input file plus bas
  // https://fr.reactjs.org/docs/uncontrolled-components.html#the-file-input-tag

  handleInput = e => this.setState({ [e.target.name]: e.target.value })

  handleSubmit = async e => {
    e.preventDefault() // classique : empêche l'event submit du formulaire de rafraîchir la page

    const { first_name, last_name, email, password } = this.state // destructuration de l'objet this.state
    await axios.post("http://localhost:5555/signup")
    // avant de passer l'objet formData (fd) à components/auth/AuthProvider
    this.context.signup(this.state, () => {
      this.props.history.push('/signin')
    })
  }

  render () {
    return (
      <div className='signup'>
        <h1 className='form-title'>Inscription !</h1>
        <p className='form-subtitle'>
          Utilisez ce formulaire pour vous inscrire et accéder à un espace
          personnel !{' '}
        </p>
        {/*  {{#if msg}}
<p class="message {{msg.status}}">{{msg.text}}</p>
   {{/if}} */}
        <form onChange={this.handleInput} onSubmit={this.createUser}>
          <div className='form-item-wrapper flexed-item'>
            <label htmlFor='firstname' className='label-ref label'>
              Prénom :
            </label>
            <input
              id='firstname'
              type='text'
              name='first_name'
              className='input-text input'
              defaultValue={this.state.first_name}
              autoComplete='given-name'
            />
          </div>
          <div className='form-item-wrapper flexed-item'>
            <label htmlFor='lastname' className='label-ref label'>
              Nom :
            </label>
            <input
              id='lastname'
              name='last_name'
              type='text'
              className='input-text input'
              defaultValue={this.state.last_name}
              autoComplete='family-name'
            />
          </div>
          <div className='form-item-wrapper flexed-item'>
            <label htmlFor='email' className='label-ref label'>
              Email :
            </label>
            <input
              id='email'
              type='email'
              name='email'
              className='input-text input'
              defaultValue={this.state.email}
              autoComplete='email'
            />
          </div>
          <div className='form-item-wrapper flexed-item'>
            <label htmlFor='password' className='label-ref label'>
              Mot de passe :
            </label>
            <input
              id='password'
              type='password'
              name='password'
              className='input-text input'
              defaultValue={this.state.password}
              autoComplete='current-password'
            />
          </div>
          <div>
            <Buttons
              className='button button-primary white'
              text='Inscription'
            />
          </div>
        </form>
        <p className='form-sub-infos'>
          Vous avez déjà un compte ?{' '}
          <a href='/signin' className='button-link-form'>
            Connectez-vous !
          </a>
        </p>
      </div>
    )
  }
}
