import React, { useEffect } from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import bg from './img/home-background.png'
 
import MainViewer from './MainViewer'
 

import NewDisney from './NewDisney'
import Originals from './Originals'
import Recommends from './Recommends'
import Trending from './Trending'
 
 
import db from '../firebase'
import { collection, doc, onSnapshot } from "firebase/firestore";
 
import { useDispatch } from 'react-redux'
 
 
import { setRecommendMovie } from '../features/Movie/recommendSlice'
import { setnewDisneyMovie } from '../features/Movie/newDisneySlice'
import { setoriginalMovie } from '../features/Movie/originalSlice'
import { settrendingMovie } from '../features/Movie/trendingSlice'
import Footer from './Footer'
 
 

const Home = () => {
 
  const dispatch = useDispatch();



  useEffect( () => {

    const recommend = onSnapshot(collection(db, "recommend") , (snapshot)=> {
  
      let tempMovies  = snapshot.docs.map( (doc) => {
        return { id: doc.id , ...doc.data()};
      });
      dispatch(setRecommendMovie(tempMovies));
    })


    
    const newDisney = onSnapshot(collection(db, "newDisney") , (snapshot)=> {
  
      let tempMovies2  = snapshot.docs.map( (doc) => {
        return { id: doc.id , ...doc.data()};
      });
      dispatch(setnewDisneyMovie(tempMovies2));
    })


    
    const original = onSnapshot(collection(db, "original") , (snapshot)=> {
  
      let tempMovies3  = snapshot.docs.map( (doc) => {
        return { id: doc.id , ...doc.data()};
      });
      dispatch(setoriginalMovie(tempMovies3));
     
    })


    
    const trending = onSnapshot(collection(db, "trending") , (snapshot)=> {
  
      let tempMovies4  = snapshot.docs.map( (doc) => {
        return { id: doc.id , ...doc.data()};
      });
      dispatch(settrendingMovie(tempMovies4));

 
    })


  
  }, [])
  
 

  return (
    <>
    <Container>
      <ImgSlider/>    
    
      <MainViewer/>
    
 
      <NewDisney/>
      <Originals/>
      <Recommends/>
      <Trending/>
   
      
    </Container>
    <Footer/>
    </>
  )
}

export default Home

const Container = styled.main`
min-height: calc(100vh - 70px);
padding: 0 calc(3.5vw + 5px);
position: relative; 


&::before {
    
    background: url(' ${bg}') center center / cover no-repeat fixed;
    content: "";
    position: absolute;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    
}

`

 