import React, { Component } from 'react';
import AuthContext from './../../components/auth/AuthContext';
import Buttons from '../buttons';
import './../../styles/signin.css';


export default class FormSignin extends Component {
	state = {
		// définition de valeurs de base pour la phase de dev ("mettre à chaîne vide si dev ok")
		email: '',
		password: ''
	};

	static contextType = AuthContext; // on associe le contexte d'authentification à la classe Signin (accessible via this.context)

	handleInput = (e) => this.setState({ [e.target.name]: e.target.value });

	handleSubmit = async (e) => {
		e.preventDefault(); //  no refresh
		const { userId, email, password } = this.state;
		// await axios.post('http://localhost:5555/signin', { userId, email, password });

		this.context.signin(this.state, () => {
			console.log(this.state, 'this.props.history.push');
			this.props.history.push('/dashboard');
		});
		console.log(this.props.history, 'this.props.history.push');
	};

	render() {
		return (
			<div className="signin">
				<h1 className="form-title">Connexion !</h1>
				<p className="form-subtitle">Utilisez ce formulaire pour vous connecter et accéder à votre profil ! </p>

				<form id="form_user" onChange={this.handleInput} onSubmit={this.handleSubmit}>
					<label htmlFor="email" className="label-ref label">
						Email
					</label>
					<input
						id="email"
						type="email"
						name="email"
						className="input-text input"
						defaultValue={this.state.email}
						placeholder="Entrez votre email"
						autoComplete="email"
					/>
					<label htmlFor="password" className="label-ref label">
						Password
					</label>
					<input
						id="password"
						type="password"
						className="input-text input"
						name="password"
						defaultValue={this.state.password}
						placeholder="Entrez votre mot de passe"
						autoComplete="password"
					/>
					{/* </div> */}
					<Buttons className="button button-primary white" text="Connexion à votre espace" />
				</form>
				<p className="form-sub-infos">
					Vous n'avez pas encore de profil ?{' '}
					<a href="/signup" className="button-link-form">
						Inscrivez-vous ici !
					</a>
				</p>
			</div>
		);
	}
}
