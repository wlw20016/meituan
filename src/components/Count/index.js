import './index.scss'

const Count = ({ onPlus, onMinus, count }) => {
  return (
    <div className="goods-count">
      <span  onClick={onMinus}>-</span>
      <span className="count">{count}</span>
      <span  onClick={onPlus}>+</span>
    </div>
  )
}

export default Count
