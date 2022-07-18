import React from 'react'
 
import Slider from "react-slick";

import zooLogo  from './img/SliderImg/zootopia-logo.png'
import walleLogo  from './img/SliderImg/walle-logo.png'
import mulanLogo  from './img/SliderImg/mulan-logo.png'
import upLogo  from './img/SliderImg/up-logo.png'
import backUp  from './img/SliderImg/Background/up.jpg'
import backInside  from './img/SliderImg/Background/insideout.jpg'
import backMoana  from './img/SliderImg/Background/moana.jpg'
import backMuzan  from './img/SliderImg/Background/muzan.jpg'
import backTangled  from './img/SliderImg/Background/tagled.jpg'
import backWalle  from './img/SliderImg/Background/walle.jpg'
import backZoo2  from './img/SliderImg/Background/zootopia2.jpg'
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

 

const ImgSlider = () => {
   let state = {
        activeSlide: 0,
        activeSlide2: 0
      };

   let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1 , 
        autoplay : true,
        focusOnSelect: true
      
 
      };


  return (
        
            <Container {...settings} >
        

            <Wrap>
            <ImgTitle>
            <Fade right appear when={true}>
            <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5C647DF3FFBFA343CFEA84AC715148F25F9E86F398B408010CC403E7654FB908/scale?width=1440&aspectRatio=1.78" alt = 'slider image' className="absolute mt-12  -ml-5"  />
            </Fade>
            </ImgTitle>             
              <img src={backInside} alt = 'slider image' className="backgroundImg" />
              </Wrap>  


            <Wrap>
            <ImgTitle className= "">
             
            <img src={upLogo} alt = 'slider image' className="absolute mt-16 p-7 "  />
           
            </ImgTitle> 
            <img src={backUp} alt = 'slider image' className="backgroundImg"  /></Wrap>  

             
            <Wrap>   
            <ImgTitle>
           
            <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9562874BAB22B22A698368819B9EBF30FEB0291543552EB2416A5A61A73F63F4/scale?width=1440&aspectRatio=1.78" alt = 'slider image' className="absolute mt-12 -ml-5 p-5"  />
           
            </ImgTitle> 
            <img src={backMoana } alt = 'slider image' className="backgroundImg"  /></Wrap>
           

            
            <Wrap>   
            <ImgTitle>
          
            <img src={mulanLogo} alt = 'slider image' className="absolute mt-12 p-4 ml-0"  />
             
            </ImgTitle> 
            <img src={backMuzan } alt = 'slider image' className="backgroundImg"   /></Wrap>
            


           
            <Wrap>   
            <ImgTitle>
           
            <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F70235E3463A6F246EB462ED5379F9D41D6318E80098BD40900E7AFC1C7D932D/scale?width=1440&aspectRatio=1.78" alt = 'slider image' className="absolute mt-12 ml-2"  />
           
            </ImgTitle> 
            <img src={backTangled} alt = 'slider image' className="backgroundImg"  /></Wrap>

            <Wrap>
            <ImgTitle>
           
            <img src= {walleLogo} alt = 'slider image' className="absolute mt-12  -ml-0 p-6"  />
          
            </ImgTitle> 
               <img src={backWalle} alt = 'slider image' className="backgroundImg"  /></Wrap>


            <Wrap>      
            <ImgTitle>
            
            <img src={zooLogo} alt = 'slider image' className="absolute mt-12  -ml-2 p-6"  />
        
            </ImgTitle>    <img src={backZoo2} alt = 'slider image' className="backgroundImg"   /></Wrap>
             
          
        </Container>                  
    
  )
}

export default ImgSlider


const Container = styled(Slider)`
margin: 20px;

.slick-list {
    overflow: visible;
}

li .slick-active button::before{
    color: white;
}

ul li button {
    &::before{
        font-size: 10px;
        color: white;
    }
}

button {

    z-index: 1;
    opacity: 0.5;
    &:hover{
        opacity: 1;
        
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    }
}

`

const Wrap = styled.div`


box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px ,rgb(0 0 0 / 73%) 0px 16px 10px -10px;
 
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
border-radius: 4px;
border: 2px solid transparent; 
 
overflow-x: visible;
 
.backgroundImg {
 cursor: pointer;
 
width: 100%;
height: 100%;
 
max-height: 500px;
 z-index: -1;
object-fit: cover;

}


.logo{
 
    
    position:absolute;
    width:100%;
    height:100%; 
     transform: translateY(60%);
 
    
}

&:hover{   
border: 2px solid rgba(249 , 249 , 249   ); 
}

`

const ImgTitle = styled.div`
 

 
 
width:100%;
 

img {
max-width: 400px;
max-height: 300px;
  width: 35vw;
  height : 28vw;
}

`