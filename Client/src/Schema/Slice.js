import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    isLoggedIn: false,
    // user: null,
}

export const strictLoginUsers = createSlice({
    name:'loggedUsers',
    initialState,
    reducers:{
        userLoggedIn: (state) =>{
            state.isLoggedIn = true
            // state.user = action.payload
        },
        userLoggedOut: (state) => {
            state.isLoggedIn = false;
        }
    }
})

export const { userLoggedIn, userLoggedOut }= strictLoginUsers.actions

export default strictLoginUsers.reducer