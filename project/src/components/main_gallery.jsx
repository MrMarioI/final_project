import React, { useState, useEffect, useCallback } from "react";
import { useLocation} from 'react-router-dom'
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import { ApiHandler } from './../api/handler'

const handler = ApiHandler();


export default function MainGallery() {
 	// const { data } = axios.get(
 	// 	process.env.REACT_APP_BACKEND_URL + '/galeries/' + this.props.match.params.name
	 // );
	 const Location = useLocation().pathname
	console.log("LOG ICI  LOG", Location);
	const [ currentImage, setCurrentImage ] = useState(0);
	const [photos, setPhotos] = useState([]);
	const [ viewerIsOpen, setViewerIsOpen ] = useState(false);
	// const images = useState(display)


	useEffect(() => {
		const getPhotos = async () => {
			//process.env.REACT_APP_BACKEND_URL + "/galeries")
			const apiRes = await handler.get("/photos"); // pour user gallery
			let typePhotoId = null
			if(Location == "/galeries/concerts") typePhotoId = 1
			if(Location == "/galeries/mariages") typePhotoId = 2
			if(Location == "/galeries/portraits") typePhotoId = 3
			if(Location == "/galeries/paysages") typePhotoId = 4
				// On filtre le type des photos afin que ça corresponde à l'ID du type des photos de la bdd.
			const filteredPhotos = apiRes.data.filter(photo => photo.typePhotosId == typePhotoId)
			// const filteredPhotos = apiRes.data.filter(photo =>  photo.userId == userId) // user gallery
			console.log("FILTER", filteredPhotos);
			setPhotos(filteredPhotos);
		  };

		  try {getPhotos()} catch (err) {
			  console.error((err))
		  }
	  

	}, []);

	const openLightbox = useCallback((event, { photos, index }) => {
		setCurrentImage(index);
		setViewerIsOpen(true);
	}, []);

	const closeLightbox = () => {
		setCurrentImage(0);
		setViewerIsOpen(false);
	};

  	return (
		<>
			<Gallery photos={photos} onClick={openLightbox} />              
			<ModalGateway className="pictures">
				{viewerIsOpen ? (
					<Modal onClose={closeLightbox}>
						<Carousel
							currentIndex={currentImage}
							views={photos.map((x) => ({
								...x,
								srcset: x.srcSet,
								caption: x.title
							}))}
						/>
					</Modal>
				) : null}
			</ModalGateway>
		</>
	);
}
