import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRecipe, RecipeItem } from "../types/interface";

interface UserState {
  isLoading: boolean;
  error: any;
  recipes: IRecipe[];
  singleRecipe: RecipeItem | null;
}

const initialState: UserState = {
  isLoading: false,
  error: "",
  recipes: [],
  singleRecipe: null,
};

export const recipesSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setSingleRecipe(state, action: PayloadAction<RecipeItem>) {
      state.singleRecipe = action.payload;
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
