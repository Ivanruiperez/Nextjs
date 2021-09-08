import React from 'react';
import styles from './styles.module.css';

const SellOptionsMobile = ({ sellOptions, sellImg }) => (
  <ul className={styles.sell_options_box}>
    {sellOptions.map((option) => (
      <li className={styles.sell_options_step} key={option.title}>
        <div className={styles.sell_options_step_box}>
          <div className={styles.sell_options_step_number_box}>
            <span className={styles.sell_options_step_number}>
              {option.number}
            </span>
          </div>
          <div className={styles.sell_options_step_description}>
            <span className={styles.sell_options_step_title}>
              {option.title}
            </span>
            <span className={styles.sell_options_step_text}>
              {option.text}
            </span>
          </div>
        </div>
        <div className={styles.sell_options_image}>
          <img src={sellImg} alt={sellImg} />
        </div>
      </li>

    ))}

  </ul>
);
export default SellOptionsMobile;
