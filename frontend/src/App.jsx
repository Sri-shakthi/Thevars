// // App.jsx
// import Header from "./components/Headers.jsx";
// import Hero from "./components/Hero.jsx";
// import Quotation from "./components/Quotation.jsx";
// import MapSection from "./components/MapSection.jsx";
// import Reviews from "./components/Reviews.jsx";
// import Footer from "./components/Footer";

// export default function App() {
//   return (
//     <div className="font-sans text-gray-800">
//       <Header />
//       <Hero />
//       <Quotation />
//       <MapSection />
//       <Reviews />
//       <Footer />
//     </div>
//   );
// }

// import React from "react";
// import Header from "./components/Headers.jsx";
// import Hero from "./components/Hero";
// import HeroPage from "./components/HeroPage/index.jsx";

// function App() {
//   return (
//     <>
//       <Header />
//       <main>
//         <Hero />
//         {/* other sections: #about #menu #catering #contact */}
//         <section id="about" style={{ minHeight: "60vh" }}></section>
//       </main>
//     </>
//   );
// }
// export default App;



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
