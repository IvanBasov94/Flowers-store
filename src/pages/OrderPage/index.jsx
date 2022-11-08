import React from 'react';
import { useSelector } from 'react-redux';

import OrderItem from '../../components/OrderItem';

import styles from './OrderPage.module.scss';

const OrderPage = () => {

   const items = useSelector(state => state.cart.itemsInCart);
   const totalPrice = items.reduce((acc, flower) => acc += flower.price, 0);

   if (items.length < 1) {
      return (<h1>Ваша корзина пуста</h1>)
   };

   return (
      <div className={styles.orderPage}>
         <div className={styles.left}>
            {items.map((flower) => <OrderItem flower={flower} />)}
         </div>
         <div className={styles.right}>
            <div className={styles.totalPrice}>
               <span>
                  {items.length} товаров на сумму {totalPrice} руб.
               </span>
            </div>
         </div>
      </div>
   );
};

export default OrderPage;