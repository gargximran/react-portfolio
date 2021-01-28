import { combineReducers } from "redux";
import preloader from "./preloader";
import skills from "./skills";
import workReducer from "./works";


export const rootReducer = combineReducers({
    loader: preloader,
    skills: skills,
    works: workReducer
})