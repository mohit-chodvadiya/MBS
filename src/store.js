import { configureStore } from '@reduxjs/toolkit'
import movie from './Slice/slice'
export default configureStore({
    reducer: {
        ticket: movie,
    },
})