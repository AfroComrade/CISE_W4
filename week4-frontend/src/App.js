import React, {Component} from "react";
import {BrowserRouter, Routes, Route, NavLink, Navigate} from "react-router-dom";
import './App.css'
 
// These are used in the routes
import Home from "./pages/Home";
import SEPractice from "./pages/SE-Practice";
import SubmitArticle from "./pages/Submit-Article"; 
import NotFoundPage from "./pages/404";
 
class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <h1>Software Engineering Empirical Evidence Database (SEED)</h1>
          <ul className="header">
            <li><NavLink exact to = "/">Home</NavLink></li>
            <li><NavLink exact to = "/SEPractice">Select Practice</NavLink></li>
            <li><NavLink exact to = "/SubmitArticle">Submit an Article</NavLink></li>
          </ul>
      <Routes>
          <Route path = "/" element={<Home/>}/>
          <Route path = "/SEPractice" element={<SEPractice/>}/>
          <Route path = "/SubmitArticle" element={<SubmitArticle/>}/>
          <Route path = "/404" element={<NotFoundPage/>}/>
          <Route path = "*" element = { <Navigate to = "/404" /> } />
      </Routes>
      </BrowserRouter>
    );
  }
}



/*
const App = () =>  {
    return (
      <BrowserRouter>
        <Routes>
          <h1>Software Practice Empirical Evidence Database (SPEED)</h1>
            <ul className="header">
              <li><NavLink exact to = "/">Home</NavLink></li>
              <li><NavLink exact to = "/SEPractice">Select Practice</NavLink></li>
              <li><NavLink exact to = "/SubmitArticle">Submit an Article</NavLink></li>
            </ul>

            <Route path = "/" element={<Home/>}/>
            <Route path = "/SEPractice" element={<SEPractice/>}/>
            <Route path = "/SubmitArticle" element={<SubmitArticle/>}/>
        </Routes>
        </BrowserRouter>
    );
}
*/

 
export default App;
