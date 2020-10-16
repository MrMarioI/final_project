// import React, { Component } from 'react';
// import Gallery from 'react-photo-gallery';
// import Carousel, { Modal, ModalGateway } from 'react-images';
// import AuthContext from './auth/AuthContext';
// import { ApiHandler } from './../api/handler';
// import photos from './page/photos';
// import axios from 'axios';

// const handler = ApiHandler();


// export class gallery extends Component {
// 	state = {
// 		photos: []
// 	};

// 	// https://cloudinary.com/console/c-a9f2d3550c4c417d8bb06ec374d132/media_library/folders/b66950fef469f96eba60eb960ed001c9
// 	// https://res.cloudinary.com/mariosbackupstuff/image/upload/v1602687774/MrMarioI/

// 	static contextType = AuthContext;

// 	async componentWillMount() {
// 		// console.log(this.props.match.params.name)
// 		const { data } = await axios.get(
// 			process.env.REACT_APP_BACKEND_URL + '/galeries/' + this.props.match.params.name
// 		);
// 		console.log(data);
// 		//  .then(res =>{
// 		this.setState({ photos: this.state.photos });

// 		//  })
// 	}

// 	async componentDidMount() {
// 		const photos = await handler.get('/photos');
// 		this.setState({ Photos: photos.data });
// 	}

// 	render() {
// 		const { photo } = this.state;
// 		return (
// 			<div>
// 				{this.state.photos &&
// 					this.state.photos.map((photos, i) => (
// 						<div key={i}>
// 							<Gallery photos={photo} onClick={openLightbox} />
// 							<ModalGateway>
// 								{viewerIsOpen ? (
// 									<Modal onClose={closeLightbox}>
// 										<Carousel
// 											currentIndex={currentImage}
// 											views={photos.map((x) => ({
// 												...x,
// 												srcset: x.srcSet,
// 												caption: x.title
// 											}))}
// 										/>
// 									</Modal>
// 								) : null};
// 							</ModalGateway>
// 						</div>
// 					))}
// 			</div>
// 		);
// 	}
// }

// export default gallery;