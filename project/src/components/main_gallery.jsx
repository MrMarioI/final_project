import React, { useState, useCallback } from "react";
import { render } from "react-dom";
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
// import Gallery from './gallery'



export default function MainGallery() {
    // constructor(props) {
    //     super(props);
    //         this.state = {
    //     		    photos: []
    //                     };
    //             };

const [ currentImage, setCurrentImage ] = useState(0);
const [ viewerIsOpen, setViewerIsOpen ] = useState(false);

const openLightbox = useCallback((event, { photo, index }) => {
	setCurrentImage(index);
	setViewerIsOpen(true);
}, []);

const closeLightbox = () => {
	setCurrentImage(0);
	setViewerIsOpen(false);
};

const { photos } = this.state;

  return (
    <>
    	<div>
				
			<div >
                    {this.state.photos &&
					this.state.photos.map((photo, i) => (
						 <><Gallery key={i} photos={photo} onClick={openLightbox} />
                       
							<ModalGateway>
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
								) : null};
							</ModalGateway>
                        </>
					))}
		    </div>	
        </div>
    </>
  );
}
