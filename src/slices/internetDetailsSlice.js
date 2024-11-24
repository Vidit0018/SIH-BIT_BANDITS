import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    internetDetails : localStorage.getItem("internetDetails") ? JSON.parse(localStorage.getItem("internetDetails")) : null,
    loading : false
}

const internetDetailsSlice = createSlice({
    name:"internetDetails",
    initialState,
    reducers: {
        setInternetDetails : (state,value) => {
            state.user = value.payload;
        },
        setLoading : (state,value) => {
            state.loading = value.payload;
        }
    }
})

export const {setInternetDetails, setLoading} = internetDetailsSlice.actions;
export default internetDetailsSlice.reducer;