import { useReducer, createContext } from 'react';
import { INITIAL_STATE, linkReducer } from './link.reducer';

export const LinkContext = createContext();

const LinkContextProvider = ({ children }) => {
  const [{ view, PROJECT }, dispatch] = useReducer(linkReducer, INITIAL_STATE)

  return (
    <LinkContext.Provider value={{ view, PROJECT, dispatch }}>
      {children}
    </LinkContext.Provider>
  )
}

export default LinkContextProvider
