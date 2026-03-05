import classNames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
// import { changeActiveIndex } from '../../store/modules/takeaway'
import './index.scss'

const Menu = () => {
  const foodsList = useSelector(state => state.foods.foodsList)
  const menus = foodsList.map(item => ({tag:item.tag, name:item.name}))

  return (
    <nav className="list-menu">
      {/* 添加active类名会变成激活状态 */}
      {menus.map((item, index) => {
        return (
          <div
            // 提交action切换激活index
            
            key={item.tag}
            className={classNames(
              'list-menu-item',
              'active'
            )}
          >
            {item.name}
          </div>
        )
      })}
    </nav>
  )
}

export default Menu
