import React    from "react";
import Home     from "./components/Home/Home";
import About    from "./components/About/About";
import Passion  from "./components/Passion/Passion";
import Strength from "./components/Strength/Strength";
import Contact  from "./components/Contact/Contact";
import Thanks   from "./components/Thanks/Thanks";
import Footer   from "./components/Footer/Footer";
// import Header from "./components/Header/Header";
// import MyComponent from "./components/MyComponent";

function App() {
  return (
    <div>
      {/* <MyComponent>
        <Header />  
      </MyComponent> */}
      <Home />
      <About />
      <Passion />
      <Strength />
      <Contact />
      <Thanks />
      <Footer />
    </div>
  );
}

export default App;
