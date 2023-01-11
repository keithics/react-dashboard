import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit';
import {sidebarReducer} from 'components/navbar/navbar.slice';
import { requestReducer } from 'request/request.slice';
import { userReducer } from 'pages/user/user.slice';
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const reducer = {
  user: userReducer,
  sidebar: sidebarReducer,
  request: requestReducer,
};

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: ['requestReducers'],
};

export const persistedReducer = persistReducer(persistConfig, combineReducers(reducer));

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
