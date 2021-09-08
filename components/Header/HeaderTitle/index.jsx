import React from 'react';
import styles from './styles.module.css';

const HeaderTitle = ({ burguerMenuIcon, clicasaIcon }) => (
  <div className={styles.header_section}>
    <button
      className={styles.group_icon}
      type="submit"
    >
      <img src={burguerMenuIcon} alt={burguerMenuIcon} />
    </button>
    <div className={styles.logo_principal_icon}><img src={clicasaIcon} alt={clicasaIcon} /></div>
  </div>
);

export default HeaderTitle;
