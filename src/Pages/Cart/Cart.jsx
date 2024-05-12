import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCartThunk } from '../../redux/cart/operations';
import { selectCart } from '../../redux/cart/slice';
import EmptyCart from './EmptyCart';
import s from './Cart.module.css';
import ProductCart from './ProductCart';

const Cart = () => {
  const cartItems = useSelector(selectCart);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCartThunk());
  }, [dispatch]);

  if (!cartItems.length) return <EmptyCart />;
  return (
    <div className={s.container}>
      <ul>
        {cartItems.map((item) => (
          <ProductCart key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default Cart;
