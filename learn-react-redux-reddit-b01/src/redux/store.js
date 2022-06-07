import { configureStore } from "@reduxjs/toolkit";
import userReducerTest1 from "./userSlide";

export default configureStore({
  reducer: {
    /**
     * Goi useSlide trong reducer cua store de bat dau su dung
     */
    user: userReducerTest1,
  },
});
