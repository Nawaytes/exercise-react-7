import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Stopwatch from "./pages/stopwatch";
import FetchApi from "./pages/fetchApi";
import NotFound from "./pages/notFound";
import FilterPage from "./pages/filter";
import NavBar from "./components/NavBar";
import CounterPage from "./pages/counter";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route path='/stopwatch' element={<Stopwatch />} />
          <Route path='/fetch-api' element={<FetchApi />} />
          <Route path='/filter-page' element={<FilterPage />} />
          <Route path='/counter' element={<CounterPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
