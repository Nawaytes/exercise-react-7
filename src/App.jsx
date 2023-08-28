import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
// import logo from "./logo.svg";
import Stopwatch from "./pages/stopwatch";
import FetchApi from "./pages/fetchApi";
import NotFound from "./pages/notFound";
import FilterPage from "./pages/filter";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route path='/stopwatch' element={<Stopwatch />} />
          <Route path='/fetch-api' element={<FetchApi />} />
          <Route path='/filter-page' element={<FilterPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
