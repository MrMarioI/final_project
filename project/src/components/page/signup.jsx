import React from 'react'
import Buttons from './../Buttons'
import './../../styles/contact.css'
import './../../styles/buttons.css'

const action2 = () => console.log('action 2')

export default function signup () {
  return (
    <div className="signup">
      <h1 className='form-title'>Inscription !</h1>
      <p className='form-subtitle'>Utilisez ce formulaire pour vous inscrire et accéder à un espace personnel ! </p>
      {/*  {{#if msg}}
<p class="message {{msg.status}}">{{msg.text}}</p>
   {{/if}} */}
      <form method='post' action='/add_user' id='form_user'>
        <div className='form-item-wrapper flexed-item'>
          <label htmlFor='firstname' className='label-ref label'>
            Prénom :
          </label>
          <input
            id='firstname'
            type='text'
            className='input-text input'
            placeholder='Albert'
            value='yo'
            required
          />
        </div>
        <div className='form-item-wrapper flexed-item'>
          <label htmlFor='lastname' className='label-ref label'>
            Nom :
          </label>
          <input
            id='lastname'
            type='text'
            className='input-text input'
            placeholder='Biceps'
            value='gui'
            required
          />
        </div>
        <div className='form-item-wrapper flexed-item'>
          <label htmlFor='email' className='label-ref label'>
            Email :
          </label>
          <input
            id='email'
            type='email'
            className='input-text input'
            placeholder='albert.biceps@gmail.com'
            required
            value='yo@gui.com'
          />
        </div>
        <div className='form-item-wrapper flexed-item'>
          <label htmlFor='password' className='label-ref label'>
            Mot de passe :
          </label>
          <input
            id='password'
            type='password'
            className='input-text input'
            placeholder='••••••'
            required
            value='1234'
          />
        </div>
        <div>
          <Buttons
            className='button button-primary white'
            text='Inscription'
            callback={action2}
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
