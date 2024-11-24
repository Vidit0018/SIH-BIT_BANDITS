import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    hallAndAudiDetails : localStorage.getItem("hallAndAudiDetails") ? JSON.parse(localStorage.getItem("hallAndAudiDetails")) : null,
    loading : false
}

const hallAndAudiDetailsSlice = createSlice({
    name:"hallAndAudiDetails",
    initialState,
    reducers: {
        setHallAndAudiDetails : (state,value) => {
            state.user = value.payload;
        },
        setLoading : (state,value) => {
            state.loading = value.payload;
        }
    }
})

export const {setHallAndAudiDetails, setLoading} = hallAndAudiDetailsSlice.actions;
export default hallAndAudiDetailsSlice.reducer;