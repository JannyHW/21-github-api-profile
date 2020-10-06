import React from "react";
import { useSelector, Provider } from "react-redux";
import store from "./store";
import Profile from "./components/Profile";
import "./App.css";

//To provide Redux store (index.js) to React application (app.js), <Provider> is needed by wraping
// and give a attribute of"store" for the app to know about the store
export default function SimpleStoreDispatch() {
  return (
    <Provider store={store}>
      <Profile />
    </Provider>
  );
}
