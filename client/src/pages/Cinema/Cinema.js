import React from "react";
import { Card, Col, Row, Input } from "antd";
import styles from "./styles/cinema.module.css";
import "antd/dist/antd.css";
import { Menu, Dropdown, Divider } from "antd";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { DownOutlined } from "@ant-design/icons";

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

function Cinema({ category, children, isCinemaximumRow, isColumn }) {
  const data = useSelector((state) => state.allCinema.cinemaList);
  console.log(data)
  
  const FilteredData = data.filter((cin) => cin[category]);
  const FilteredCinema = FilteredData ? FilteredData[0] : [];
  let movieKeys;

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      /* eslint-disable no-param-reassign */
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  if (FilteredCinema) {
    const cinemaArray = Object.keys(FilteredCinema[category]);
    movieKeys = shuffleArray(cinemaArray);
  }

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
            style={{ color: "black" }}
          >
            Şehir Seç <DownOutlined />
          </a>
        </Dropdown>
        <Divider dashed />
      </div>

      <div className={styles.container1}>
        <Row gutter={[32, 32]}>
          {movieKeys
            ? movieKeys.map((key) => {
                const cinema = FilteredCinema[category][key];
                console.log(cinema)
                return (
                  <Col span={10} style={{ width: 400, height: 150 }}>
                    <Card  key={cinema.id} title={cinema.name} className={styles.card}>
                      <h5>{cinema.name}</h5>
                      <h5>{cinema.address} </h5>
                    </Card>
                  </Col>
                );
              })
            : null}
        </Row>
      </div>
    </div>
  );
}

Cinema.defaultProps = {
  category: "Cinema",
  children: "Cinema",
  isCinemaximumRow: true,
  isColumn: false,
};

Cinema.propTypes = {
  category: PropTypes.string,
  children: PropTypes.string,
  isCinemaximumRow: PropTypes.bool,
  isColumn: PropTypes.bool,
};

export default Cinema;
