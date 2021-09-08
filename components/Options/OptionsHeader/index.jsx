import React from 'react';
import styles from './styles.module.css';

const OptionsHeader = ({ optionsHeaderTitle, lorem }) => (
  <div className={styles.section_option_description}>
    <span className={styles.section_options_title}>
      {optionsHeaderTitle.clicpiso}
    </span>
    <span className={styles.section_options_title_desktop}>
      {optionsHeaderTitle.clicasa}
    </span>
    <span className={styles.section_options_text}>
      {lorem}
    </span>
  </div>
);
export default OptionsHeader;
