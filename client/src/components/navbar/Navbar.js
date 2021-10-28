
import React from "react";
import { ImSearch } from "react-icons/im";
import { NavLink } from "react-router-dom";

import styles from "./styles/Navbar.module.css";

function Navbar() {
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
           
          </div>
          <div className={styles["flex-container-menu1"]}>
          <div className={styles.links}>
              <NavLink className={styles.link}  to="/" exact>
                Menü
              </NavLink>
             
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
                to={{ pathname: "/gold-class-salon-sizin/", title: "gold-class-salon-sizin" }}
                exact
                activeStyle={{ fontWeight: "bold" }}
              >
              <img className={styles.logo2}
              
              style={{width:"12em"}}
              src='https://www.cinemaximum.com.tr/Assets/Web/build/assets/images/gold_class_salon_sizin-black-logo.png'
              alt="Cinemaximum Logo"
            />
              </NavLink>
              <NavLink
                className={styles.link}
                to={{ pathname: "/cgv-arthouse/", title: "cgv-arthouse" }}
                exact
                activeStyle={{ fontWeight: "bold" }}
              >
                <img className={styles.logo1}
              
              style={{width:"4em"}}
              src='https://www.cinemaximum.com.tr/Assets/Web/build/assets/images/arthouse-icon.png'
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
                activeStyle={{ fontWeight: "bold"}}

                
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
                to={{  }}
                exact
                activeStyle={{ fontWeight: "bold" }}
              >
                
              </NavLink>
              <NavLink to="/cgv-cinema-club" className={styles["cinemaximum-logo"]}>
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


export default React.memo(Navbar);
