import { toast } from "react-toastify";

import {
  GET_ACCOUNT_START,
  GET_ACCOUNT_SUCCESS,
  GET_ACCOUNT_FAILURE,
  GET_ACCOUNT_GROWTH_START,
  GET_ACCOUNT_GROWTH_SUCCESS,
  GET_ACCOUNT_GROWTH_FAILURE,
  GET_INSTAGRAM_SERVICES_START,
  GET_INSTAGRAM_SERVICES_SUCCESS,
  GET_INSTAGRAM_SERVICES_FAILURE,
  SEND_INSTAGRAM_SERVICES_START,
  SEND_INSTAGRAM_SERVICES_SUCCESS,
  SEND_INSTAGRAM_SERVICES_FAILURE,
  GET_ALL_POSTS_START,
  GET_ALL_POSTS_SUCCESS,
  GET_ALL_POSTS_FAILED
} from "../actions/InstagramActions.js";

const initialState = {
  instagramAccount: {},
  stats: [],
  services: [],
  isLoading: false,
  posts: []
};

export default function instagramReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ACCOUNT_START:
      return {
        ...state,
        isLoading: true
      };
    case GET_ACCOUNT_SUCCESS:
      return {
        ...state,
        instagramAccount: action.payload,
        isLoading: false
      };
    case GET_ACCOUNT_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    case GET_ACCOUNT_GROWTH_START:
      return {
        ...state,
        isLoading: true
      };
    case GET_ACCOUNT_GROWTH_SUCCESS:
      return {
        ...state,
        stats: action.payload,
        isLoading: false
      };
    case GET_ACCOUNT_GROWTH_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    case GET_INSTAGRAM_SERVICES_START:
      return {
        ...state,
        isLoading: true
      };
    case GET_INSTAGRAM_SERVICES_SUCCESS:
      return {
        ...state,
        services: action.payload,
        isLoading: false
      };
    case GET_INSTAGRAM_SERVICES_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    case SEND_INSTAGRAM_SERVICES_START:
      return {
        ...state,
        isLoading: true
      };
    case SEND_INSTAGRAM_SERVICES_SUCCESS:
      action.payload.error
        ? toast.error(action.payload.error)
        : toast.success(action.payload.order);
      return {
        ...state,
        isLoading: false
      };
    case SEND_INSTAGRAM_SERVICES_FAILURE:
      toast.error(action.payload);
      return {
        ...state,
        isLoading: false
      };

    case GET_ALL_POSTS_START:
      return {
        ...state,
        isLoading: true
      };
    case GET_ALL_POSTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        posts: action.payload
      };
    case GET_ALL_POSTS_FAILED:
      toast.error(action.payload);
      return {
        ...state,
        isLoading: false
      };

    default:
      return state;
  }
}
