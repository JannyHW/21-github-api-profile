import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import axios from "axios";

// set initial global variables for empty object for profile and empty arrary for repos
const initialState = {
  profile: {},
  repos: [],
};

// create profile FN as Reducer FN
function profile(state = initialState, action) {
  switch (action.type) {
    case "GET_PROFILE":
      return { ...state, profile: action.payload };
    case "GET_REPOS":
      return { ...state, repos: action.payload };
    default:
      return state;
  }
}

//create getProfile FN and passed in dispath method as parameter to update Action of GET_PROFILE and GET-REPOS
export function getProfile() {
  return (dispatch) => {
    axios.get("https://api.github.com/users/jannyHW").then((resp) => {
      dispatch({
        type: "GET_PROFILE",
        payload: resp.data,
      });
    });
    axios.get("https://api.github.com/users/jannyHW/repos").then((resp) => {
      dispatch({
        type: "GET_REPOS",
        payload: resp.data,
      });
    });
  };
}

//createStore() from Redux acept Reducer() (or profile()) as a parameter
export default createStore(profile, compose(applyMiddleware(thunk), composeWithDevTools())
);
