import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoListItem from 'components/PhotoListItem';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = (props) => {

  const {selectPhoto, onCloseModal, getFavPhotoId} = props
  
  const handleClick = () => onCloseModal()

  console.log("props photo id:", selectPhoto)

  const similarPhotos = Object.values(selectPhoto.photo.similar_photos)
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick = {handleClick}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      
      <PhotoFavButton getFavPhotoId = {getFavPhotoId} id = {selectPhoto.photo.id}/>
        <img className='photo-details-modal__image' src = {selectPhoto.photo.urls.full}/>
      <header className='photo-details-modal__header'>
        <div className='photo-details-modal__photographer-details'>
          <img className='photo-details-modal__photographer-profile' src = {selectPhoto.photo.user.profile}/>
          <span className='photo-details-modal__photographer-info'>{selectPhoto.photo.user.username}
            <p className='photo-details-modal__photographer-location'>
              {selectPhoto.photo.location.city}, {selectPhoto.photo.location.country}
            </p>
          </span>
        </div>
      </header>
      
        <div className='photo-details-modal__top-bar'>
          
            <PhotoList pictures = {similarPhotos}/>
    
        </div>
      
      
    
    </div>
  )
};


{/* <div className="photo-details-modal">
      
        <div className='photo-details-modalheader'>
          <img className='photo-details-modalimage' src={photo.urls.regular} />
          <div className="photo-details-modalphotographer-details">
            <img className="photo-details-modalphotographer-profile" src={photo.user.profile} />
            <p className="photo-details-modalphotographer-info">{photo.user.name}
            <span className="photo-details-modalphotographer-location">{photo.location.city}, {photo.location.country}</span>
            </p>
          </div>
        </div>
        <p>Similar Photos</p>
        <div className='photo-details-modalimages'>
        <PhotoList photos={similarPhotosArr}/> 
        </div>

    </div> */}
export default PhotoDetailsModal;
