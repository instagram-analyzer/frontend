import axios from 'axios';

const URL = process.env.REACT_APP_BACKEND_URL

// ----------------------------- GET INSTAGRAM ACCOUNT ----------------------------- 

export const GET_ACCOUNT_START = "GET_ACCOUNT_START";
export const GET_ACCOUNT_SUCCESS = "GET_ACCOUNT_SUCCESS";
export const GET_ACCOUNT_FAILURE = "GET_ACCOUNT_FAILURE";

export const getAccount = username => dispatch => {
    dispatch({ type: GET_ACCOUNT_START });
    axios
        .get(`${URL}/api/users/profile/${username}`)
        .then(res => dispatch({ type: GET_ACCOUNT_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: GET_ACCOUNT_FAILURE, payload: err }))
} 

// ----------------------------- GET INSTAGRAM ACCOUNT ----------------------------- 

export const GET_ACCOUNT_GROWTH_START = "GET_ACCOUNT_GROWTH_START";
export const GET_ACCOUNT_GROWTH_SUCCESS = "GET_ACCOUNT_GROWTH_SUCCESS";
export const GET_ACCOUNT_GROWTH_FAILURE = "GET_ACCOUNT_GROWTH_FAILURE";

export const getAccountGrowth = username => dispatch => {
    dispatch({ type: GET_ACCOUNT_GROWTH_START });
    axios
        .get(`${URL}/api/users/account/stats/${username}`)
        .then(res => dispatch({ type: GET_ACCOUNT_GROWTH_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: GET_ACCOUNT_GROWTH_FAILURE, payload: err }))
}