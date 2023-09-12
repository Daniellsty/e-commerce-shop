import {configureStore} from "@reduxjs/toolkit";
import sidebarReducer from "./sidebarSlice";
import categoryReducer from "./categorySlice";
import productReducer from "./productSlice";
import cartReducer from "./cartSlice";
import authReducer from "./authSlice";


const store = configureStore({
    reducer: {
        sidebar: sidebarReducer,
        category: categoryReducer,
        product: productReducer,
        cart: cartReducer,
        auth:authReducer,
      
    }
});

export default store;