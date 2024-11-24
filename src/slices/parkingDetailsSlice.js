import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    parkingDetails : localStorage.getItem("parkingDetails") ? JSON.parse(localStorage.getItem("parkingDetails")) : null,
    loading : false
}

const parkingDetailsSlice = createSlice({
    name:"parkingDetails",
    initialState,
    reducers: {
        setParkingDetails : (state,value) => {
            state.user = value.payload;
        },
        setLoading : (state,value) => {
            state.loading = value.payload;
        }
    }
})

export const {setParkingDetails, setLoading} = parkingDetailsSlice.actions;
export default parkingDetailsSlice.reducer;