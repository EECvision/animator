import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { navReducer } from './nav/nav.reducer';
import { linkReducer } from './link/link.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['nav', 'link']
}

const rootReducer = combineReducers({
  nav: navReducer,
  link: linkReducer
})

export default persistReducer(persistConfig, rootReducer);