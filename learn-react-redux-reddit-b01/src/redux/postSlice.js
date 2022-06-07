import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  /**
   * Dat ten de ti nua qua store goi ra sai
   */
  name: "post",

  /**
   * initialState la gia tri ban dau cua model redux nay
   */
  initialState: {
    posts: [
      {
        title: "",
        description: "",
        tag: 0,
      },
    ],
  },

  reducers: {
    createPost: (state, action) => {
      /**
       * Spreead operator la copy toan bo mang da khai ra mot mang moi, roi thao tac cac
       * tien ich moi tren mang vua copy
       */
      state.posts = [...state.posts, action.payload];
    },
  },
});

//export function trong redux toolkit
export const { createPost } = postSlice.actions;

export default postSlice.reducer;
