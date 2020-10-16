import React, { Component } from 'react';
import AuthContext from './../auth/AuthContext';
import Buttons from '../buttons';
import './../../styles/signup.css';
import './../../styles/buttons.css';
// import AuthProvider from '../auth/AuthProvider

export default class Signup extends Component {
	state = {
		// définition de valeurs de base pour les tests de dev ("mettre à chaîne vide une fois dev ok")
		first_name: '',
		last_name: '',
		email: '',
		password: '',
		selectedFile: null
	};

	createUser = async (e) => {
		alert('Inscription validée ! Bienvenue !');
		e.preventDefault(); // Empêche l'event submit du formulaire de rafraîchir la page
		// await axios.post("http://localhost:5555/signup", this.state)
		console.log('>GOOD');
	};

	static contextType = AuthContext; // la classe Signup est désormais 'abonnée' au AuthProvider

	handleInput = (e) => this.setState({ [e.target.name]: e.target.value });

	handleSubmit = async (e) => {
		e.preventDefault(); // empêche l'event submit du formulaire de rafraîchir la page
		const { first_name, last_name, email, password } = this.state;
		console.log('HEY HANDLESUBMIT'); // destructuration de l'objet this.state
		// console.log(first_name, last_name, email, password)
		this.context.signup(this.state, () => {
			this.props.history.push('/signin');
		});
	};

	render() {
		return (
			<div className="signup">
				<h1 className="form-title">Inscription !</h1>
				<p className="form-subtitle">
					Utilisez ce formulaire pour vous inscrire et accéder à un espace personnel !{' '}
				</p>

				<form className="newuser" onChange={this.handleInput} onSubmit={this.handleSubmit}>
					<div className="form-item-wrapper flexed-item">
						<label htmlFor="first_name" className="label-ref label">
							Prénom :
						</label>
						<input
							id="first_name"
							type="text"
							name="first_name"
							className="input-text input"
							defaultValue={this.state.first_name}
							placeholder="Entrez votre prénom"
							autoComplete="given-name"
						/>
					</div>
					<div className="form-item-wrapper flexed-item">
						<label htmlFor="lastname" className="label-ref label">
							Nom :
						</label>
						<input
							id="last_name"
							name="last_name"
							type="text"
							className="input-text input"
							defaultValue={this.state.last_name}
							placeholder="Entrez votre nom"
							autoComplete="family-name"
						/>
					</div>
					<div className="form-item-wrapper flexed-item">
						<label htmlFor="email" className="label-ref label">
							Email :
						</label>
						<input
							id="email"
							type="email"
							name="email"
							className="input-text input"
							defaultValue={this.state.email}
							placeholder="Entrez votre adresse mail"
							autoComplete="email"
						/>
					</div>
					<div className="form-item-wrapper flexed-item">
						<label htmlFor="password" className="label-ref label">
							Mot de passe :
						</label>
						<input
							id="password"
							type="password"
							name="password"
							className="input-text input"
							defaultValue={this.state.password}
							placeholder="Entrez un mot de passe"
							autoComplete="current-password"
						/>
					</div>
					<div>
						<Buttons className="button button-primary white ok" text="Inscription" />
					</div>
				</form>
				<p className="form-sub-infos">
					Vous avez déjà un compte ?{' '}
					<a href="/signin" className="button-link-form">
						Connectez-vous !
					</a>
				</p>
			</div>
		);
	}
}
