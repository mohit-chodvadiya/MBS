import { createSlice } from '@reduxjs/toolkit'

export const ticketSlice = createSlice({
    name: 'ticket',
    initialState: {
        cnt: [],
    },
    reducers: {
        btn: (state) => {
            state.cnt = 'Done';
        }
    },
})

// Action creators are generated for each case reducer function
export const { btn } = ticketSlice.actions

export default ticketSlice.reducer