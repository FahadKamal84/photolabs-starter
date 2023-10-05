import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {

  const [selected, setSelected] = useState("")
  const handleClick = () => setSelected(selected === "" ? "yes": "")

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg" onClick = {handleClick}>
          <FavIcon selected ={selected}/> 
      </div>
    </div>
  );
}

export default PhotoFavButton;