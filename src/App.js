import "./App.css";
import React from "react";
import Nav from "./Components/Nav";
import Banner from "./Components/Banner";
import About from "./Components/About";
import Services from "./Components/Services";
import Footer from "./Components/Footer";




function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <About/>     
      <Services/>
      <Footer/>
   
    </div>
    
    
  );
}

export default App;
