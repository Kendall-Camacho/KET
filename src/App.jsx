import React from "react";
import {
  Navbar,
  Header,
  About,
  Contact,
  Footer,
  Challenges,
  Services,
} from "./components/";

const App = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <About/>
      <Services/>
      <Challenges/>
     <Contact/>
      <Footer/>
    </div>
  );
};

export default App;
