import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import FlowerBuy from '../FlowerBuy';
import FlowerCover from '../FlowerCover';
import FlowerColor from '../FlowerColor';
import { setCurrentFlower } from '../../redux/flowers/reducer';

import styles from './FlowerItem.module.scss';

const FlowerItem = ({ flower }) => {

   const navigate = useNavigate();
   const dispatch = useDispatch();

   const handleClick = () => {
      dispatch(setCurrentFlower(flower));
      navigate(`/app/${flower.title}`);
   };

   return (
      <div className={styles.flowerItem} onClick={handleClick}>
         <FlowerCover image={flower.image} />
         <div className={styles.details}>
            <span className={styles.title}>{flower.title}</span>
            <div className={styles.color}>
               {flower.colors.map((color) => <FlowerColor color={color} key={color} />)}
            </div>
            <FlowerBuy flower={flower} />
         </div>
      </div>
   );
};

export default FlowerItem;