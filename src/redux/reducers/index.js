import { combineReducers } from "redux";
import preloader from "./preloader";


export const rootReducer = combineReducers({
    loader: preloader
})