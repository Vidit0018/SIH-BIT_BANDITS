import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    miscellaneousDetails : localStorage.getItem("miscellaneousDetails") ? JSON.parse(localStorage.getItem("miscellaneousDetails")) : null,
    loading : false
}

const miscellaneousDetailsSlice = createSlice({
    name:"miscellaneousDetails",
    initialState,
    reducers: {
        setMiscellaneousDetails : (state,value) => {
            state.user = value.payload;
        },
        setLoading : (state,value) => {
            state.loading = value.payload;
        }
    }
})

export const {setMiscellaneousDetails, setLoading} = miscellaneousDetailsSlice.actions;
export default miscellaneousDetailsSlice.reducer;