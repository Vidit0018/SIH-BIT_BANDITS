import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    roadDetails : localStorage.getItem("roadDetails") ? JSON.parse(localStorage.getItem("roadDetails")) : null,
    loading : false
}

const roadDetailsSlice = createSlice({
    name:"roadDetails",
    initialState,
    reducers: {
        setRoadDetails : (state,value) => {
            state.user = value.payload;
        },
        setLoading : (state,value) => {
            state.loading = value.payload;
        }
    }
})

export const {setRoadDetails, setLoading} = roadDetailsSlice.actions;
export default roadDetailsSlice.reducer;