import React from 'react';
import styles from './styles.module.css';

const FooterOptions = ({ copyright, footerIcons, footerOptions }) => (
  <div className={styles.footerOptions_box}>
    <span className={styles.footerOptions_copy}>
      {copyright}
    </span>
    <ul>
      {footerOptions.map((option) => (
        <li key={option.option}>{option.option}</li>
      ))}
    </ul>
    <ul>
      {footerIcons.map((icon) => (
        <li key={icon.icon}><img src={icon.icon} alt={icon.icon} /></li>
      ))}
    </ul>

  </div>
);
export default FooterOptions;
