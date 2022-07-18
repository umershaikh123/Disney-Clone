import { createSlice } from "@reduxjs/toolkit";
 

 

const initialState = {
  recommend: null,
  newDisney: null,
  original: null,
  trending: null,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.recommend = action.payload.recommend;
      state.newDisney = action.payload.newDisney;
      state.original = action.payload.original;
      state.trending = action.payload.trending;
    },
  },
});

export const { setMovies } = movieSlice.actions;

export const selectRecommend = (state) => state.movie.recommend;
export const selectNewDisney = (state) => state.movie.newDisney;
export const selectOriginal = (state) => state.movie.original;
export const selectTrending = (state) => state.movie.trending;

export default movieSlice.reducer;





// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     movies: []
// }

// const movieSlice = createSlice({
//     name: "movie",
//     initialState,
//     reducers: {
//         setMovies: (state, action) => {
//             state.movies  = action.payload
//         }
//     }
// })

// export const { setMovies } = movieSlice.actions;

// export const selectMovies = (state) => state.movie.movies;

// export default movieSlice.reducer;





// import {createSlice} from "@reduxjs/toolkit"

// const initialState = {
//     movies : []
// }

// const movieSlice = createSlice({
//     name : "movie" ,
//     initialState ,
//     reducer : {
//         setMovies : (state , action) => {
//             state.movies = action.payload;
//         }
//     }
// })

// export const {setMovies} = movieSlice.actions;

// export const selectMovies = (state) => state.movie.movies

// export default movieSlice.reducer;



// MOVIES


// const Movies = () => {
//     const movies = useSelector(selectMovies);
  
//     console.log("This is movies " , movies)
  
//     return (
//       <Container>
//           <h4>Recommended for You</h4>
//           <Content>
//                {movies && 
//                movies.map( (movie)=>(
//                 <Wrap>
//                   <img src={movie.cardImg} />
//               </Wrap>
//                ))
  
//                }
                 
   
   
//               <Wrap>
//                   <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg" />
//               </Wrap>
   
//           </Content>
//       </Container>
//   )
//   }
  
//   export default Movies
  
//   const Container = styled.div`
//   padding: 0 0 26px;
//   `
  
//   const Content = styled.div`
//   display: grid;
//   grid-gap: 25px;
//   grid-template-columns: repeat(4, minmax(0, 1fr));
//   `
  
//   const Wrap = styled.div`
//   border-radius: 10px;
//   overflow: hidden;
//   cursor: pointer;
//   box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
//   rgb(0 0 0 / 73%) 0px 16px 10px -10px;
//   border: 3px solid rgba(249, 249, 249, 0.1);
//   transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  
//   img {
//       width: 100%;
//       object-fit: cover;
//       height: 100%;
      
//   }
  
//   &:hover {
//       box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
//       rgb(0 0 0 / 72%) 0px 30px 22px -10px;
//       transform: scale(1.05);
//       border-color: rgba(249, 249, 249, 0.8);
//   }
  
//   `
  
  