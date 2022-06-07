import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../../redux/postSlice";
import Input from "../InputField/Input";
import "./makePostComp.css";

const MakePostComp = (props) => {
  //lay props truyen xuong tu comp cha
  const { setIsOpenPost } = props;

  /**
   * tao dipatch de thao tac voi redux-toolkit
   */
  const dispatch = useDispatch();

  /**
   * Tao state de dieu khien title
   */
  const [title, setTitle] = useState("Add A Title");
  const [desc, setDesc] = useState("Add some description");

  /**
   * Thang state se giup chieu nhung tham sdo cua cac btn trong arr, neu ma trung thi  se doi mau
   */
  const [selecctedIdx, setSelecctedIdx] = useState(0);

  /**
   * tao array cho thang tags
   */
  const tags = ["None", "NSFW", "Mood", "Quotes", "Shitpost"];

  /**
   * fuc set click tag btn
   */
  const setClickTagBtn = (idx) => {
    setSelecctedIdx(idx);
  };

  /**
   * func tao moi mot bai post
   */
  const handlePost = () => {
    setIsOpenPost(false);
    const newPost = {
      title: title,
      description: desc,
      tag: selecctedIdx,
    };

    /**
     * Goi function createPost trong redux bang dispatch
     */
    dispatch(createPost(newPost));
  };

  return (
    <>
      <section className="makepost-container">
        <div className="makepost-navigation">
          <p className="makepost-save" onClick={handlePost}>
            Post
          </p>
        </div>

        <Input
          data={title}
          inputType="textarea"
          setData={setTitle}
          label="Title"
          classStyle="makepost-title"
        />

        <Input
          data={desc}
          inputType="textarea"
          setData={setDesc}
          label="Description"
          classStyle="makepost-desc"
        />

        <label>Tags</label>
        <div className="makepost-tags">
          {tags.map((tag, index) => (
            <button
              key={index}
              className={`${
                selecctedIdx === index
                  ? `makepost-tags-selected`
                  : `makepost-tags-${tag}`
              }`}
              onClick={() => setClickTagBtn(index)}
            >
              {tag}
            </button>
          ))}
        </div>
      </section>
    </>
  );
};

export default MakePostComp;
