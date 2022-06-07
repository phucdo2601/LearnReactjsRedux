import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../../redux/userSlide";
import Input from "../InputField/Input";
import "./editPage.css";
import { updateUserFunc } from "./../../redux/api/apiRequest";
const EditPage = (props) => {
  const { setEdit } = props;
  /**
   * useSelector de lay ra cac bien state ma minh da khai bao trong useSlide
   * Cai .user phia sau state phai trung voi cai ten minh da dat trong store.js
   */
  const user = useSelector((state) => state.user);

  /**
   * De thuc thi cac hanh dong ma minh muon thuc hien
   */
  const dispatch = useDispatch();

  const [name, setName] = useState(user.name);
  const [age, setAge] = useState(user.age);
  const [about, setAbout] = useState(user.about);
  const [themme, setTheme] = useState("#ff9051");
  const [url, setUrl] = useState(user.avaUrl);

  const avaUrl = [
    "https://thumbs.dreamstime.com/b/funny-cartoon-monster-face-vector-square-avatar-halloween-175916751.jpg",
    "https://thumbs.dreamstime.com/z/cartoon-funny-monster-halloween-vector-illustration-monster-face-avatar-97155715.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPzgDvqMuXiETyWpSgMDg1MFltDfPtlJlohA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2bZJGMI_B2EBOz4LV1mWQPLygX3j-VON8hQ&usqp=CAU",
    "https://media.istockphoto.com/vectors/brunette-young-man-profile-avatar-beautiful-guy-face-male-cartoon-vector-id1253023842",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setEdit(false);
    const updateUser = {
      name: name,
      age: age,
      about: about,
      avaUrl: url,
      themeColor: themme,
    };

    //phuong thuc dung redux update binh thuong
    // dispatch(update(updateUser));

    /**
     * Update call api from server
     */
     updateUserFunc(updateUser, dispatch);
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <section className="edit-container">
            <button className="close">Save</button>

            <div className="edit-profile">Edit Profile</div>
            <div className="input-container">
              <Input
                label="Display Name"
                type="text"
                data={user.name}
                setData={setName}
              />
              {/* <label>Display Name</label>
              <input
                type="text"
                className=""
                placeholder="Do Ngoc Phuc"
                onChange={(e) => setName(e.target.value)}
              /> */}
              {/* <label>Age</label>
              <input
                type="text"
                className=""
                placeholder="22"
                onChange={(e) => setAge(e.target.value)}
              /> */}

              <Input label="Age" type="text" data={user.age} setData={setAge} />
              {/* <label>About</label>
              <textarea
                type="text"
                className="input-about"
                onChange={(e) => setAbout(e.target.value)}
              /> */}

              <Input
                label="About"
                type="text"
                data={user.about}
                setData={setAbout}
                inputType="textarea"
                classStyle="input-about"
              />
              <label>Profile Picture</label>
              <div className="input-image-container">
                {avaUrl.map((url) => {
                  return (
                    <>
                      <img
                        src={url}
                        className="input-image"
                        alt=""
                        onClick={(e) => setUrl(e.target.src)}
                      />
                    </>
                  );
                })}
              </div>

              <div className="theme-container">
                <label>Theme</label>
                <input
                  type="color"
                  className="theme-color"
                  onChange={(e) => setTheme(e.target.value)}
                />
              </div>
            </div>
          </section>
        </form>
      </div>
    </>
  );
};

export default EditPage;
