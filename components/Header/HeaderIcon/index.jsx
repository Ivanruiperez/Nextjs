import React from 'react';
import styles from './styles.module.css';

const HeaderIcon = ({ phoneNumber, contactIcons }) => (
  <div className={styles.header_section}>
    <div className={styles.header_icon}>
      <img
        src={contactIcons.phone}
        alt={contactIcons.phone}
      />

    </div>
    <div className={styles.header_phone_number}>{phoneNumber}</div>
    <div className={styles.header_icon}>
      <img
        src={contactIcons.whatsapp}
        alt={contactIcons.whatsapp}
      />

    </div>
    <div className={styles.header_icon}>
      <img
        src={contactIcons.mail}
        alt={contactIcons.mail}
      />

    </div>
  </div>
);

export default HeaderIcon;
