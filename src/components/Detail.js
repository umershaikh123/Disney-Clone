

import styled from 'styled-components'
import button from './img/group-icon.png'
import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { collection, doc, onSnapshot , getDoc} from "firebase/firestore";
import db from '../firebase'
import 'firebase/firestore';
import Fade from 'react-reveal/Fade';

const Detail = () => {
const {id} = useParams();
const [movie , setMovie] = useState()

useEffect(() => {

  fetch_RData()
  fetch_NData()
  fetch_OData()
  fetch_TData()

  async function fetch_RData() {
    const docRef1 = doc(db, "recommend", `${id}`);
    const docSnap1 =  await getDoc(docRef1);
     if (docSnap1.exists() ) {      
      setMovie(docSnap1.data()) 
    } 
  }

  async function fetch_NData() {
    const docRef2 = doc(db, "newDisney", `${id}`);
    const docSnap2 =  await getDoc(docRef2);
     if (docSnap2.exists() ) {      
      setMovie(docSnap2.data()) 
    } 
  }


  async function fetch_OData() {
    const docRef3 = doc(db, "original", `${id}`);
    const docSnap3 =  await getDoc(docRef3);
     if (docSnap3.exists() ) {      
      setMovie(docSnap3.data()) 
    } 
  }


  async function fetch_TData() {
    const docRef4 = doc(db, "trending", `${id}`);
    const docSnap4 =  await getDoc(docRef4);
     if (docSnap4.exists() ) {      
      setMovie(docSnap4.data()) 
    } 
  }

  
  
  } , [])

   console.log("Movie = " + movie);
  return (
    
    <>
         
       { movie && (
        <>
         
        <ImgContainer src={movie.backgroundImg}/>       
       

 
        <ImgTitle>
        <Fade top >
        <img src={movie.titleImg} className="  "  />
        </Fade>
        </ImgTitle>
 


 
      <Fade left> 
      <div className= "flex mt-6  w-7/12 ml-12  space-x-4 items-center  ">

      <div className=" ">
      <PlayButton className='text-black   hover:bg-black hover:text-white  '>
      <span className="material-symbols-outlined  text-4xl ">play_arrow</span>
      <span className=' '>PLAY</span>
      </PlayButton>
      </div>

      <div className="   ">
      <TrailerButton  className='text-white  hover:bg-white hover:text-black  '>
      <span className="material-symbols-outlined   text-4xl ">play_arrow</span>
      <span className='  '>Trailer</span>
      </TrailerButton>
      </div>

      <div className="  ">
      <RoundButton  className=' hover:scale-125  '> 
      <span className="material-symbols-outlined text-white ">add</span>
      </RoundButton>
      </div>

      <div className="  ">
      <RoundButton  className='hover:scale-125   '> 
      <img src={button} />
      </RoundButton>
      </div>
 
      </div>
      </Fade>

        <Fade bottom>
 
      <div className=" flex  mx-auto text-white mt-8 ml-12 text-xs items-center">
        {movie.subTitle}
      </div>

  <div className='w-11/12'>
    <p className="text-white mt-2 ml-12 text-left">
    {movie.description}
    </p>
    </div>
    </Fade>
        </>
       )}


    </>
    
    
  )
}

export default Detail
const ImgContainer = styled.img`


    height: 100vh;
    width: 100%;
    object-fit: cover;
    position: absolute;
    z-index: -1;
 
`


const PlayButton= styled.button`
 
 
padding: 4px 20px 4px 20px;
background-color: white;
display: flex;
font-size: 15px;
border-radius: 4px;
align-items: center;
width: 100%;
max-width: 125px;

&:hover {
 
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  background-color: #1f1d1d;
}

`
const TrailerButton= styled(PlayButton)`
background-color: rgba(0,0,0,0.8)  ;
border:1px solid white;
max-width: 140px;
padding: 4px 20px 4px 20px;
background-color: #1f1d1d;

 
&:hover {
 
 transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
 background-color: #fcfcfcd5;
}
`

const RoundButton =styled(TrailerButton)`


font-size: 10px;
height: 30px;
width: 30px;
padding:1px;
border-radius: 20ex;
border:2px solid white;

&:hover {
 
 transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
 background-color: black;
}
`


 


 
const ImgTitle = styled.div`
 

 
margin-left: 3rem ;
margin-top: 6rem ;
width:100%;
 

img {
max-width: 400px;
max-height: 150px;
  width: 35vw;
  height : 15vw;
}

`




 







