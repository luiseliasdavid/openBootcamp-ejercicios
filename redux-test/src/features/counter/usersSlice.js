import { createSlice } from '@reduxjs/toolkit'

const initialState = null
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUsers (  email='eve.holt@reqres.in ' , password="cityslicka"){return {
        request: {
            method: 'post',
            url: 'https://reqres.in/api/login',
            data: {
                email: email,
                password: password
            }} }}
  },
})

export const { getUsers } = userSlice.actions
export default userSlice.reducer



/*

import { createSlice} from "@reduxjs/toolkit";



export const userSlice = createSlice({
    name: 'user', 
    state: null,
    
    reducers: {
        getUsers (  email='eve.holt@reqres.in ' , password="cityslicka"){return {
            request: {
                method: 'post',
                url: 'https://reqres.in/api/login',
                data: {
                    email: email,
                    password: password
                }} }},
        getUserSucces(state,action) {},
       
    }


})

export const {getUsers,getUserSucces,getUsersFailure} = userSlice.actions;

export  default userSlice.reducer

*/