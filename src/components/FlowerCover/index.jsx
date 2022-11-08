import React from 'react';

import styles from './FlowerCover.module.scss';

const FlowerCover = ({ image }) => {
   return (
      <div className={styles.flowerCover} style={{ backgroundImage: `url(${image})` }} />
   );
};

export default FlowerCover;