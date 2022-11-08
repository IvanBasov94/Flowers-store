import React from 'react';

import styles from './CartItem.module.scss';

const CartItem = ({ title, price }) => {
   return (
      <div className={styles.cartItem}>
         <span>{title}</span>
         <div className={styles.price}>
            <span>{price} руб.</span>
         </div>
      </div>
   );
};

export default CartItem;