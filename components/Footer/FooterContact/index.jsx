import React from 'react';
import styles from './styles.module.css';

const FooterContact = ({
  mail, contactIcons, phoneNumber, clicasaIcon,
}) => (
  <div className={styles.footerContact_box}>
    <div className={styles.footerContact_container}>
      <span className={styles.footerContact_logo}>
        <img src={clicasaIcon} alt={clicasaIcon} />
      </span>
      <div className={styles.footerContact_icons_box}>
        <span>
          <img src={contactIcons.phone} alt={contactIcons.phone} />
          {phoneNumber}
        </span>
        <span>
          <img src={contactIcons.mail} alt={contactIcons.mail} />
          {mail}
        </span>
      </div>
    </div>
  </div>
);
export default FooterContact;
