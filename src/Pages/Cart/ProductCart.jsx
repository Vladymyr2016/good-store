import s from './ProductCart.module.css';

const ProductCart = ({ id, title, price, thumbnail, count }) => {
  return (
    <li className={s.item}>
      <div className={s.box}>
        <img className={s.image} src={thumbnail} aria-live={title} />
        <p className={s.title}>{title}</p>
        <div className={s.boxbtn}>
          <button>-</button>
          <p>{count}</p>
          <button>+</button>
        </div>
        <p>{price}$</p>
        <button>Remove</button>
      </div>
    </li>
  );
};

export default ProductCart;
