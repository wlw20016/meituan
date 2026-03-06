import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios'
import { act } from 'react'

const foodsStore = createSlice({
  name: 'foods',
  initialState: {
    foodsList:[],
    activeIdex: 0,
    cartList: [],
  },
  reducers: {
    setFoodsList(state, action) {
      state.foodsList = action.payload
    },
    changeActiveIndex(state, action){
      state.activeIdex = action.payload
    },
    addCart(state,action){
      if(state.cartList.find(item => item.id === action.payload.id)){
        state.cartList.find(item => item.id === action.payload.id).count++
      }else{
        state.cartList.push(action.payload)
      }
    }
  }
})

export const {setFoodsList, changeActiveIndex, addCart} = foodsStore.actions

export const fetchFoodsList = ()=>{
  return async (dispatch) => {
    const res = await axios.get('http://localhost:3004/takeaway')
    dispatch(setFoodsList(res.data))
  }
}

export default foodsStore.reducer
