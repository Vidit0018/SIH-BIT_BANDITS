 

//  clubbed nearby locations and reachability factors 


import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    proximityDetails : localStorage.getItem("proximityDetails") ? JSON.parse(localStorage.getItem("proximityDetails")) : null,
    loading : false
}

const proximityDetailsSlice = createSlice({
    name:"proximityDetails",
    initialState,
    reducers: {
        setProximityDetails : (state,value) => {
            state.user = value.payload;
        },
        setLoading : (state,value) => {
            state.loading = value.payload;
        }
    }
})

export const {setProximityDetails, setLoading} = proximityDetailsSlice.actions;
export default proximityDetailsSlice.reducer;