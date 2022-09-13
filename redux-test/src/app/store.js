import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import createSagaMiddleware from '@redux-saga/core'
import usersSlice from '../features/counter/usersSlice'
import { combineReducers } from "redux";

export const rootReducer = combineReducers(
  {
    usersSlice: usersSlice,
    counter: counterReducer,
  }
)

const saga = createSagaMiddleware()
export const store = configureStore({
  reducer: {
    rootReducer
    
  },
  middleware: [saga]
})