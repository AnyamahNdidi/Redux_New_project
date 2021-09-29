import { configureStore } from "@reduxjs/toolkit"
import socailReducer from "./socail"

export const store = configureStore({
  reducer: {
    socailReducer
  }
})