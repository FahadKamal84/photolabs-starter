import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = (props) => {

  const {selectPhoto, onCloseModal, getFavPhotoId, favPhotos} = props
  
  const handleClick = () => onCloseModal()

  const similarPhotos = Object.values(selectPhoto.photo.similar_photos)
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick = {handleClick}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      
      <PhotoFavButton getFavPhotoId = {getFavPhotoId} favPhotos = {favPhotos} id = {selectPhoto.photo.id}/>
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
        <p>
          Similar Photos
        </p>
      </header>
        <div className='photo-details-modal__top-bar'>        
            <PhotoList pictures = {similarPhotos} getFavPhotoId = {getFavPhotoId} favPhotos = {favPhotos}/>
        </div>    
    </div>
  )
};

export default PhotoDetailsModal;
