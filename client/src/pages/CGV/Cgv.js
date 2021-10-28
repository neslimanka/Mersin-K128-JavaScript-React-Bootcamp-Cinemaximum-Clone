import React, { Component } from "react";
import styles from "./styles/cgv.module.css";
import { Divider } from "antd";
import "antd/dist/antd.css";
import Row from '../../components/row/Row'
import Cinema from '../Cinema/Cinema'

export default class Cgv extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.container1} />

        <p className={styles.text} style={{fontSize:"3em",fontStyle:"revert"}}>CGV Arthouse</p>
        <Divider />
        <p className={styles.text} style={{fontSize:"1.2em",fontStyle:"revert"}}>
          CGV Arthouse, sinemayi mutluluk olarak gören insanların projesidir.
          CGV Arthouse salonları, Mars Cinema Group’un heyecan ve mutluluk dolu,
          hiç anlatılmamış özel hikayeleri, seyirciyle buluşturduğu yerdir.<br/><br/>CGV
          Arthouse salonlarımızda, sinemadan, edebiyattan ve sanattan hoşlanan;
          hayattan ilham alan insanları bir araya getirmeyi ve onlarla diğer
          sinema salonlarında göremeyecekleri filmleri, Türkiye’nin en iyi
          sinema salonlarında izletme heyecanımızı paylaşmak istiyoruz.<br/><br/>
          Misafirlerimize tüm gün ve seanslarda 16,00 TL bilet fiyatı ile, hem
          ulusal hem de uluslar arası festivallerde boy göstermiş, ödüller
          toplamış, kendinden söz ettirmiş filmlerden oluşan çok özel bir yayın
          akışı sunuyoruz. Yakın bir gelecekte ise daha çok şehir ve daha çok
          sinemada olmayı hedefliyoruz.<br/><br/> CGV Arthouse salonlarında
          misafirlerimizle, yazar, yönetmen ve oyuncuları bir araya getirerek;
          sohbet ve söyleşiler düzenliyoruz.<br/><br/> Vizyon takvimi yalnızca bağımsız
          filmlere ve sanat filmlerine ayrılmış, sinemanın en sanat halini
          keşfetmek için CGV Arthouse salonlarımıza gelin ve bu muhteşem sanat
          deneyimini siz de yaşayın.
        </p>
        <Divider dashed />
        
        <Row/>
        <Divider dashed />
        
      </div>
    );
  }
}
