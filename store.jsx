import { configureStore } from '@reduxjs/toolkit'
import employReducer from './src/useEmployeesSlice'

export default configureStore({
    reducer:{
        employ:employReducer 
    }
})