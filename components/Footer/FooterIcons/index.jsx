import React from 'react';
import styles from './styles.module.css';

const FooterIcons = ({ footerIcons }) => (
  <ul className={styles.footerIcons_list}>
    {footerIcons.map((icon) => (
      <li key={icon.icon}>
        <img src={icon.icon} alt={icon.icon} />
      </li>
    ))}
  </ul>
);
export default FooterIcons;
