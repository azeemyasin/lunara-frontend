import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './reducers/dataReducer'; // Create this reducer

const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});

export default store;