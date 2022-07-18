import React from 'react'
import styled from 'styled-components';

 

const Viewers = ({img , video}) => {
  return (
        <Card>
        <img src={img}/>
        <video src={video} autoPlay={true} muted={true} loop={true} playsInline={true}>
        <source type="video/mp4"/>
          </video>
 
        </Card>
 
  )
}

export default Viewers

 
const Card = styled.div`
 

border: 3px solid #a5a5a52a ;
border-radius: 10px;
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px ,rgb(0 0 0 / 73%) 0px 16px 10px -10px;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
cursor: pointer;

img {
  width: 100%;
  height: 100%;
  object-fit:cover;
}

 

video {
   
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0%;
    opacity: 1;
    transform: scale(0);
    z-index: 0;
  }

&:hover{
   
  transform: scale(1.05); 
  border-color: rgba(249 , 249 , 249  , 0.8 ); 
  box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px 
    ,rgb(0 0 0 / 72%) 0px 30px 22px -10px;

    video {
      opacity: 1;      
      transform: scale(1);
    }

}



`