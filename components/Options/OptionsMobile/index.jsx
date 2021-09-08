import React from 'react';
import styles from './styles.module.css';

const OptionsMobile = ({ optionsMobile }) => (
  <ul className={styles.section_options_box}>
    {optionsMobile.map((option) => (
      <li className={styles.options_box} key={option.img}>
        <div className={styles.options_box_icon}>
          <img src={option.img} alt={option.img} />
        </div>
        <div className={styles.options_box_describe}>
          <div className={styles.options_box_describe_title}>
            {option.title}
          </div>
          <div className={styles.options_box_describe_text}>
            {option.text}
          </div>
        </div>
      </li>
    ))}
  </ul>
);
export default OptionsMobile;
