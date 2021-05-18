import { useReducer, createContext } from 'react';
import { INITIAL_STATE, linkReducer } from './link.reducer';

export const LinkContext = createContext();

const LinkContextProvider = ({ children }) => {
  const [{ PROJECT }, dispatch] = useReducer(linkReducer, INITIAL_STATE)

  return (
    <LinkContext.Provider value={{ PROJECT, dispatch }}>
      {children}
    </LinkContext.Provider>
  )
}

export default LinkContextProvider
