import React, { Component } from 'react';
import { ApiHandler } from './../../api/handler';

const handler = new ApiHandler('/orders');

export default class Posts extends Component {
	state = {
		photos: [],
		galeries: []
	};

	async componentDidMount() {
		console.log("component mounted ! > ProductList a été 'accroché' au DOM de React");
		const apiRes = await handler.getAll();
		this.setState({ photos: apiRes.data });
	}

	//   async componentDidMount () {
	//     console.log(
	//       "component mounted ! > ProductList a été 'accroché' au DOM de React"
	//     )
	//     const apiRes = await handler.getAll()
	//     this.setState({ users: apiRes.data })
	//   }

	render() {
		const { photos } = this.state;
		// const { users } = this.state;
		return (
			<div>
				<div className="table">
					<table className="product-manage-table">
						<thead>
							<tr className="table-row">
								<th className="table-head">Titre de l'image</th>
								<th className="table-head">Référence de la photo</th>
								<th className="table-head">Galerie</th>
								<th className="table-head">Edit</th>
								<th className="table-head">Delete</th>
							</tr>
						</thead>

						<tbody>
							{photos.map((photo, i) => (
								<div key={i} className="table-row">
									<tr className="table-row">{photo.name}</tr>
									<tr className="table-row">{photo._id}</tr>
									<tr className="table-row">{photo.galerie}</tr>
								</div>
							))}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}
