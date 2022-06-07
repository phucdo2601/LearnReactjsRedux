import React from "react";
import "./footer.css";

const FooterComp = (props) => {
  const { isOpenPost, setIsOpenPost } = props;

  /**
   * function nay giup bat tap form thong qua dau cong lun, tuy chinh truc tiep thong qua bien state isOpenPost truyen xuong
   */
  const turnOnOffFormCreatePost = () => {
    setIsOpenPost(!isOpenPost);
  };

  return (
    <>
      <footer>
        <div className="footer-title" onClick={turnOnOffFormCreatePost}>
          {isOpenPost ? "x" : "+"}
        </div>
      </footer>
    </>
  );
};

export default FooterComp;
