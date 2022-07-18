import { configureStore  , getDefaultMiddleware} from '@reduxjs/toolkit';
 
 
import userReducer from "../features/user/userSlice";


import recommendReducer from "../features/Movie/recommendSlice";
import newDisneyReducer from "../features/Movie/newDisneySlice";
import originaldReducer from "../features/Movie/originalSlice";
import trendingReducer from "../features/Movie/trendingSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  
    recommend : recommendReducer ,
    newDisney : newDisneyReducer ,
    original : originaldReducer ,
    trending : trendingReducer

  },

  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
 
});
