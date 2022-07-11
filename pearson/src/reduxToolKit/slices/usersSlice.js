import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    loading: true,
    usersLists: [],
    viewList: {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
            street: 'Kulas Light',
            suite: 'Apt. 556',
            city: 'Gwenborough',
            zipcode: '92998-3874',
            geo: {
                lat: '-37.3159',
                lng: '81.1496',
            },
        },
    },
    error: '',
};
export const getUsersData = createAsyncThunk('users/getUsersData', async () => {
    try {
        const response = await axios.get(
            'https://jsonplaceholder.typicode.com/users'
        );
        return response.data;
    } catch (error) {
        return error;
    }
});

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        viewUser(state, actions) {
            state.viewList = actions.payload;
        },
    },
    extraReducers: {
        [getUsersData.pending]: (state) => {
            state.loading = true;
        },
        [getUsersData.fulfilled]: (state, actions) => {
            state.usersLists = actions.payload;
            state.loading = false;
        },
        [getUsersData.rejected]: (state, actions) => {
            state.loading = false;
            state.error = actions.payload;
        },
    },
});

export const { viewUser } = usersSlice.actions;
export default usersSlice.reducer;
