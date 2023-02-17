import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        loggedUser: ''
    },
    reducers: {
        setUsers: (state, data) => {
            state.users = data.payload;
        },
        setLoggedUser: (state, data) => {
            state.loggedUser = data.payload;
        }
    }
})

export const { setUsers, setLoggedUser } = userSlice.actions;