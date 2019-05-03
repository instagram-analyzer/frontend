import axios from "axios";

const URL = process.env.REACT_APP_BACKEND_URL;
const SERVICE_URL = process.env.REACT_APP_SERVICE_URL;
const SERVICE_KEY = process.env.REACT_APP_SERVICE_KEY;

// ----------------------------- GET INSTAGRAM ACCOUNT -----------------------------

export const GET_ACCOUNT_START = "GET_ACCOUNT_START";
export const GET_ACCOUNT_SUCCESS = "GET_ACCOUNT_SUCCESS";
export const GET_ACCOUNT_FAILURE = "GET_ACCOUNT_FAILURE";

export const getAccount = username => dispatch => {
  dispatch({ type: GET_ACCOUNT_START });
  axios
    .get(`${URL}/api/instagram/profile/${username}`)
    .then(res => dispatch({ type: GET_ACCOUNT_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: GET_ACCOUNT_FAILURE, payload: err }));
};

// ----------------------------- GET INSTAGRAM GROWTH -----------------------------

export const GET_ACCOUNT_GROWTH_START = "GET_ACCOUNT_GROWTH_START";
export const GET_ACCOUNT_GROWTH_SUCCESS = "GET_ACCOUNT_GROWTH_SUCCESS";
export const GET_ACCOUNT_GROWTH_FAILURE = "GET_ACCOUNT_GROWTH_FAILURE";

export const getAccountGrowth = username => dispatch => {
  dispatch({ type: GET_ACCOUNT_GROWTH_START });
  axios
    .get(`${URL}/api/instagram/profile/stats/${username}`)
    .then(res =>
      dispatch({ type: GET_ACCOUNT_GROWTH_SUCCESS, payload: res.data })
    )
    .catch(err => dispatch({ type: GET_ACCOUNT_GROWTH_FAILURE, payload: err }));
};

// ----------------------------- GET INSTAGRAM SERVICES -----------------------------

export const GET_INSTAGRAM_SERVICES_START = "GET_INSTAGRAM_SERVICES_START";
export const GET_INSTAGRAM_SERVICES_SUCCESS = "GET_INSTAGRAM_SERVICES_SUCCESS";
export const GET_INSTAGRAM_SERVICES_FAILURE = "GET_INSTAGRAM_SERVICES_FAILURE";

export const getServices = () => dispatch => {
  dispatch({ type: GET_INSTAGRAM_SERVICES_START });
  axios
    .get(
      `https://cors-anywhere.herokuapp.com/${SERVICE_URL}/?key=${SERVICE_KEY}&action=services`
    )
    .then(res =>
      dispatch({ type: GET_INSTAGRAM_SERVICES_SUCCESS, payload: res.data })
    )
    .catch(err =>
      dispatch({ type: GET_INSTAGRAM_SERVICES_FAILURE, payload: err })
    );
};

// ----------------------------- SEND INSTAGRAM SERVICES -----------------------------

export const SEND_INSTAGRAM_SERVICES_START = "SEND_INSTAGRAM_SERVICES_START";
export const SEND_INSTAGRAM_SERVICES_SUCCESS =
  "SEND_INSTAGRAM_SERVICES_SUCCESS";
export const SEND_INSTAGRAM_SERVICES_FAILURE =
  "SEND_INSTAGRAM_SERVICES_FAILURE";

export const sendServices = options => dispatch => {
  dispatch({ type: SEND_INSTAGRAM_SERVICES_START });
  axios
    .get(
      `https://cors-anywhere.herokuapp.com/${SERVICE_URL}/?key=${SERVICE_KEY}&action=add&service=475&quantity=${Number(
        options.quantity
      )}&link=${options.link}`
    )
    .then(res =>
      dispatch({ type: SEND_INSTAGRAM_SERVICES_SUCCESS, payload: res.data })
    )
    .catch(err =>
      dispatch({ type: SEND_INSTAGRAM_SERVICES_FAILURE, payload: err })
    );
};

// ----------------------------- GET ALL POSTS -----------------------------

export const GET_ALL_POSTS_START = "GET_ALL_POSTS_START";
export const GET_ALL_POSTS_SUCCESS = "GET_ALL_POSTS_SUCCESS";
export const GET_ALL_POSTS_FAILED = "GET_ALL_POSTS_FAILED";

export const getPosts = instagram_id => dispatch => {
  dispatch({ type: GET_ALL_POSTS_START });
  axios
    .get(`${URL}/api/instagram/allposts/${instagram_id}`)
    .then(res => dispatch({ type: GET_ALL_POSTS_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: GET_ALL_POSTS_FAILED, payload: err }));
};
