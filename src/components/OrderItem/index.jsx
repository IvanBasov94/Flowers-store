import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteItemFromCart } from '../../redux/cart/reducer';

import FlowerCover from '../FlowerCover';

import styles from './OrderItem.module.scss';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const OrderItem = ({ flower }) => {

   const dispatch = useDispatch();

   const handleClick = () => {
      dispatch(deleteItemFromCart(flower.id));
   };

   return (
      <div className={styles.orderItem}>
         <div className={styles.cover}>
            <FlowerCover image={flower.image} />
         </div>
         <div className={styles.title}>
            <span>{flower.title}</span>
         </div>
         <div className={styles.price}>
            <span>{flower.price} руб.</span>
            <AiOutlineCloseCircle
               size={25}
               className={styles.deleteIcon}
               onClick={handleClick}
            />
         </div>
      </div>
   );
};

export default OrderItem;