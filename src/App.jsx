import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Stopwatch from "./pages/stopwatch";
import FetchApi from "./pages/fetchApi";
import NotFound from "./pages/notFound";
import FilterPage from "./pages/filter";
import NavBar from "./components/NavBar";
import CounterPage from "./pages/counter";
import HomePage from "./pages/home";
import ListPage from "./pages/home/List";

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
          <Route path='/' element={<HomePage />} />
          <Route path='/list' element={<ListPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
