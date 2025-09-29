import React from "react";
import FooterPage from "./components/FooterPage/index.jsx";
import ReviewsStories from './components/ReviewsStories/index.jsx'
import Menu from "./components/Menu/index.jsx";
import AboutUs from './components/AboutUs/index.jsx'
import CateringQuotation from './components/CateringQuotation/index.jsx'
import HomePage from './components/HomePage/index.jsx'
import './App.css'

function App() {
  return (
    <div className="app">
      <HomePage/>
      <AboutUs/>
      <Menu/>
      <CateringQuotation/>
      <ReviewsStories />
      <FooterPage/>
    </div>
  );
}
export default App;
