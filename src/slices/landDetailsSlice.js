import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    landDetails : localStorage.getItem("landDetails") ? JSON.parse(localStorage.getItem("landDetails")) : null,
    loading : false
}

const landDetailsSlice = createSlice({
    name:"landDetails",
    initialState,
    reducers: {
        setLandDetails : (state,value) => {
            state.user = value.payload;
        },
        setLoading : (state,value) => {
            state.loading = value.payload;
        }
    }
})

export const {setLandDetails, setLoading} = landDetailsSlice.actions;
export default landDetailsSlice.reducer;