import React, { Component } from 'react';
import axios from 'axios';
import Buttons from './buttons';
import { ApiHandler } from './../api/handler';
import './../styles/contact.css'
// import { useHistory } from 'react-router-dom'
const handler = ApiHandler();

export default class FormContact extends Component {
	state = {
		// définition de valeurs de base pour les tests de dev ("mettre à chaîne vide une fois dev ok")
		name: 'test user',
		email: 'foo@bar.com',
		ville: 'whatever',
		message: 'foo bar, bar bar ! bar ? foo bar baz, baz foo bar !'
	};

	handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

	handleSubmit = async (e) => {
		e.preventDefault(); // empêche l'event du formulaire de rafraîchir la page
		const { name, email, ville, message } = this.state; // destructuration de l'objet this.state
		try {
			await handler.post('/contact', {
				name,
				email,
				ville,
				message
			});
			alert("c'est bon GOOD");
		} catch (error) {
			console.error(error);
		}
	};

	// contactButton = (e) => {
	//   let history = useHistory();
	// }

	// handleClick = (e) => {
	//   history.push("/contact");
	// }

	render() {
		return (
			<div>
			<form
				method="post"
				action="/"
				className="formcontact"
				id="form_user"
				onChange={this.handleChange}
				onSubmit={this.handleSubmit}
			>
				<label htmlFor="lastname" className="label-ref" aria-label="Nom">
					Nom :
				</label>
				<input
					id="name"
					type="text"
					className="input-text input"
					placeholder="Name"
					defaultValue={this.state.name}
					name="name"
					required
					noValidate
				/>

				<label htmlFor="email" className="label-ref" aria-label="Email">
					Email :
				</label>
				<input
					id="email"
					type="email"
					className="input-text input"
					placeholder="Email"
					defaultValue={this.state.email}
					name="email"
					required
				/>

				<label id="ville" htmlFor="firstname" className="label-ref" aria-label="Ville">
					Ville :
				</label>
				<input
					id="ville"
					type="text"
					className="input-text input"
					defaultValue={this.state.city}
					name="ville"
				/>

				<label htmlFor="post-descr" className="label-descr label" aria-label="Message">
					Votre message :
				</label>
				<input type="text" className="text" defaultValue={this.state.message} name="message" />

				<Buttons type="submit" aria-label="Envoyer" className="button button-primary" text="Envoyer" />
			</form>
			</div>
		);
	}
}
