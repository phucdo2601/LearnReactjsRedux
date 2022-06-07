import { useState } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import EditPage from "./components/Edits/EditPage";
import FooterComp from "./components/Footer/FooterComp";
import Header from "./components/Headers/Header";
import ListPostComp from "./components/Posts/ListPostComp";
import MakePostComp from "./components/Posts/MakePostComp";

function App() {
  const [isEdit, setEdit] = useState(false);

  /**
   * Ta state de bat su kien mo ra khung tao moy bai post
   */
  const [isOpenPost, setIsOpenPost] = useState(false);

  /**
   * Goi cac bien co state trong redux thong useSelector
   */
  const pending = useSelector((state) => state.user.pending);
  const error = useSelector((state) => state.user.error);

  return (
    <div className="App">
      {isEdit ? (
        <EditPage setEdit={setEdit} />
      ) : !isEdit && !isOpenPost ? (
        <>
          <Header setEdit={setEdit} />
          <div className="post-container">
            <ListPostComp />
          </div>
          <FooterComp isOpenPost={isOpenPost} setIsOpenPost={setIsOpenPost} />
        </>
      ) : (
        <>
          <Header setEdit={setEdit} />
          <MakePostComp setIsOpenPost={setIsOpenPost} />
        </>
      )}

      {pending && (
        <>
          <p className="loading">Loading...</p>
        </>
      )}

      {!isEdit && error && (
        <>
          <p className="error">Error when fetching data from server!!!</p>
        </>
      )}
    </div>
  );
}

export default App;
