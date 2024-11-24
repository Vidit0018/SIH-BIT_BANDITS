import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    classroomDetails : localStorage.getItem("classroomDetails") ? JSON.parse(localStorage.getItem("classroomDetails")) : null,
    loading : false
}

const classroomDetailsSlice = createSlice({
    name:"classroomDetails",
    initialState,
    reducers: {
        setClassroomDetails : (state,value) => {
            state.user = value.payload;
        },
        setLoading : (state,value) => {
            state.loading = value.payload;
        }
    }
})

export const {setClassroomDetails, setLoading} = classroomDetailsSlice.actions;
export default classroomDetailsSlice.reducer;