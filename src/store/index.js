import { configureStore } from "@reduxjs/toolkit";
import cartslice from "./Cart-Slice";

const store=configureStore({
    reducer:{cart:cartslice.reducer}
});
export default store