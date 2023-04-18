import React, { createContext, useState } from "react";
import "./App.css";
import BankDetails from "./pages/BankDetails";

const ContextData = createContext();

function App() {
  const [select, setSelect] = useState("");

  return (
    <>
      <ContextData.Provider value={{ select, setSelect }}>
        <BankDetails />
      </ContextData.Provider>
    </>
  );
}

export { App, ContextData };
