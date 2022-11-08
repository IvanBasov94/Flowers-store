import React from 'react';

import FlowerItem from '../../components/FlowerItem';

import styles from './Home.module.scss';
import flowers from '../../assets/flowers';

const Home = () => {
   return (
      <div className={styles.homePage}>
         {flowers.map((flower) => (
            <FlowerItem flower={flower} key={flower.id} />
         ))}
      </div>
   );
};

export default Home;