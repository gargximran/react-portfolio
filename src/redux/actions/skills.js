import axios from "axios";
import {INIT_ALL_SKILLS} from "./actionsTypes";
import store from '../store'

export const initAllSkills = (works) => ({
    type: INIT_ALL_SKILLS,
    payload: works
})

export const loadAllSkills = () => {
    axios.get('https://v1.nocodeapi.com/gargximran/google_sheets/udwotKEDORySJMaj?tabId=Sheet1')
        .then(res => {
            return store.dispatch(initAllSkills(res.data.data))
        })
        .catch(err => {
            return store.dispatch(initAllSkills([]))
        })
}