import React, { useContext, useState, useEffect, useCallback } from 'react';
import AuthContext from './../../components/auth/AuthContext';
import { render } from "react-dom";
import { useLocation} from 'react-router-dom'
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import axios from 'axios';
import { ApiHandler } from './../../api/handler'
import './../../styles/dashboard.css'
// import Gallery from './gallery'

const handler = ApiHandler();


export default function Dashboard() {
	const AuthContextValue = useContext(AuthContext);
	console.log('AuthContextValue ? >>> ', AuthContextValue.currentUser);

	const Location = useLocation().pathname
	console.log("LOG ICI  LOG", Location);
	const [ currentImage, setCurrentImage ] = useState(0);
	const [photos, setPhotos, userId] = useState([]);
	const [ viewerIsOpen, setViewerIsOpen ] = useState(false);
	// const images = useState(display)


	useEffect(() => {
		const getPhotos = async () => {
			//process.env.REACT_APP_BACKEND_URL + "/galeries")
			const apiRes = await handler.get("/photos"); // pour user gallery
				// On filtre le type des photos afin que ça corresponde à l'ID du type des photos de la bdd.
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
		Boolean(AuthContextValue.currentUser) && (
			<div>
				<p>Welcome {AuthContextValue.currentUser.first_name} !</p>
				{Boolean(AuthContextValue.currentUser.role === '1') && (
					<div>
						<a href="/dashboard/dashboard_admin">Profil administrateur</a>
					</div>
				)}
				<hr />
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
			</div>
		)
	);
}
