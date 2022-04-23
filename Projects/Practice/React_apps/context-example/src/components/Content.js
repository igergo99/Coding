import { LangContext } from "../context/LangContext";
import { useContext, useEffect, useState } from "react";
export default function Content() {
  const langContextValue = useContext(LangContext);
  const [text, setText] = useState("");
  useEffect(() => {
    if (langContextValue.lang === "en") {
      setText("Hello World");
    }
    if (langContextValue.lang === "hu") {
      setText("Szia Világ");
    }
  }, [langContextValue]);

  return <div>{text}</div>;
}
