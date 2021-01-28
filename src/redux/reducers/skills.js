import {INIT_ALL_SKILLS} from "../actions/actionsTypes";


const initWorks = [];

const skills = (state = initWorks, action) => {
    switch (action.type) {
        case INIT_ALL_SKILLS:
            return action.payload
        default:
            return state

    };
}

export default skills;