import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    hostelDetails : localStorage.getItem("hostelDetails") ? JSON.parse(localStorage.getItem("hostelDetails")) : null,
    loading : false
}

const hostelDetailsSlice = createSlice({
    name:"hostelDetails",
    initialState,
    reducers: {
        setHostelDetails : (state,value) => {
            state.user = value.payload;
        },
        setLoading : (state,value) => {
            state.loading = value.payload;
        }
    }
})

export const {setHostelDetails, setLoading} = hostelDetailsSlice.actions;
export default hostelDetailsSlice.reducer;