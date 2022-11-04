import "./App.css";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from "./Pages/Home";
import Search from "./Pages/Search";

export default function App() {
  return (
    //BEM
    <div className="app">
      <Router>
      <Routes>
          <Route path="/search" element={<Search/>}>
          </Route>
          <Route path="/" element={<Home/>}/>
          </Routes>
      </Router>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
