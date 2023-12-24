import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { 
  persistReducer, persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import Filter from './Slices/Filter'
import Category from '../redux/Slices/Category'
import Cart from './Slices/Cart'
// import Size from './Slices/Size';


const rootReducer = combineReducers({
    Filter,
    // Size,
    Category,
    Cart,
}) 

const persistConfig = {
  key: 'root',
  storage,
  // whitelist: ['что хотим сохранять'],
  // blacklist: ['что не хотим сохранять'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer)
 

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store);