import s from './Cart.module.css';

const EmptyCart = () => {
  return (
    <div>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLExYUPtqr_1J8mKSr7JpcJ3wJPxrrD2SS-A&usqp=CAU"
        alt="no data"
      />
      <h1 className={s.title}>Cart is empty</h1>
    </div>
  );
};

export default EmptyCart;
