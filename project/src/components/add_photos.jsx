// API UPDATE : https://api.cloudinary.com/v1_1/mariosbackupstuff/image/upload/v1602751774/MrMarioI/
import React, { Component } from 'react';
import Buttons from './buttons';
import AuthContext from './auth/AuthContext';
import { ApiHandler } from './../api/handler';

const handler = new ApiHandler();

class add_photos extends Component {
	state = {
		photoId: '',
		typePhotosId: '',
		userId: ''
	};

	static contextType = AuthContext;

	handleInput = (e) => this.setState({ [e.target.name]: e.target.value });

	fileInput = React.createRef();

	handleSubmit = async (evt) => {
		evt.preventDefault();
		// const { photoId, date, typePhotosId, taille, userId } = this.state;
		const photo = this.fileInput.current.files[0]; // valeur de l'input file référencé
		const fd = new FormData(); // formData est obligatoire pour envoyer des fichiers vers le backend
		// Doc : https://developer.mozilla.org/fr/docs/Web/API/FormData
		console.log('FD ICI', fd);

		// fd.append('photoId', this.state.photoId);
		fd.append('typePhotosId', this.state.typePhotosId);
		fd.append('userId', this.state.userId);

		if (photo) fd.append('photos', photo);
		//  ----------------------------------------------
		console.log(' FD CONSOLE LOG', fd);
		// avant de passer l'objet formData (fd) à components/auth/AuthProvider

		const newPhoto = await handler.post(process.env.REACT_APP_BACKEND_URL + '/photos/add_photos', fd);
		console.log('>>>>>>> ICI', fd);
	};

	render() {
		return (
			<div>
				<h1 className="form-title">Ajoutez du contenu !</h1>
				<ul className="dashadm">
					<a className="adadmin" href="/dashboard/dashboard_admin">
						Retour au tableau de bord
					</a>
					<a className="adadmin" href="/manage_posts">
						Manager le contenu
					</a>
					<a className="adadmin" href="/manage_users">
						Manager les utilisateurs
					</a>
				</ul>
				<hr />
				<form className="add-product-form add_photos" onChange={this.handleInput} onSubmit={this.handleSubmit}>
					<h3 className="form-title">Ajouter une photo</h3>
					<div className="form-item-wrapper flexed-item">
						<label htmlFor="sneaker-img" className="label-price label">
							Image :
						</label>
						<input
							id="photos"
							name="photos"
							type="file"
							className="sneaker-price input"
							ref={this.fileInput}
						/>
					</div>
					<div className="form-item-wrapper flexed-item">
						<label htmlFor="category" className="label-main-cat label">
							Galeries :
						</label>
						<select id="category" name="typePhotosId" className="select" required>
							<option defaultValue="-1" disabled selected>
								Choisir une gallerie
							</option>
							<option value="1">Concerts</option>
							<option value="2">Mariages</option>
							<option value="4">Paysages</option>
							<option value="3">Portraits</option>
							{/* <option value="">Portraits</option> */}
						</select>
					</div>
					<Buttons type="submit" className="button button-primary white" text="Publier" />
				</form>
			</div>
		);
	}
}

export default add_photos;
