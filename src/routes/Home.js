import React from "react";
import mainBg from "../img/main/main-bg.jpg";
import BusinessContents from "../img/main/business-contents.jpg";
import businessProduct from "../img/main/business-product.jpg";
import arrow from "../img/main/business-arrow.jpg";
import youth from "../img/main/youth.jpg";
import youthBg from "../img/main/youth-bg.jpg";
import together from "../img/main/together.jpg";
import "./Home.css";
import "./Style.css";
function Main() {
  return (
    <div>
      <header
        style={{
          background: ` center center/ 100%,url(${mainBg})center center / cover`,
          width: "100%",
          height: "86vh",
        }}
        className="header-main"
      >
        <h1 className="main__title">
          우리의 작은 노력이
          <br />
          지구의 미래를 바꿉니다.
        </h1>
      </header>

      <main className="main">
        <div className="businesses">
          <a className="business" href="contents.html">
            <img
              className="business__img"
              src={BusinessContents}
              alt="business-contents"
            />
            <div className="business__info">
              <div className="business__info-show">
                <div className="business__title">
                  <h3>Business</h3>
                  <h2>CONTENTS</h2>
                </div>
                <img src={arrow} alt="arrow" />
              </div>
              <div className="business__info-hidden">
                <span>환경 영상</span>
                <span>환경 카드뉴스</span>
              </div>
            </div>
          </a>
          <a className="business" href="product.html">
            <img
              className="business__img"
              src={businessProduct}
              alt="business-product"
            />
            <div className="business__info">
              <div className="business__info-show">
                <div className="business__title">
                  <h3>Business</h3>
                  <h2>PRODUCT</h2>
                </div>
                <img src={arrow} alt="arrow" />
              </div>
              <div className="business__info-hidden">
                <span>친환경 제품</span>
                <span>더 편리하게</span>
              </div>
            </div>
          </a>
        </div>

        <div
          className="youth"
          style={{
            background: `url(${youthBg})`,
          }}
        >
          <div className="youth__title">
            <h3>환경문제를 해결하기 위해</h3>
            <h2>
              <span className="highlight-main">청년</span>들이 모였습니다
            </h2>
          </div>
          <img className="youth__img" src={youth} alt="youth" />
        </div>

        <div className="together">
          <div className="together__title">
            <h3>더 나은 환경을 위한 한 걸음</h3>
            <h2>
              <span className="highlight-main">티리드</span>와 함께해요
            </h2>
          </div>
          <img className="together__img" src={together} alt="together" />
        </div>
      </main>
    </div>
  );
}

export default Main;
