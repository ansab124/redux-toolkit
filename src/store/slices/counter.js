
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 10,
}

 const increment = (state) => {
    state.value += 1
}

 const decrement = (state) => {
    state.value = state.value-1
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment,
        decrement
    }
})

export const counterActions = counterSlice.actions

export const counterReducer = counterSlice.reducer