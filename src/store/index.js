// Importing the configureStore function from Redux Toolkit
import { configureStore } from '@reduxjs/toolkit';
// Importing the loginUser reducer
import loginUser from './loginUser';

/**
 * Redux Store Configuration
 * Combines all reducers and sets up the Redux store.
 */

export const store = configureStore({
    reducer: {
        // Registering the loginUser reducer
        loginUser : loginUser,
    },
});

export default store;
