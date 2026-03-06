import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

const foodsStore = createSlice({
  name: 'foods',
  initialState: {
    foodsList:[],
    activeIdex: 0
  },
  reducers: {
    setFoodsList(state, action) {
      state.foodsList = action.payload
    },
    changeActiveIndex(state, action){
      state.activeIdex = action.payload
    }
  }
})

export const {setFoodsList, changeActiveIndex} = foodsStore.actions

const fetchFoodsList = ()=>{
  return async (dispatch) => {
    const res = await axios.get('http://localhost:3004/takeaway')
    dispatch(setFoodsList(res.data))
  }
}

export {fetchFoodsList}

export default foodsStore.reducer
