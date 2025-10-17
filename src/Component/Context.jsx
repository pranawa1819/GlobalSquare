import Hi from '../Component/hi';

import {createContext} from "react";

export const AppContext = createContext();

function ContextExample(){
    const username="pranawa"
return (
    <>
     <AppContext.Provider value={{username }}>
       <Hi />

     </AppContext.Provider>

   </>
  )
};

export default ContextExample