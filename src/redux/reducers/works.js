import {INIT_ALL_WORKS} from "../actions/actionsTypes";

const workReducer = (state = [], action) => {
    switch (action.type) {
        case INIT_ALL_WORKS:
            return action.payload
        default:
            return state
    }
}

export default workReducer;