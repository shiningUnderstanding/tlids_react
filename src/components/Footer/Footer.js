import React from "react";
import leaf from "./img/footer-leaf.png";
import logoWhite from "./img/logo-white.svg";
import youtube from "./img/youtube.svg";
import insta from "./img/instagram.svg";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <img className="footer__leaf" src={leaf} alt="leaf" />
      <div className="footer__info">
        <div className="footer__logo">
          <img src={logoWhite} alt="logo-white" />
          <h3>티 리 드</h3>
        </div>
        <div className="footer__info-detail">
          <div className="business-number">
            <span className="info__category">사업자등록번호 </span>{" "}
            220-66-000288
          </div>
          <div className="footer__address">
            <span className="info__category">주소 </span> 수원시 팔달구 행궁로
            98 203호
          </div>
          <div className="footer__contact">
            <span className="info__category">contact </span> 000-000-0000 /
            t-lid@daum.net
            <div className="footer__link">
              <a
                href="https://youtube.com/channel/UCF_ADUp8BIvjHF45Zch73JQ"
                target="blank"
              >
                <img src={youtube} alt="youtube" />
              </a>
              <a
                href="https://www.instagram.com/t_lids.information/"
                target="blank"
              >
                <img src={insta} alt="instagram" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">Copyright ⓒ T-lids. All rights reserved.</div>
    </footer>
  );
}

export default Footer;
