import React from 'react';

const PhotoAssets = (props) => {
	return (
		<a-assets>
			{ props.photos.map( photo => {
				let{pano_url,name,id} = photo;
				
				let imgID = 'img-' + name.replace(/[^a-zA-Z0-9-]/g,'-');
				console.log('imgID',imgID);

				return(
					<img id={id} src={pano_url}/>
				)
			})}
		</a-assets>
	)
}
export default PhotoAssets;



// <a-assets>
// {this.handlePhotoAssets}

// {/* <img id="living-room" src="assets/img/aframe/living-room.jpg" />
// <img id="kitchen" src="assets/img/aframe/kitchen.jpg" />
// <img id="bathroom" src="assets/img/aframe/bathroom.jpg" />
// <img id="driveway" src="assets/img/aframe/driveway.jpg" /> */}
// <img id="balcony-1" src="assets/img/aframe/balcony-1.jpg" />
// <img id="balcony-2" src="assets/img/aframe/balcony-2.jpg" />
// <img id="balcony-3" src="assets/img/aframe/balcony-3.jpg" />
// <img id="balcony-4" src="assets/img/aframe/balcony-4.jpg" />
// <img id="balcony-5" src="assets/img/aframe/balcony-5.jpg" />

// </a-assets>