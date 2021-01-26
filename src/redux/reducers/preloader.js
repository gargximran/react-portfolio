import {ACTIVE_PRELOADER, DEACTIVATE_PRELOADER, DONE_PRELOADER} from "../actions/actionsTypes";

const initState = {
  loader: true,
    done: false
};

const preloader = (state = initState, action) => {
    switch (action.type){
        case ACTIVE_PRELOADER:
            return (
                {
                    ...state,
                    loader: true,
                    done: false
                }
            )
        case DEACTIVATE_PRELOADER:
            return (
                {
                    ...state,
                    loader: false,
                    done: false
                }
            )
        case DONE_PRELOADER:
            return ({
                ...state,
                loader: false,
                done: true
            })
        default:
            return state
    };

}

export default preloader;