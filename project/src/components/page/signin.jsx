import React from 'react'
import Buttons from './../Buttons'

const action3 = () => console.log('action 3')

export default function signin () {
  return (
    <div className='signin'>
      <h1 className='form-title'>Connexion !</h1>
      <p className='form-subtitle'>Utilisez ce formulaire pour vous connecter et accéder à un espace personnel ! </p>
      {/* {{#if msg}} */}
      {/* <p class="message {{msg.status}}">{{msg.text}}</p> */}
      {/* {{/if}} */}
      <form method='post' action='/signin' id='form_user'>
        {/* <div class="form-item-wrapper flexed-item"> */}
        <label htmlFor='email' className='label-ref label'>
          Email
        </label>
        <input
          id='email'
          type='email'
          className='input-text input'
          placeholder='albert.biceps@gmail.com'
          value='yo@gui.com'
          required
        />
        {/* </div> */}
        {/* <div class="form-item-wrapper flexed-item"> */}
        <label htmlFor='password' className='label-ref label'>
          Password
        </label>
        <input
          id='password'
          type='password'
          className='input-text input'
          placeholder='••••••'
          required
          value='1234'
        />
        {/* </div> */}
        <Buttons
          className='button button-primary white'
          text='Connexion à votre espace'
          callback={action3}
        />
      </form>
      <p className='form-sub-infos'>
        Vous n'avez pas encore de profil ?{' '}
        <a href='/signup' className='button-link-form'>
          Inscrivez-vous ici !
        </a>
      </p>
    </div>
  )
}
