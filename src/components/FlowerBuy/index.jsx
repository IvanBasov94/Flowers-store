import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItemFromCart, setItemInCart } from '../../redux/cart/reducer';

import Button from '../Button';

import styles from './FlowerBuy.module.scss';

const FlowerBuy = ({ flower }) => {

   const dispatch = useDispatch();
   const items = useSelector(state => state.cart.itemsInCart);
   const isItemInCart = items.some(item => item.id === flower.id);

   const handleClick = (event) => {
      event.stopPropagation();
      if (isItemInCart) {
         dispatch(deleteItemFromCart(flower.id))
      } else
         dispatch(setItemInCart(flower));
   };

   return (
      <>
      <div className={styles.flowerBuy}>
         <span className={styles.price}>{flower.price} руб.</span>
      </div>
      <div className={styles.buy}>
         <Button
            type={isItemInCart ? 'secondary' : 'primary'}
            onClick={handleClick}
         >
            {isItemInCart ? 'Убрать из корзины' : 'В корзину'}
         </Button>
      </div>
      </>
   );
};

export default FlowerBuy;