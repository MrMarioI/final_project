import React, { Component, useState, useCallback } from 'react';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import photos from './page/photos';
import axios from 'axios';

	// const [currentImage, setCurrentImage] = useState(0);
	// const [viewerIsOpen, setViewerIsOpen] = useState(false);
  
	// const openLightbox = useCallback((event, { photo, index }) => {
	//   setCurrentImage(index);
	//   setViewerIsOpen(true);
	// }, []);
  
	// const closeLightbox = () => {
	//   setCurrentImage(0);
	//   setViewerIsOpen(false);
	// };
export default class gallery extends Component {


	async componentWillMount() {
		// console.log(this.props.match.params.name)
		const { data } = await axios.get(
			process.env.REACT_APP_BACKEND_URL + '/galeries/' + this.props.match.params.name
		);
		console.log(data);
		//  .then(res =>{
		this.setState({ galeries: this.state.photos });

		//  })
	}
	render() {
		// const { galerie } = this.state
		return (
			// <div>
			// 	{this.state.galeries && console.log(this.state.galeries)}
			// 	{this.state.galeries &&
			// 		this.state.galeries.map((galerie, i) => (
			// 			<div key={i}>
			// 				<Photos props={this.state.galerie} />
			// 				{galerie.image}
			// 			</div>
			// 		))}
			// </div>
			<div>
			{/* <Gallery photos={photos} onClick={openLightbox} />
			<ModalGateway>
			  {viewerIsOpen ? (
				<Modal onClose={closeLightbox}>
				  <Carousel
					currentIndex={currentImage}
					views={photos.map(x => ({
					  ...x,
					  srcset: x.srcSet,
					  caption: x.title
					}))}
				  />
				</Modal>
			  ) : null}
			</ModalGateway> */}
		  </div>
		);
	}
}
