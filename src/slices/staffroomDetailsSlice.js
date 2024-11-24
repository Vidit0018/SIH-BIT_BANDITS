import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    staffroomDetails : localStorage.getItem("staffroomDetails") ? JSON.parse(localStorage.getItem("staffroomDetails")) : null,
    loading : false
}

const staffroomDetailsSlice = createSlice({
    name:"staffroomDetails",
    initialState,
    reducers: {
        setStaffroomDetails : (state,value) => {
            state.user = value.payload;
        },
        setLoading : (state,value) => {
            state.loading = value.payload;
        }
    }
})

export const {setBuildingDetails, setLoading} = staffroomDetailsSlice.actions;
export default staffroomDetailsSlice.reducer;