import { useDispatch } from 'react-redux';
import s from './ProductCart.module.css';
import {
  incrementQtyThunk,
  deleteFromCartThunk,
  decrementQtyThunk,
} from '../../redux/cart/operations';

const ProductCart = ({ item }) => {
  const { id, title, price, thumbnail, count } = item;
  const dispatch = useDispatch();
  const handleDecrementQty = () => {
    if (count === 1) {
      return dispatch(deleteFromCartThunk(id));
    }
    return dispatch(decrementQtyThunk(item));
  };
  return (
    <li className={s.item}>
      <div className={s.box}>
        <img className={s.image} src={thumbnail} aria-live={title} />
        <p className={s.title}>{title}</p>
        <div className={s.boxbtn}>
          <button onClick={handleDecrementQty}>-</button>
          <p>{count}</p>
          <button onClick={() => dispatch(incrementQtyThunk(item))}>+</button>
        </div>
        <p>Total: {price * count}$</p>
        <button
          className={s.remove}
          onClick={() => dispatch(deleteFromCartThunk(id))}
        >
          Remove
        </button>
      </div>
    </li>
  );
};

export default ProductCart;
