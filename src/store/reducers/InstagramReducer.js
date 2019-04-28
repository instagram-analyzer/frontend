import {
    GET_ACCOUNT_START,
    GET_ACCOUNT_SUCCESS,
    GET_ACCOUNT_FAILURE
} from '../actions/InstagramActions.js';

const initialState = {
    instagramAccount: {},
    isLoading: false
}

export default function instagramReducer(state = initialState, action){
    switch(action.type){
        case GET_ACCOUNT_START:
            return{
                ...state,
                isLoading: true
            }
        case GET_ACCOUNT_SUCCESS:
            return{
                ...state,
                instagramAccount: action.payload,
                isLoading: false,
            }
        case GET_ACCOUNT_FAILURE:
            return{
                ...state,
                isLoading: false,
            }
        default:
            return state
    }
}