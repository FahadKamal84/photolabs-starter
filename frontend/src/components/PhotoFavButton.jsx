import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  
  const { getFavPhotoId, favPhotos, id } = props;

  //const [selected, setSelected] = useState(false)
  const handleClick = () => {
    //setSelected(selected ? false : true)
    getFavPhotoId(id)
  }
 
  const selected = favPhotos.includes(id)
  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg" onClick = {handleClick}>
          <FavIcon selected ={selected}/> 
      </div>
    </div>
  );
}

export default PhotoFavButton;