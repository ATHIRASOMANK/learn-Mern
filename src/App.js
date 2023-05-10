// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/auth/register";
import Signup from "./components/auth/Signup";
import Blog from "./components/blogs/Blog";


function App() {
  return (
    <div className="App">
      {/* <h1>hai....</h1> */}
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Signup />} />
          <Route path="/reg" element={<Register />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
