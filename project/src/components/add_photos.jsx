import React from 'react';
import Buttons from './Buttons';
import { ApiHandler } from './../api/handler';

const apiHandler = new ApiHandler('/api/photos');

const action5 = () => console.log('action 5');
const handleSubmit = async (evt) => {
	evt.preventDefault(); // empêcher le navigateur d'effectuer l'action par défaut de soumission du form : c.a.d refresh la page
	const apiRes = await apiHandler.createOne(this.state);
	console.log(apiRes);
};
export default function Add_photos() {
	return (
		<div>
			<h1 className="form-title">Ajoutez du contenu !</h1>
			<ul className="dashadm">
				<a className="adadmin" href="/dashboard-admin">
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
			<form className="add-product-form" enctype="multiparty/form-data" onSubmit={handleSubmit}>
				
				<h3 className="form-title">Ajouter une photo</h3>
				<div className="form-item-wrapper flexed-item">
					<label htmlFor="sneaker-name" className="label-name label">
						Titre :
					</label>
					<input
						id="sneaker-name"
						type="text"
						className="input-text input"
						placeholder="Nike Air Max 90"
						value="air max 1"
					/>
				</div>
				<div className="form-item-wrapper flexed-item">
					<label htmlFor="sneaker-ref" className="label-ref label">
						Réf.
					</label>
					<input
						id="sneaker-ref"
						type="text"
						className="input-text input"
						placeholder="ex: NV23498"
						value="NV23498"
					/>
				</div>
				<div className="form-item-wrapper flexed-item">
					<label htmlFor="sneaker-descr" className="label-descr label">
						Description :
					</label>
					<input
						id="sneaker-descr"
						type="text"
						className="input-text input"
						placeholder="The better sneakers to run"
						value="foo bar baz"
					/>
				</div>
				<div className="form-item-wrapper flexed-item">
					<label htmlFor="sneaker-price" className="label-price label">
						Prix :
					</label>
					<input id="sneaker-price" type="number" className="sneaker-price input" min="1" value="123" />
				</div>
				<div className="form-item-wrapper flexed-item">
					<label htmlFor="sneaker-img" className="label-price label">
						Image :
					</label>
					<input id="photos" type="file" classN="sneaker-price input" />
				</div>
				<div className="form-item-wrapper flexed-item">
					<label htmlFor="category" className="label-main-cat label">
						Galeries :
					</label>
					<select id="category" className="select" required>
						<option value="-1" disabled selected>
							Choisir une gallerie
						</option>
						<option value="{1}">Concerts</option>
						<option value="{2}">Mariages</option>
						<option value="{4}">Paysages</option>
						<option value="{3}">Portraits</option>
					</select>
				</div>
				<Buttons type="submit" className="button button-primary white" text="Publier" callback={action5} />
			</form>
		</div>
	);
}
