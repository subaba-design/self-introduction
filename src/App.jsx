import React    from "react";
import Home     from "./components/Home/Home";
import About    from "./components/About/About";
import Passion  from "./components/Passion/Passion";
import Strength from "./components/Strength/Strength";
import Contact  from "./components/Contact/Contact";
// import Header from "./components/Header/Header";
// import MyComponent from "./components/MyComponent";
import { 
  HashRouter as Router,
  Route
} from "react-router-dom";

function App() {
  return (
    <div>
      {/* <MyComponent>
        <Header />  
      </MyComponent> */}
      <Router>
        <Route path="/" exact component={ Home } />
        <Route path="/about" exact component={ About } />
        <Route path="/passion" exact component={ Passion } />
        <Route path="/strength" exact component={ Strength } />
        <Route path="/contact" exact component={ Contact } />
      </Router>
    </div>
  );
}

export default App;
