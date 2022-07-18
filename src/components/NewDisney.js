 
import { useSelector } from 'react-redux/es/exports';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
 
import { selectnewDisneyMovie } from '../features/Movie/newDisneySlice';
import Slider from 'react-slick';
 

const NewDisney = () => {
  const movies = useSelector(selectnewDisneyMovie);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
  
    slidesToShow: 6,
    slidesToScroll: 2

  };


  return (
    <div >
        <h1 className='text-white mt-12 text-left ' id='RText'>New to Disney+ </h1>

        <Container {...settings}   >

        
  {movies && 
   movies.map((movies) => (
      <Wrap key={movies.id}>
        <Link to={`/detail/${movies.id}`}>
        
        <img src= {movies.cardImg} />
            
        </Link>
      </Wrap>

    )
    
    )}   

 
 </Container>   
 


      </div>
  )
}

export default NewDisney


 
const Container = styled(Slider)`
 

.slick-list {
  margin: 0 -0.5rem;
  padding-bottom: 1.5rem;
  overflow: visible;
}
.slick-slide > div {
  padding: 0 0.5rem;  
  padding-bottom: 1.5rem;

}


button {
  margin-top: -2rem;
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
border: transparent;
border-style: solid ;
border-width: 1px 1px 0px 1px;
  
 
  


img {
  
cursor: pointer;
height: 100%;
width: 100%;
border-radius : 8px ;
object-fit: cover;



}

&:hover{   
border: 1px solid rgba(249 , 249 , 249   ); 
}

` 
 