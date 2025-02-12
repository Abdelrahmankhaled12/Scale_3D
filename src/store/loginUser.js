// Importing the createSlice function from Redux Toolkit
import { createSlice } from '@reduxjs/toolkit';

/**
 * loginUser Slice
 * This slice manages the login state of the user.
 */

export const loginUser = createSlice({
    name: 'loginUser', // Name of the slice
    initialState: {
        logged: false, 
        userData: {}, 
    },
    reducers: {

        /**
         * setLogged Reducer
         * Updates the `logged` state based on the provided payload.
         * @param {Object} state - The current state of the slice.
         * @param {Object} action - The dispatched action containing the payload.
         */

        setLogged: (state, action) => {
            state.logged = action.payload;
        },
        setUserData: (state, action) => {
            state.userData = action.payload;
        },
    },
});

// Exporting the action for use in components or other parts of the app
export const { setLogged , setUserData } = loginUser.actions;

// Exporting the reducer to be included in the store
export default loginUser.reducer;
