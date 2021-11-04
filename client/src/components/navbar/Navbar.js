import React, { Component } from "react";
import { ImSearch } from "react-icons/im";
import { NavLink } from "react-router-dom";
import { Col, Menu, Row } from "antd";
import { AlignLeftOutlined } from "@ant-design/icons";
import styles from "./styles/Navbar.module.css";

const { SubMenu } = Menu;

class Navbar extends Component {
  state = {
    current: "mail",
  };

  handleClick = (e) => {
    console.log("click ", e);
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <>
        <div className={`${styles.navbar}`}>
          <div className={styles["flex-container"]}>
            <div className={styles["flex-container-logo"]}>
              <NavLink to="/" className={styles["cinemaximum-logo"]}>
                <img
                  className={styles.logo}
                  src="https://www.cinemaximum.com.tr/Assets/Cgv/assets/images/cinemaximum_logo.svg"
                  alt="Cinemaximum Logo"
                />
              </NavLink>
           
            <div className={styles["flex-container-menu1"]}>
              <div className={styles.links}>
                <NavLink to="/" exact>

                  <Menu
                    className={styles.menu}
                    style={{ backgroundColor: "transparent" }}
                    onClick={this.handleClick}
                    selectedKeys={[current]}
                    mode="horizontal"
                  >
                    <SubMenu
                      style={{ backgroundColor: "transparent" }}
                      key="SubMenu"
                      icon={<AlignLeftOutlined />}
                      title="Menü"
                    >
                      <div className={styles.menudiv}>
                        <Row>
                          <Col className={styles.menu1}>
                            <Menu.ItemGroup>
                              <div className={styles.menubackground}>
                                <Menu.Item
                                  key="setting:1"
                                  style={{ height: "19em" }}
                                  className={styles.menubackground}
                                >
                                  {" "}
                                </Menu.Item>
                              </div>
                            </Menu.ItemGroup>
                          </Col>
                          <Col className={styles.menu1}>
                            <Menu.ItemGroup>
                              <Menu.Item key="setting:3">
                                CGV Cinema Club
                              </Menu.Item>
                              <Menu.Item key="setting:4">
                                Ayrıcalıklı Salonlar
                              </Menu.Item>
                              <Menu.Item key="setting:3">Kampanyalar</Menu.Item>
                              <Menu.Item key="setting:4">
                                Gold Class Salon Sizin
                              </Menu.Item>
                              <Menu.Item key="setting:3">
                                Özel Etkinlik Talepleri
                              </Menu.Item>
                              <Menu.Item key="setting:4">
                                İade İşlemleri 4
                              </Menu.Item>
                            </Menu.ItemGroup>
                          </Col>
                        </Row>
                      </div>
                    </SubMenu>
                  </Menu>
                </NavLink>
                </div>

              </div>
            </div>
            <div className={styles["flex-container-menu"]}>
              <div className={styles.links}>
              <NavLink
                  className={styles.link}
                  to={{ pathname: "/films/", title: "films" }}
                  exact
                  activeStyle={{ fontWeight: "bold" }}
                >
               Filmler
                </NavLink>
                <NavLink
                  className={styles.link}
                  to={{ pathname: "/cinema/", title: "cinema" }}
                  exact
                  activeStyle={{ fontWeight: "bold" }}
                >
                  Sinemalar
                </NavLink>
                <NavLink
                  className={styles.link}
                  to={{
                    pathname: "/gold-class-salon-sizin/",
                    title: "gold-class-salon-sizin",
                  }}
                  exact
                  activeStyle={{ fontWeight: "bold" }}
                >
                  <img
                    className={styles.logo2}
                    style={{ width: "12em" }}
                    src="https://www.cinemaximum.com.tr/Assets/Web/build/assets/images/gold_class_salon_sizin-black-logo.png"
                    alt="Cinemaximum Logo"
                  />
                </NavLink>
                <NavLink
                  className={styles.link}
                  to={{ pathname: "/cgv-arthouse/", title: "cgv-arthouse" }}
                  exact
                  activeStyle={{ fontWeight: "bold" }}
                >
                  <img
                    className={styles.logo1}
                    style={{ width: "4em" }}
                    src="https://www.cinemaximum.com.tr/Assets/Web/build/assets/images/arthouse-icon.png"
                    alt="Cinemaximum Logo"
                  />
                </NavLink>

                <ImSearch
                  className={`${styles.icons} ${styles["search-icon"]}`}
                />
              </div>
            </div>
            <div className={styles["login-container"]}>
              <div className={styles.links}>
                <NavLink
                  className={styles.link1}
                  to={{ pathname: "/uye-ol/", title: "signup" }}
                  exact
                  activeStyle={{ fontWeight: "bold" }}
                >
                  Üye Ol
                </NavLink>
                <NavLink
                  className={styles.link}
                  to={{ pathname: "/giris/", title: "login" }}
                  exact
                  activeStyle={{ fontWeight: "bold" }}
                >
                  Giriş
                </NavLink>
                <NavLink
                  className={styles.link}
                  to={{}}
                  exact
                  activeStyle={{ fontWeight: "bold" }}
                ></NavLink>
                <NavLink
                  to="/cgv-cinema-club"
                  className={styles["cinemaximum-logo"]}
                >
                  <img
                    className={styles.logo1}
                    src="https://www.cinemaximum.com.tr/Assets/Cgv/assets/images/cgv_icon.svg"
                    alt="Cinemaximum Logo"
                  />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default React.memo(Navbar);
