import React from "react";
import Map from "../img/contact/map.jpg";
import MapIcon from "../img/contact/map-icon.png";
import EmailIcon from "../img/contact/email-icon.png";
import PhoneIcon from "../img/contact/phone-icon.png";
import InstaICon from "../img/contact/instagram-icon.png";
import YoutubeIcone from "../img/contact/youtube-icon.png";
import "./Contact.css";

function contact() {
  return (
    <div>
      <main className="contact" id="contact">
        <div
          id="map"
          style={{ width: "1000px", maxWidth: "100%", height: "auto" }}
        >
          <img src={Map} alt="map" />
        </div>

        <div className="contact-info">
          <div className="contact-info__title">
            <h3>CONTACT</h3>
            <p>궁금한 점은 언제든 문의주세요</p>
          </div>
          <div className="contact-info__connect">
            <div className="connect">
              <img src={MapIcon} alt="map-icon" />
              <span>LOCATION</span>
              <p>수원시 팔달구 행궁로 98 203호</p>
            </div>
            <div className="connect">
              <img src={EmailIcon} alt="email-icon" />
              <span>E-MAIL</span>
              <p>t-lid@daum.net</p>
            </div>
            <div className="connect">
              <img src={PhoneIcon} alt="phone-icon" />
              <span>PHONE</span>
              <p>000-000-0000</p>
            </div>
          </div>
          <div className="contact-info__sns">
            <a
              href="https://www.instagram.com/t_lids.information/"
              target="blank"
            >
              <img src={InstaICon} alt="instagram-icon" />
            </a>
            <a
              href="https://youtube.com/channel/UCF_ADUp8BIvjHF45Zch73JQ"
              target="blank"
            >
              <img src={YoutubeIcone} alt="youtube-icon" />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default contact;
