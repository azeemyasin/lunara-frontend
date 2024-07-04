// reducers/dataReducer.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  netProfit: [],
  balance: [],
  cost: [],
  revenue: [],
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.netProfit = action.payload.netProfit;
      state.balance = action.payload.balance;
      state.cost = action.payload.cost;
      state.revenue = action.payload.revenue;
    },
  },
});

export const { setData } = dataSlice.actions;

export default dataSlice.reducer;