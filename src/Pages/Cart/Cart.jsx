import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCartThunk } from '../../redux/cart/operations';
import s from './Cart.module.css';

const Cart = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCartThunk());
  }, [dispatch]);
  return <div className={s.container}>Cart</div>;
};

export default Cart;
