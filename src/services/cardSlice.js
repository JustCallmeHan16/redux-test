import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "card",
  initialState: {
    meals: [],
  },
  reducers: {
    getMeals: (state, action) => {
      state.meals = action.payload;
    },
    deleteMeals: (state, action) => {
      const filterData = state.meals.filter((meal) => meal.idMeal !== action.payload);
      state.meals = filterData;
    },
  },
});

export const { getMeals, deleteMeals } = cardSlice.actions;
export default cardSlice.reducer;
