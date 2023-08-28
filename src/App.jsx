import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import logo from "./logo.svg";
import Stopwatch from "./pages/stopwatch";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/stopwatch' element={<Stopwatch />} />
        </Routes>
      </Router>
      {/* <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
        </header>
      </div> */}
    </>
  );
}

export default App;
