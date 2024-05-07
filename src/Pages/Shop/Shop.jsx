import { useEffect, useState } from 'react';
import { fetchProducts } from '../../services/API';
import s from './Shop.module.css';

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={s.container}>
      {products.length > 0 ? (
        products.map((item) => (
          <li className={s.item} key={item.id}>
            <img className={s.img} src={item.thumbnail} alt={item.title} />
            <h2 className={s.title}>{item.title}</h2>
            <p className={s.description}>{item.description}</p>
            <p className={s.price}>{item.price}$</p>
            <button className={s.btn}>See more</button>
            <button className={s.btn}>Add to cart</button>
          </li>
        ))
      ) : (
        <li>No products available</li>
      )}
    </div>
  );
};

export default Shop;
