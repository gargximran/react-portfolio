import axios from "axios";
import {INIT_ALL_WORKS} from "./actionsTypes";
import store from "../store";

export const initAllWorks  = (works) => ({
    type: INIT_ALL_WORKS,
    payload: works
})

export const loadAllWorks = () => {
    axios.get('https://v1.nocodeapi.com/gargximran/google_sheets/udwotKEDORySJMaj?tabId=works')
        .then(res => {
            store.dispatch(initAllWorks(res.data.data))
        })
        .catch(err => {
            store.dispatch(initAllWorks([]))
        })
}