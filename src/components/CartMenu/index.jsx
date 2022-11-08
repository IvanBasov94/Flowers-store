import React from 'react';

import CartItem from '../CartIten';
import Button from '../Button';

import styles from './CartMenu.module.scss';

const CartMenu = ({ items, onClick }) => {

   const totalPrice = items.reduce((acc, flower) => acc += flower.price, 0);

   return (
      <div className={styles.cartMenu}>
         <div className={styles.flowersList}>
            {
               (items.length > 0) ? (
                  items.map((flower) =>
                     <CartItem
                        key={flower.title}
                        price={flower.price}
                        title={flower.title}
                        id={flower.id}
                     />)
               ) : 'Корзина пуста'
            }
         </div>
         {
            (items.length > 0) ? (
               <div className={styles.arrange}>
                  <div className={styles.totalPrice}>
                     <span>Итого:</span>
                     <span>{totalPrice} руб.</span>
                  </div>
                  <Button type='primary' size='m' onClick={onClick}>
                     Оформить заказ
                  </Button>
               </div>
            ) : null
         }
      </div>
   );
};

export default CartMenu;