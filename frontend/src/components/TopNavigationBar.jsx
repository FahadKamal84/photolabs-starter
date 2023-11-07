import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = (props) => {

  let {favPhotos} = props
  
  const isFavPhotoExist = (favPhotos.length > 0 ? true : false)
  //console.log(isFavPhotoExist)
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList/>
      <FavBadge isFavPhotoExist={isFavPhotoExist}/>
    </div>
  )
}

export default TopNavigation;