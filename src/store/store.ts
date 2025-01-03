import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./product/productSlice";
import { optionsReducer } from "./product/optionSlice";
import { variantsReducer } from "./product/variantSlice";

const store = configureStore({
    reducer: {
        product: productReducer,
        options: optionsReducer,
        variants: variantsReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;