import {ACTIVE_PRELOADER, DEACTIVATE_PRELOADER, DONE_PRELOADER} from "./actionsTypes";

export const activeLoader = () => ({
    type: ACTIVE_PRELOADER
})

export const deactivateLoader = () => ({
    type: DEACTIVATE_PRELOADER
})

export const donePreloader = () => ({
    type: DONE_PRELOADER
})