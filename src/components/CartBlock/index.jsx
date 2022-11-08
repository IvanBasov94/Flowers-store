import React, { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { BsCart3 } from 'react-icons/bs';

import CartMenu from '../CartMenu';
import ItemsInCart from '../ItemsInCart';

import styles from './CartBlock.module.scss';

const CartBlock = () => {

   const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
   const items = useSelector(state => state.cart.itemsInCart);
   const totalPrice = items.reduce((acc, flower) => acc += flower.price, 0);
   const navigate = useNavigate();

   const handleClick = useCallback(() => {
      setIsCartMenuVisible(false);
      navigate('/order');
   }, [navigate]);

   return (
      <div className={styles.cartBlock}>
         <ItemsInCart quantity={items.length} />
         <BsCart3
            className={styles.icon}
            onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
         />
         {
            (totalPrice > 0) ? (
               <span className={styles.totalPrice}>{totalPrice} руб.</span>
            ) : null
         }
         {
            isCartMenuVisible &&
            <CartMenu items={items} onClick={handleClick} />
         }
      </div>
   );
};

export default CartBlock;