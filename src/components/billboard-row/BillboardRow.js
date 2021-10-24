import React from 'react';
import { GrPlayFill } from 'react-icons/gr';
import { FiInfo } from 'react-icons/fi';

import styles from './styles/BillboardRow.module.css';

const BillboardRow = () => {
  

  return (
    <div className={styles['image-container']}>

      <div>
        <img
          className={styles.image}
          src={""}
          alt="Billboard-cover"
        />
        <div className={styles.contents}>
          <h1 className={styles.description}>
            
          </h1>
          <button type="submit" className={styles.button}>
            <GrPlayFill className={styles.icons} />
            Play
          </button>
          <button type="submit" className={`${styles.button} ${styles.button2}`}>
            <FiInfo className={styles.icons} />
            More info
          </button>
        </div>
        <div className={styles.fadeBottom} />
      </div>

    </div>
  );
};

export default BillboardRow;