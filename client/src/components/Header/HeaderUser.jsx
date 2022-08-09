import React, { useState } from "react";
import styles from "./Header.module.css";
import LogIn from "../LogIn/LogIn";
function HeaderUser(props) {
    const [option, setOption] =useState(false)
    function Options(){
        setOption(!option)
    }
  return (
    <header className={styles.header}>
      <img src={window.location.origin + "/logo.png"}></img>
      <a href="/">
        <h1>DONGREVIEW</h1>
      </a>
      <input placeholder="Tìm kiếm"></input>
      <i className="ti-search"></i>
      <div
        className={styles.login}
        onClick={() => {Options()}}
      >
      {option ? (<li className={styles.subnav1}>
          <ul className={styles.subnav1}>
            <li>
              <a href="#">Trang cá nhân</a>
            </li>
            <li>
              <a href="#" onClick={()=>props.unauthorize()}>Đăng xuất</a>
            </li>
          </ul>
        </li> )
        : ("")}
        <i className="ti-github"></i>
        <p className={styles.login}>{props.us}</p>
      </div>

      <p className={styles.line}>none</p>
      <ul className={styles.nav}>
        <li style={{ fontSize: "1.8rem", color: "#f5813e" }}>PHIM ĐỀ XUẤT</li>
        <li>
          <a href="/">Phim mới</a>
        </li>
        <li>
          <a href="/">Thể loại</a>
          <ul className={styles.subnav}>
            <li>
              <a href="#">Kinh dị</a>
            </li>
            <li>
              <a href="#">Hành động</a>
            </li>
            <li>
              <a href="#">Viễn tưởng</a>
            </li>
            <li>
              <a href="#">Hoạt hình</a>
            </li>
            <li>
              <a href="#">Hài hước</a>
            </li>
            <li>
              <a href="#">Tình cảm</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="/">Quốc gia</a>
          <ul className={styles.subnav}>
            <li>
              <a href="#">Mỹ</a>
            </li>
            <li>
              <a href="#">Nhật Bản</a>
            </li>
            <li>
              <a href="#">Việt Nam</a>
            </li>
            <li>
              <a href="#">Hàn Quốc</a>
            </li>
            <li>
              <a href="#">Nga</a>
            </li>
            <li>
              <a href="#">Trung Quốc</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="/">Phim lẻ</a>
        </li>
        <li>
          <a href="/">Phim bộ</a>
        </li>
        <li>
          <a href="/">Phim chiếu rạp</a>
        </li>
      </ul>
    </header>
  );
}

export default HeaderUser;
