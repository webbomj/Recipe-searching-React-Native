import { AppDispatch } from "../store/store";
import { recipesSlice } from "./userSlice";

export const fetchRecipes =
  (query: string = "cake") =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(recipesSlice.actions.recipeFetching());
      await fetch(
        `https://api.edamam.com/api/recipes/v2?type=public&beta=false&app_id=9aa93e9c&app_key=98b8b38b27fcc09925f8d185765479ff&q=${query}`
      )
        .then((response) => {
          if (response.status !== 200) {
            dispatch(
              recipesSlice.actions.recipeFetchingError(
                response.status.toString()
              )
            );
          } else {
            return response.json();
          }
        })
        .then((json) => {
          if (json.count === 0) {
            dispatch(recipesSlice.actions.recipeFetchingError("404 error"));
          } else {
            dispatch(recipesSlice.actions.recipeFetchingSuccess(json.hits));
          }
        });
    } catch (e) {
      dispatch(recipesSlice.actions.recipeFetchingError("Error"));
    }
  };
