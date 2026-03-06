import NavBar from './components/NavBar'
import Menu from './components/Menu'
import Cart from './components/Cart'
import FoodsCategory from './components/FoodsCategory'

import './App.scss'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFoodsList } from './store/modules/takeaway'
import { useEffect, useState} from 'react'


const App = () => {
  const {foodsList, activeIdex} = useSelector(state => state.foods)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchFoodsList())
  },[dispatch])
  const [searchQuery, setSearchQuery] = useState('')
  return (
    <div className="home">
      {/* 导航 */}
      <NavBar searchQuery={searchQuery} onSearch={setSearchQuery} />

      {/* 内容 */}
      <div className="content-wrap">
        <div className="content">
          <Menu />
          
          <div className="list-content">
            <div className="goods-list">
             {/* 3. 修改商品列表渲染逻辑，支持搜索过滤 */}
              {foodsList.map((item, index) => {
                // 如果没有搜索词，按原逻辑只显示当前 activeIdex 的分类
                if (!searchQuery && index !== activeIdex) return null;

                // 根据搜索词过滤当前分类下的菜品
                const filteredFoods = item.foods.filter(food => 
                  food.name.includes(searchQuery)
                );

                // 如果正在搜索，并且当前分类下没有符合条件的菜品，则不渲染该分类
                if (searchQuery && filteredFoods.length === 0) return null;

                return (
                  <FoodsCategory
                    key={item.tag}
                    name={item.name}
                    foods={filteredFoods}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* 购物车 */}
      <Cart />
    </div>
  )
}

export default App
