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
            const { netProfit, balance, cost, revenue } = action.payload;

            state.netProfit = netProfit;
            state.balance = balance;
            state.cost = cost;
            state.revenue = revenue;
        },
    },
});

export const { setData } = dataSlice.actions;

export default dataSlice.reducer;