import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    labDetails : localStorage.getItem("labDetails") ? JSON.parse(localStorage.getItem("labDetails")) : null,
    loading : false
}

const labDetailsSlice = createSlice({
    name:"labDetails",
    initialState,
    reducers: {
        setLabDetails : (state,value) => {
            state.user = value.payload;
        },
        setLoading : (state,value) => {
            state.loading = value.payload;
        }
    }
})

export const {setLabDetails, setLoading} = labDetailsSlice.actions;
export default labDetailsSlice.reducer;