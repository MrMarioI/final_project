import React, { useState, useEffect, useCallback } from "react";
import { useLocation} from 'react-router-dom'
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import { ApiHandler } from './../../api/handler'
import './../../styles/user.css'

const handler = ApiHandler();


export default function UserGallery() {
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
			let userId = null
				// On filtre le type des photos afin que ça corresponde à l'ID du type des photos de la bdd.
				if(Location == "/dashboard/user_gallery") userId = userId

			const filteredPhotos = apiRes.data.filter(photo =>  photo.userId == userId) // user gallery
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