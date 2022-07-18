import React from 'react'
import Viewers from './smallComponents/Viewers'
import styled from 'styled-components';

import img1 from './img/viewers-disney.png'
import img2 from './img/viewers-marvel.png'
import img3 from './img/viewers-national.png'
import img4 from './img/viewers-pixar.png'
import img5 from './img/viewers-starwars.png'

import vidDisney from './videos/1564674844-disney.mp4'
import vidMarvel from './videos/1564676115-marvel.mp4'
import vidNG from './videos/1564676296-national-geographic.mp4'
import vidPixar from './videos/1564676714-pixar.mp4'
import vidStarWars from './videos/1608229455-star-wars.mp4'

const MainViewer = () => {
  return (
 
     <div className=' flex mt-12 justify-between items-center space-x-6 '>
   

    <Viewers img = {img1} video = {vidDisney}/>
    <Viewers img = {img2} video = {vidMarvel}/>
    <Viewers img = {img3} video = {vidNG}/>
    <Viewers img = {img4} video = {vidPixar}/>
    <Viewers img = {img5} video = {vidStarWars}/>
   </div>
 
  )
}

export default MainViewer
 

 