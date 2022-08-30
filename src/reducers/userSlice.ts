import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  count: number;
  isLoading: boolean;
  error: any;
  recipes: any;
}

const initialState: UserState = {
  count: 0,
  isLoading: false,
  error: "",
  recipes: {},
};

export const recipesSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    increment(state, action: PayloadAction<number>) {
      state.count += action.payload;
    },
    recipeFetching(state) {
      state.isLoading = true;
    },

    recipeFetchingSuccess(state, action: PayloadAction<any>) {
      state.isLoading = false;
      state.error = "";
      state.recipes = action.payload;
    },

    recipeFetchingError(state, action: PayloadAction<any>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default recipesSlice.reducer;
