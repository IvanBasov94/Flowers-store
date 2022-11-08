import { createSlice } from "@reduxjs/toolkit";

const flowersSlice = createSlice({
   name: 'flowers',
   initialState: {
      currentFlower: null,
   },
   reducers: {
      setCurrentFlower: (state, action) => {
         state.currentFlower = action.payload;
      },
   },
});

export const { setCurrentFlower } = flowersSlice.actions;
export default flowersSlice.reducer;