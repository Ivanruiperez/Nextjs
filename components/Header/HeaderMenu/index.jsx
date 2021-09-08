import React from 'react';
import styles from './styles.module.css';

const HeaderMenu = ({ sections }) => (
  <ul className={styles.header_section_desktop}>
    {sections.map((section) => (
      <li className={styles.menu} key={section.title}>
        <a href={section.link}>{section.title}</a>
      </li>
    ))}
    <li><img src="/images/down.svg" alt="down" /></li>
  </ul>
);
export default HeaderMenu;
