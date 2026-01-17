// filename - ./src/redux/store/index.js

import { configureStore } from "@reduxjs/toolkit";
import textReducer from "../features/textSlice";

// create a store for the redux application
const store = configureStore({
    reducer: {
        text: textReducer
    }
});

export default store;