import { useState } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import EditPage from "./components/Edits/EditPage";
import Header from "./components/Headers/Header";

function App() {
  const [isEdit, setEdit] = useState(false);

  /**
   * Goi cac bien co state trong redux thong useSelector
   */
  const pending = useSelector((state) => state.user.pending);
  const error = useSelector((state) => state.user.error);

  return (
    <div className="App">
      {isEdit ? <EditPage setEdit={setEdit} /> : <Header setEdit={setEdit} />}

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
