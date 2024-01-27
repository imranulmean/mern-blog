import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    notification: false,
};

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        notificationTrue: (state) => {
            state.notification =  true;
        },
        notificationFalse: (state) => {
            state.notification =  false;
        },        
    }
});

export const {notificationTrue, notificationFalse} = notificationSlice.actions;

export default notificationSlice.reducer;