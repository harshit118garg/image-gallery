import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { Home } from "./pages/Home";
// import { RootState } from "./redux/store";
// import { useSelector } from "react-redux";

function App() {
  // const { currPageNum, imagesPerPage } = useSelector(
  //   (state: RootState) => state?.galleryState
  // );

  return (
    <>
      <Routes>
        <Route
          path={`/`}
          element={<Home />}
        />
      </Routes>
    </>
  );
}

export default App;
