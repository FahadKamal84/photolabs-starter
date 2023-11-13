import { useReducer, useEffect } from "react";

const initialState ={
  favPhotos: [],
  selectPhoto: null,
  selectTopic: null,
  photoData: [],
  topicData: [],
  modal: false
}

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_TOPIC: 'SELECT_TOPIC',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  GET_PHOTOS_BY_TOPICS: 'GET_PHOTOS_BY_TOPICS'
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return {...state, favPhotos: [...state.favPhotos, action.payload]}
    case ACTIONS.FAV_PHOTO_REMOVED:
      return {...state, favPhotos: state.favPhotos.filter(pId => pId !== action.payload)}
    case ACTIONS.SELECT_TOPIC:
      return {...state, selectTopic: action.payload}
    case ACTIONS.SELECT_PHOTO:
      return {...state, selectPhoto: action.payload}
    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return {...state, modal: action.payload}
    case ACTIONS.SET_PHOTO_DATA:
        return { ...state, photoData: action.payload };
    case ACTIONS.SET_TOPIC_DATA:
        return { ...state, topicData: action.payload };
    case ACTIONS.GET_PHOTOS_BY_TOPICS:
        return { ...state, photoData: action.payload };
      
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
    }
  }
  


const useApplicationData = () => {

  const [state, dispatch] = useReducer(reducer, initialState)
  
  const {
    favPhotos,
    selectPhoto,
    selectTopic,
    photoData,
    topicData,
    modal
  } = state
  

  useEffect(() => {
    fetch("http://localhost:8001/api/photos")
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }))
      .catch(err => {
        console.error('Error fetching photos', err)
      })
  }, []);
  
  useEffect(() => {
    fetch("http://localhost:8001/api/topics")
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data }))
      .catch(err => {
        console.error('Error fetching topics', err)
      })
  }, []);
  
  useEffect(() => {
    if (selectTopic) {
      fetch(`http://localhost:8001/api/topics/photos/${selectTopic}`)
        .then(res => res.json())
        .then(data => dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPICS, payload: data }))
    } else {
      fetch('http://localhost:8001/api/photos')
      .then(res => res.json())
      .then(data => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }))
      .catch(err => {
        console.error('Error fetching photos', err)
      })
    }
  }, [selectTopic])

  const getFavPhotoId = (id) => {
    
    if (favPhotos.includes(id)) {
      dispatch ({type: 'FAV_PHOTO_REMOVED', payload: id })
    } else { 
      dispatch({ type: 'FAV_PHOTO_ADDED', payload: id })
    }
  }

  const onLoadTopic = (id) => {
    dispatch({type: 'SELECT_TOPIC', payload: id})
  }

  const clearLoadTopic = () => {
    dispatch({ type: ACTIONS.SELECT_TOPIC, payload: null })
  }

  const onCloseModal = () => {  
    dispatch({type: 'DISPLAY_PHOTO_DETAILS', payload: false}) 
    dispatch({type: 'SELECT_PHOTO', payload: null})
    }

  const onPhotoSelect = (photo) => {
     dispatch({type: 'DISPLAY_PHOTO_DETAILS', payload: true})
     dispatch({type: 'SELECT_PHOTO', payload: {photo}})
  }

  return(
    {
      state: {
              favPhotos,
              selectPhoto,
              selectTopic,
              photoData,
              topicData,
              modal
            },
    getFavPhotoId,
    onLoadTopic,
    clearLoadTopic,
    onCloseModal,
    onPhotoSelect
    }  
  )
}

export default useApplicationData