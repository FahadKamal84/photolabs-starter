import { useReducer, useEffect } from "react";
// const [favPhotos, setFavPhotos] = useState([])
// const [selectPhoto, setSelectPhoto] = useState(null)
// const [selectTopic, setSelectTopic] = useState(null)
// const [photoData, setPhotoData] = useState(photos)
// const [topicData, setTopicData] = useState(topics)
// const [modal, setModal] = useState(false)

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
  // SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_TOPIC: 'SELECT_TOPIC',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
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
      return {...state, select_photo: action.payload}
    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return {...state, modal: action.payload}
      case ACTIONS.SET_PHOTO_DATA:
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
  }, []);

  const getFavPhotoId = (id) => {
    
    if (favPhotos.includes(id)) {
      dispatch ({type: 'FAV_PHOTO_REMOVED', payload: id })
      // setFavPhotos(favPhotos.filter(pId => pId !== id))
    } else { 
      dispatch({ type: 'FAV_PHOTO_ADDED', payload: id })
      //setFavPhotos([...favPhotos, id])
    }
  }
  console.log(favPhotos)

  const onLoadTopic = (topicObj) => {
    dispatch({type: 'SELECT_TOPIC', payload: {topicObj}})
    // setSelectTopic(topicObj)
  }
  console.log(selectTopic)

  const onCloseModal = () => {  
    dispatch({type: 'DISPLAY_PHOTO_DETAILS', payload: false}) 
    //setModal(false)
    dispatch({type: 'SELECT_PHOTO', payload: null})
    //setSelectPhoto(null)
    }

  const onPhotoSelect = (photo) => {
     dispatch({type: 'DISPLAY_PHOTO_DETAILS', payload: true})
     //setModal(true)
     dispatch({type: 'SELECT_PHOTO', payload: {photo}})
     //setSelectPhoto(photo)
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
    onCloseModal,
    onPhotoSelect
    }  
  )
}

export default useApplicationData