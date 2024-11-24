import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    elevatorDetails : localStorage.getItem("elevatorDetails") ? JSON.parse(localStorage.getItem("elevatorDetails")) : null,
    loading : false
}

const elevatorDetailsSlice = createSlice({
    name:"elevatorDetails",
    initialState,
    reducers: {
        setElevatorDetails : (state,value) => {
            state.user = value.payload;
        },
        setLoading : (state,value) => {
            state.loading = value.payload;
        }
    }
})

export const {setElevatorDetails, setLoading} = elevatorDetailsSlice.actions;
export default elevatorDetailsSlice.reducer;