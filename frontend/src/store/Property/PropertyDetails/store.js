import {configureStore} from "@reduxjs/toolkit";
import propertySlice from "../property-slice.js";
import propertyDetailsSlice from "./propertyDetails-slice.js";
import userSlice from "../../User/user-slice.js";

const store = configureStore({
  reducer:{
    properties: propertySlice,
    propertydetails: propertyDetailsSlice.reducer,
    user: userSlice.reducer
  },
});

export default store;