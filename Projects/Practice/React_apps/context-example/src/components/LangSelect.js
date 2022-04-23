import React from "react";
import { useContext } from "react";
import { LangContext } from "../context/LangContext";

export default function LangSelect() {
  const langContextValue = useContext(LangContext);

  const selectHandler = (event) => {
    langContextValue.setLang(event.target.value);
    console.log(langContextValue.lang);
  };

  return (
    <div>
      <select onChange={selectHandler}>
        <option value="def">Please select a language</option>
        <option value="en">English</option>
        <option value="hu">Hungarian</option>
      </select>
    </div>
  );
}
