import React from 'react';
import styles from './styles.module.css';

const SellOptionsDesktop = ({ sellOptions, sellImgDesktop }) => (
  <div className={styles.sell_options_box_desktop}>
    <ul className={styles.sell_options_steps_desktop}>
      {sellOptions.map((option) => (
        <li className={styles.sell_options_steps_box_desktop} key={option.number}>
          <div className={styles.sell_options_number_box}>
            <span className={styles.sell_options_number}>
              {option.number}
            </span>
          </div>
          <div className={styles.sell_options_step_description_desktop}>
            <span className={styles.sell_options_step_title_desktop}>
              {option.title}
            </span>
            <span className={styles.sell_options_step_text_desktop}>
              {option.text}
            </span>
          </div>
        </li>
      ))}
    </ul>
    <div className={styles.sell_options_img_desktop}>
      <img src={sellImgDesktop} alt={sellImgDesktop} />
    </div>
  </div>
);

export default SellOptionsDesktop;
