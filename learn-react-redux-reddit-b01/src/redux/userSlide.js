import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  /**
   * initState la gia tri ban dau, giong nhu khi vua vao trang load len cac phan tu dc set trong mot cai state nao do
   */
  initialState: {
    name: "Phuc Do",
    age: 22,
    about: "I'm a software engineer in Viet Nam",
    avaUrl:
      "https://thumbs.dreamstime.com/b/funny-cartoon-monster-face-vector-square-avatar-halloween-175916751.jpg",
    themeColor: "#ff9051",
    pending: false, // tao mot bien co bieu thi su cho cua mot su kien
    error: false, // tao mot bien co bieu thi su sai cua mot su kien khi thuc hien
  },
  /**
   * Reducers no se chua cac canh de lam voi slice nay, noi cach khac la no chua cac function de lam trong state hien tai
   */
  reducers: {
    /**
     * state trong day chinh la cac phan tu trong initState khai bao o tren (name , age, about, avaUrl).
     * action la cai gia tri ben ngoai ma mong muon truyen vao
     * state.name : chinh la cai name dc khai bao trong initState
     * action.payload.name la mot gia tri ben ngoai ma minh mong muon truyen vao
     * day la truong hop update binh thuong khong co quan ly su kien bat dau, thanh cong that bai
     */
    // update: (state, action) => {
    //   state.name = action.payload.name;
    //   state.age = action.payload.age;
    //   state.about = action.payload.about;
    //   state.avaUrl = action.payload.avaUrl;
    //   state.themeColor = action.payload.themeColor;
    // },
    //-----------------------------------------------------------
    /**
     * Demo quan ly state cua mot chuc nang call tu server
     * Se chia ra 3 khoang tg start, success, error
     */

    //bat dau update
    updateStart: (state) => {
      state.pending = true;
    },

    //update loi
    updateError: (state) => {
      state.pending = false;
      state.error = true;
    },

    //update thanh cong
    updateSuccess: (state, action) => {
      state.pending = false;
      state.error = false;
      //luc nay se cap nhat lai cac trang thai cua cac state can cap nhap
      state.name = action.payload.name;
      state.age = action.payload.age;
      state.about = action.payload.about;
      state.avaUrl = action.payload.avaUrl;
      state.themeColor = action.payload.themeColor;
    },
  },
});

export const { updateStart, updateError, updateSuccess } = userSlice.actions;
export default userSlice.reducer;
