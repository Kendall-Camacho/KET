import React from "react";
import {
  Navbar,
  Header,
  About,
  Contact,
  Footer,
  Portfolio,
  Services,
} from "./components/";

const App = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <About/>
      <Services/>
      <Portfolio/>
     <Contact/>
      <Footer/>
    </div>
  );
};

export default App;
