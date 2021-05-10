import { drawReducer, INITIAL_STATE } from './draw.reducer';
import { useReducer, createContext } from 'react';

export const DrawContext = createContext();

const DrawContextProvider = ({children}) => {
  const [{drawLine}, dispatch] = useReducer(drawReducer, INITIAL_STATE);

  return (
    <DrawContext.Provider value={{dispatch, drawLine}}>
      {children}
    </DrawContext.Provider>
  )
}

export default DrawContextProvider;
