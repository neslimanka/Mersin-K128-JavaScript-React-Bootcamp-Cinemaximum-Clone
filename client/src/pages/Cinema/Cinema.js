import React, { Component } from "react";
import { connect } from 'react-redux'
import { bindActionCreators} from "redux"
import { Card, Col, Row, Input } from "antd";
import styles from "./styles/cinema.module.css";
import "antd/dist/antd.css";
import { Menu, Dropdown,Divider } from "antd";
import { DownOutlined } from "@ant-design/icons";
import * as cinemaAction from "../../redux/actions/cinema-actions/cinemaAction"

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item key="1">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3" disabled>
      3rd menu item（disabled）
    </Menu.Item>
  </Menu>
);

 class Cinema extends Component {
   
  componentDidMount(){
      this.props.actions.getCinema()
  }



 



  render() {
    return (
      <div className={styles.container}>
        <div className={styles.input}>
          <div className={styles.text}>
            <h1 style={{ color: "white" }}>Sinemalar</h1>
          </div>

          <Input
            placeholder="Basic usage"
            className={styles.container}
            style={{ width: "90em", height: "3em", borderRadius: "0.3em" }}
          />
        </div>
        <div className={styles.dropdown}>
          <Dropdown overlay={menu}>
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
              style={{color:"black"}}
            >
              Şehir Seç <DownOutlined />
            </a>
          </Dropdown>
          <Divider dashed />
        </div>
        
        
        <div className={styles.container1}>
          <Row gutter={[32, 32]}  >
            {this.props.cinema.map((item) => {
              return (
                <Col span={10} style={{ width: 400,height:150 }}>
                  <Card title={item.name} className={styles.card}>
                    <h5>{item.name}</h5>
                    <h5>{item.address} </h5>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state){
  return {
      cinema:state.allCinemaReducer
  }
}

function mapDispatchToProps(dispatch){
  return{
      actions:{
          getCinema:bindActionCreators(cinemaAction.fetchCinema,dispatch),
          
      }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cinema)