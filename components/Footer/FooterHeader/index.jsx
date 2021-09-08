import React from 'react';
import styles from './styles.module.css';

const FooterHeader = ({ footerOptions, clicasaIcon }) => (
  <div className={styles.footer_header_box}>
    <div className={styles.footer_header_container}>
      <img src={clicasaIcon} alt={clicasaIcon} />
      <div className={styles.footer_header_options}>
        <ul className={styles.footer_icons_box}>
          {footerOptions.map((option) => (
            <li className={styles.footer_icons} key={option.option}>
              <p>{option.option}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default FooterHeader;
