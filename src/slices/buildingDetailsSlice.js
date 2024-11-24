import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    buildingDetails : localStorage.getItem("buildingDetails") ? JSON.parse(localStorage.getItem("buildingDetails")) : null,
    loading : false
}

const buildingDetailsSlice = createSlice({
    name:"buildingDetails",
    initialState,
    reducers: {
        setBuildingDetails : (state,value) => {
            state.user = value.payload;
        },
        setLoading : (state,value) => {
            state.loading = value.payload;
        }
    }
})

export const {setBuildingDetails, setLoading} = buildingDetailsSlice.actions;
export default buildingDetailsSlice.reducer;