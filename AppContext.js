import React, {useState} from "react";
import {createContext} from "react";

export const Context = createContext('Press the button');

export const AppContext = () => {

  const [currentQuote, setCurrentQuote] = useState({});
  //
  const setQuote = (text) => {
    setCurrentQuote({ quote: text });
  };
  //
  // // Make the context object:
  const vials = {
    currentQuote,
    setQuote,
  };

  return <Context.Provider value={vials}>'Context'</Context.Provider>;
};

export const { Consumer } = Context;
