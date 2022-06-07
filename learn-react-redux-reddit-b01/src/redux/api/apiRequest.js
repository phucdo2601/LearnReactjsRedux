import { updateError, updateStart, updateSuccess } from "../userSlide";
import axios from "axios";

export const updateUserFunc = async (user, dispatch) => {
  dispatch(updateStart());
  try {
    const res = await axios.post("/v1/update", user);
    dispatch(updateSuccess(res.data));
  } catch (error) {
    dispatch(updateError());
  }
};
