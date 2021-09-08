import React from 'react';
import styles from './styles.module.css';

const SellHeader = ({ easySell, lorem }) => (
  <div className={styles.sell_box}>
    <span className={styles.sell_section_title}>
      {easySell}
    </span>
    <span className={styles.sell_section_text}>
      {lorem}
    </span>
  </div>
);
export default SellHeader;
