import React from 'react';
import { useSelector } from 'react-redux';

import FlowerBuy from '../../components/FlowerBuy';
import FlowerCover from '../../components/FlowerCover';
import FlowerColor from '../../components/FlowerColor';

import styles from './FlowerPage.module.scss';

const FlowerPage = () => {

   const flower = useSelector((state) => state.flower.currentFlower);

   if (!flower) return null;

   return (
      <div className={styles.flowerPage}>
         <h1 className={styles.title}>{flower.title}</h1>
         <div className={styles.content}>
            <div className={styles.left}>
               <FlowerCover image={flower.image} />
            </div>
            <div className={styles.right}>
               <p>{flower.description}</p>
               <p className={styles.secondaryText}>Палитра букета:</p>
               <div className={styles.colors}>
                  {flower.colors.map((color) => <FlowerColor color={color} key={color} />)}
               </div>
               <div className={styles.buyflower}>
                  <FlowerBuy flower={flower} />
               </div>
            </div>
         </div>
      </div>
   );
};

export default FlowerPage;