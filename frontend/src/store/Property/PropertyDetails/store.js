import {configureStore} from "@reduxjs/toolkit";
import propertySlice from "../property-slice.js";
import propertyDetailsSlice from "./propertyDetails-slice.js";
import userSlice from "../../User/user-slice.js";
import bookingSlice from "../../Booking/booking-slice.js";
import accomodationSlice from "../../Accomodation/Accomodation-slice";
import paymentSlice from "../../Payment/payment-slice";

const store = configureStore({
  reducer:{
    properties: propertySlice,
    propertydetails: propertyDetailsSlice.reducer,
    user: userSlice.reducer,
    booking: bookingSlice.reducer,
    accomodation: accomodationSlice.reducer,
    payment: paymentSlice.reducer
  }
});

export default store;