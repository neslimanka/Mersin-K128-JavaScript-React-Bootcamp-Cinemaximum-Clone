import React from 'react';
import Row from '../../components/row/Row';
import styles from './styles/RowContainer.module.css';

const RowContainer = () => (
  <div className={styles.container} >
    <Row category="Cinemaximum" >Cinemaximum</Row>
    <Row category="Trending">Trending Now</Row>
    <Row category="Blog">Blog</Row>
    <Row category="Technologies">Technologies</Row>
    
  </div>
);

export default RowContainer;