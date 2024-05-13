import { useEffect, useMemo, useState } from 'react';
import { fetchProducts } from '../../services/API';
import { addToCartThunk } from '../../redux/cart/operations';
import { useDispatch } from 'react-redux';
import s from './Shop.module.css';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const [skip, setSkip] = useState(0);

  const params = useMemo(
    () => ({
      limit: 6,
      skip,
    }),
    [skip]
  );
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProducts(params);
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, [params]);

  const pageCount = Math.round(100 / 6);

  const prevPage = () => {
    setSkip((prev) => prev - 6);
  };

  const nextPage = () => {
    setSkip((prev) => prev + 6);
  };
  const handleSelectPage = (number) => {
    setSkip(number * 6);
  };

  return (
    <div className={s.main}>
      <div>
        <button onClick={prevPage}>prev </button>
        {Array(pageCount)
          .fill('')
          .map((_, index) => (
            <button
              onClick={() => {
                handleSelectPage(index + 1);
              }}
              key={index}
            >
              {index + 1}
            </button>
          ))}
        <button onClick={nextPage}>next</button>
      </div>
      <div className={s.container}>
        {products.length > 0 ? (
          products.map((item) => (
            <li className={s.item} key={item.id}>
              <div className={s.boxImg}>
                <img className={s.img} src={item.thumbnail} alt={item.title} />
                <h2 className={s.title}>{item.title}</h2>
                <p className={s.description}>{item.description}</p>
                <p className={s.price}>{item.price}$</p>
              </div>
              <div className={s.boxBtn}>
                <button className={s.btn}>See more</button>
                <button
                  onClick={() => {
                    dispatch(addToCartThunk(item));
                  }}
                  className={s.btn}
                >
                  Add to cart
                </button>
              </div>
            </li>
          ))
        ) : (
          <li>No products available</li>
        )}
      </div>
    </div>
  );
};

export default Shop;
