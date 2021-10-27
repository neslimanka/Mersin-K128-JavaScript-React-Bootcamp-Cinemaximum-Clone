import React, { Component,useState } from "react";
import styles from "./styles/goldclass.module.css";
import { Col, Divider, Row } from "antd";
import "antd/dist/antd.css";
import Form from '../Form/Form'


  

export default class GoldClass extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.container1}></div>
        <div className={styles.text}>
          <span style={{ fontSize: "1.5em" }}>
            Konforda sınırı bir üst seviyeye taşıyan rahat ve ferah Gold Class
            salonlarımızda dilediğiniz etkinliği yapabilirsiniz.
          </span>
          <Divider dashed />
          <span style={{ fontSize: "1em" }}>
            Geniş ve yatabilen koltuklarıyla bambaşka bir konfor sunan Gold
            Class salonlarımız film keyfinin en rahat hali için sizleri
            bekliyor. Kendine ait ayrı bir fuaye alanı olan Gold Class
            salonlarımızdaki rahat ve konforlu koltuklarımızda dileyen
            misafirlerimiz için telefon şarj ünitesi* bulunmakta! * Şarj ünitesi
            ve ayrı fuaye alanı tüm Gold Class salonlarımızda mevcut değildir.
          </span>
          <br />
          <br />
          <br />
          <span style={{ fontSize: "2em" }}>HEMEN REZERVASYON YAP</span>
        </div>
        <br/>
        <div>
            <Row>
                <Col style={{width:"42em"}}>
                  <Form/>
                </Col>
            </Row>

        </div>
      </div>
    );
  }
}
