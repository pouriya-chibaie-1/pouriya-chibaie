import { createContext,useState } from "react";
const Context = createContext({})


  const Provider = ({ children }) => {
    const [mode, setMode] = useState(true);  // pass more reducers combineReducers(user, blogs, products)
  const value = {mode,setMode}

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export { Context, Provider}