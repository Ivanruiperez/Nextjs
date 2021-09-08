import React from 'react';
import styles from './styles.module.css';

const Business = ({ business, lorem, businessTitle }) => (
  <div className="row">
    <section className={`${styles.business_box} col-12`}>
      <span className={styles.business_title}>
        {businessTitle}
      </span>
      <span className={styles.business_text}>
        {lorem}
      </span>
      <ul className={styles.business_logo}>
        {business.map((img) => (
          <li className={styles.business_icons} key={img.logo}>
            <img src={img.logo} alt={img.logo} />
          </li>
        ))}
      </ul>
    </section>
  </div>
);

export default Business;
