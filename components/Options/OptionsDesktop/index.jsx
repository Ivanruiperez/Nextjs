import React from 'react';
import styles from './styles.module.css';

const OptionsDesktop = ({ optionsDesktop }) => (
  <ul className={styles.section_options_box_desktop}>
    {optionsDesktop.map((option) => (
      <div className={`${styles.options_box_desktop} col-3`} key={option.img}>
        <img src={option.img} alt={option.img} />
        <span className={styles.options_box_desktop_title}>
          {option.title}
        </span>
        <span className={styles.options_box_desktop_text}>
          {option.text}
        </span>
      </div>
    ))}
  </ul>
);
export default OptionsDesktop;
