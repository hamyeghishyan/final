import { configureStore } from "@reduxjs/toolkit";
import main from "./features/mainSlice";

export default configureStore({
    reducer: {
        main,
    },
});
