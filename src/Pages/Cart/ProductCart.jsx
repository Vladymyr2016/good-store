const ProductCart = ({ id, title, price, thumbnail, count }) => {
  return (
    <li>
      <div>
        <img src={thumbnail} aria-live={title} />
        <p>{title}</p>
        <div>
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
