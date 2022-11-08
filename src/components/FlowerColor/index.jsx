import React from 'react';

import styles from './FlowerColor.module.scss';

const FlowerColor = ({ color }) => {
   return (
      <span className={styles.flowerColor}>{color}</span>
   );
};

export default FlowerColor;