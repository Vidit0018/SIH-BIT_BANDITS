import { combineReducers } from "@reduxjs/toolkit";
import authReducer from '../slices/authSlice';
import profileReducer from '../slices/profileSlice'
import buildingDetailsReducer from "../slices/buildingDetailsSlice"
import landDetailsReducer from "../slices/landDetailsSlice"
import classroomDetailsReducer from "../slices/classroomDetailsSlice"
import staffroomDetailsReducer from "../slices/staffroomDetailsSlice"
import elevatorDetailsReducer from "../slices/elevatorDetailsSlice"
import miscellaneousDetailsReducer from "../slices/miscellaneousDetailsSlice"
import internetDetailsReducer from "../slices/internetDetailsSlice"
import hostelDetailsReducer from "../slices/hostelDetailsSlice"
import labDetailsReducer from '../slices/labDetailsSlice'
import hallAndAudiDetailsReducer from '../slices/hallAndAudiDetailsSlice'
import parkingDetailsReducer from '../slices/parkingDetailsSlice'
import proximityDetailsReducer from '../slices/proximityDetailsSlice'
import roadDetailsReducer from '../slices/roadDetailsSlice'

const rootReducer = combineReducers({
    auth : authReducer,
    profile : profileReducer,
    buildingDetails : buildingDetailsReducer,
    landDetails : landDetailsReducer,
    classroomDetails : classroomDetailsReducer,
    staffroomDetails : staffroomDetailsReducer,
    elevatorDetails : elevatorDetailsReducer,
    miscellaneousDetails : miscellaneousDetailsReducer,
    internetDetails : internetDetailsReducer,
    hostelDetails : hostelDetailsReducer,
    labDetails : labDetailsReducer,
    hallAndAudiDetails : hallAndAudiDetailsReducer,
    parkingDetails : parkingDetailsReducer,
    proximityDetails : proximityDetailsReducer,
    roadDetails : roadDetailsReducer,
})

export default rootReducer