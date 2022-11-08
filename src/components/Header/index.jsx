import React from 'react';
import { Link } from 'react-router-dom';

import CartBlock from '../CartBlock';

import styles from './Header.module.scss';

const Header = () => {
   return (
      <div className={styles.header}>
         <div className={styles.wrapper}>
            <Link to='/' className={styles.storeTitle}>
               Магазин цветов
            </Link>
         </div>
         <div className={styles.cartButton}>
            <CartBlock />
         </div>
      </div>
   );
};

export default Header;