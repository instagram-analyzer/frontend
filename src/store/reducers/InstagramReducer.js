import {
    GET_ACCOUNT_START,
    GET_ACCOUNT_SUCCESS,
    GET_ACCOUNT_FAILURE,
    GET_ACCOUNT_GROWTH_START,
    GET_ACCOUNT_GROWTH_SUCCESS,
    GET_ACCOUNT_GROWTH_FAILURE
} from '../actions/InstagramActions.js';

const initialState = {
    instagramAccount: {},
    stats: [],
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
        case GET_ACCOUNT_GROWTH_START:
            return{
                ...state,
                isLoading: true,
            }
        case GET_ACCOUNT_GROWTH_SUCCESS:
            return{
                ...state,
                stats: action.payload,
                isLoading: false,
            }
        case GET_ACCOUNT_GROWTH_FAILURE:
            return{
                ...state,
                isLoading: false
            }
        default:
            return state
    }
}