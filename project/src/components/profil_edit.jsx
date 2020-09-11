import React from 'react'
import './../styles/contact.css'
import './../styles/buttons.css'


export default function profilEdit() {
    return (
        <div>
            <form method="post" action="/" className="form" enctype="multipart/form-data">
    <h2 class="title">Mettre à jour votre profil</h2>
    <label htmlFor="input-username" className="is-clickable">Nom :</label>
    <input id="input-username" type="text" className="input" value="{{currentUser.username}}" name="username"/>
    <label htmlFor="input-email" className="is-clickable">Email :</label>
    <input id="input-email" type="email" className="input" value="{{currentUser.email}}" name="email"/>
    <button class="btn">ok</button>
            </form>
        </div>
    )
}
