import React from "react";
import ContentsBg from "../img/contents/contents_header.jpg";
import ArrowDown from "../img/contents/arrow_down.png";
import TmiChar from "../img/contents/tmi-char.jpg";
import TmiInfo from "../img/contents/char-info.png";
import SnsBg from "../img/contents/sns-bg.png";
import SnsIntro from "../img/contents/sns-intro.png";
import YoutubeIntro from "../img/contents/youtube-intro.png";
import YoutubeProfile from "../img/contents/youtube-profile.jpg";
import YoutubeBtn from "../img/contents/youtube-btn.svg";
import YoutubeSub from "../img/contents/youtube-subscribe.png";
import InstaIntro from "../img/contents/insta-intro.png";
import InstaProfile from "../img/contents/insta-profile.png";
import InstaBtn from "../img/contents/insta-btn.svg";
import InstaCheck from "../img/contents/insta-check.png";
import InstaLinkA from "../img/contents/instagram-link1.png";
import InstaLinkB from "../img/contents/instagram-link2.png";
import InstaLinkC from "../img/contents/instagram-link3.png";
import InstaLinkD from "../img/contents/instagram-link4.png";
import InstaLinkE from "../img/contents/instagram-link5.png";
import InstaLinkF from "../img/contents/instagram-link6.png";
import SnsEnd from "../img/contents/sns-end.png";
import "./Contents.css";
import "./Style.css";
function Contents() {
  return (
    <div>
      <header
        style={{
          background: ` center center/ 100%,url(${ContentsBg})center center / cover`,
        }}
        className="header-contents"
      >
        <h2 className="header__title">CONTENTS</h2>
        <div className="header__text">
          우리 인식의 작은 변화가
          <br />큰 변화를 만듭니다
        </div>
      </header>

      <main id="contents">
        <div
          className="character"
          style={{
            background: ` center center/ 100%,url(${TmiChar})center center / cover`,
          }}
        >
          <div className="title">
            <div className="title__line"></div>
            <h2>OUR CHARACTER</h2>
            <div className="title__line"></div>
          </div>
          <a href="#contents">
            <img src={ArrowDown} alt="arrow-down" />
          </a>
          <div className="character__video">
            <iframe
              title="tmi-intro"
              width="988"
              height="556"
              src="https://www.youtube.com/embed/Qg_ty4nE7hQ"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <img src={TmiInfo} alt="char-info" />
          </div>
        </div>

        <div
          className="sns__container"
          style={{
            background: ` center center/ 100%,url(${SnsBg})center center / cover`,
          }}
        >
          <img src={SnsIntro} alt="sns-intro" />
          <div className="sns">
            <div className="youtube">
              <div className="youtube-intro">
                <img src={YoutubeIntro} alt="youtube-intro" />
              </div>
              <a
                className="youtube__profile"
                href="https://youtube.com/channel/UCF_ADUp8BIvjHF45Zch73JQ"
                target="blank"
              >
                <img src={YoutubeProfile} alt="youtube-profile" />
                <h3>티미의 TMI</h3>
                <div className="youtube__btn">
                  <img src={YoutubeBtn} alt="youtube-btn" />
                </div>
              </a>
              <div className="youtube__video">
                <iframe
                  title="youtube-video"
                  width="988"
                  height="556"
                  src="https://www.youtube.com/embed/Qg_ty4nE7hQ"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <div className="youtube__text">
                  <h3>환경문제, 어떻게 찾아보시나요?</h3>
                  <p>
                    유튜브에서 환경문제를 쉽고, 재미있고, 정확하게! <br />
                    그리고 더 많은 사람에게 알리기 위한 우리의 마음을
                    담았습니다.
                  </p>
                  <p>
                    티미의 Too Much 환경 Information
                    <br />
                    지금 시작합니다!
                  </p>
                  <div className="youtube-subscribe">
                    <img src={YoutubeSub} alt="youtube-subscribe" />
                  </div>
                </div>
              </div>
            </div>

            <div className="insta">
              <div className="insta-intro">
                <img src={InstaIntro} alt="insta-intro" />
              </div>
              <a
                className="insta__profile"
                href="https://www.instagram.com/t_lids.information/"
                target="blank"
              >
                <img
                  className="insta__profile-img"
                  src={InstaProfile}
                  alt="insta-profile"
                />
                <div className="insta__link">
                  <div className="insta__ID">
                    <h3>t_lids.information</h3>
                    <div className="insta__btn">
                      <img src={InstaBtn} alt="insta-btn" />
                    </div>
                  </div>
                  <h3>티리드</h3>
                  <p>
                    재미없는 환경문제, 어떻게 해야 사람들이 많이 볼 수 있을까?
                    <br />
                    따분한 환경문제! 티미 리포터가 카드뉴스로 정확하고 재미있게
                    알려드릴게요.
                  </p>
                  <p>#친환경기업 #티리드 #Tlids</p>
                </div>
                <img
                  className="insta__check"
                  src={InstaCheck}
                  alt="insta-check"
                />
              </a>
              <div className="insta__imges">
                <a
                  href="https://www.instagram.com/p/CI7hMjLp12Q/"
                  target="blank"
                >
                  <div className="insta__img">
                    <img src={InstaLinkA} alt="instagram-link1" />
                    <div className="insta__img-hover">@t_lids.information</div>
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/p/CIz7fSQJvP6/"
                  target="blank"
                >
                  <div className="insta__img">
                    <img src={InstaLinkB} alt="instagram-link2" />
                    <div className="insta__img-hover">@t_lids.information</div>
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/p/CIkDMFhJEOa/"
                  target="blank"
                >
                  <div className="insta__img">
                    <img src={InstaLinkC} alt="instagram-link3" />
                    <div className="insta__img-hover">@t_lids.information</div>
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/p/CIVIR6vJaHz/"
                  target="blank"
                >
                  <div className="insta__img">
                    <img src={InstaLinkD} alt="instagram-link4" />
                    <div className="insta__img-hover">@t_lids.information</div>
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/p/CHy8rCrpY-V/"
                  target="blank"
                >
                  <div className="insta__img">
                    <img src={InstaLinkE} alt="instagram-link5" />
                    <div className="insta__img-hover">@t_lids.information</div>
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/p/CHPlmfHpIWK/"
                  target="blank"
                >
                  <div className="insta__img">
                    <img src={InstaLinkF} alt="instagram-link6" />
                    <div className="insta__img-hover">@t_lids.information</div>
                  </div>
                </a>
              </div>
              <div className="sns-outtro">
                <img src={SnsEnd} alt="sns-end" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Contents;
