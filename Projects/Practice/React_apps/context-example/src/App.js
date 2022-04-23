import logo from "./logo.svg";
import "./App.css";
import { createContext, useContext, useState } from "react";
import Child1 from "./components/Child1";
import Child2 from "./components/Child2";
import { LangContext } from "./context/LangContext";
import NavBar from "./components/NavBar";
import Main from "./components/Main";

function App() {
  const [lang, setLang] = useState(null);
  return (
    <div className="App">
      <LangContext.Provider value={{ lang, setLang }}>
        <NavBar />
        <Main />
      </LangContext.Provider>
    </div>
  );
}

export default App;
