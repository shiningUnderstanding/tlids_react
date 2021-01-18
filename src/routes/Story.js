import React from "react";
import StoryBg from "../img/story/story.jpg";
import ArrowDown from "../img/story/arrow_down.png";
import ProblemA from "../img/story/problem-1.jpg";
import ProblemB from "../img/story/problem-2.jpg";
import ProblemC from "../img/story/problem-3.jpg";
import VisionBg from "../img/story/vision-bg.jpg";
import VisionA from "../img/story/vision-icon-1.png";
import VisionB from "../img/story/vision-icon-2.png";
import VisionC from "../img/story/vision-icon-3.png";
import Product from "../img/story/vision-product.png";
import Youtube from "../img/story/vision-youtube.png";
import Insta from "../img/story/vision-instagram.png";
import "./Story.css";
import "./Style.css";
function Story() {
  return (
    <div>
      <header
        style={{
          background: ` center center/ 100%,url(${StoryBg})center center / cover`,
        }}
        className="header-story"
      >
        <h1 className="header__title">STORY</h1>
        <div className="header__text">
          우리의 이야기를
          <br />
          들려드립니다.
        </div>
      </header>

      <main className="story" id="story">
        <div className="slogan">
          <div className="slogan__title">
            <h1>
              우리의 작은 노력이
              <br />
              지구의 미래를 바꿉니다.
            </h1>
          </div>
          <a href="#self" id="self">
            <img src={ArrowDown} alt="arrow-down" />
          </a>
        </div>

        <div className="mission" id="mission">
          <div className="title">
            <div className="title__line"></div>
            <h2>MISSION</h2>
            <div className="title__line"></div>
          </div>
          <div className="mission__text">
            갈수록 심해지는 환경오염, 이제는 우리의 문제입니다.
            <br />
            우리는 모두가 행복하게 잘 사는 세상을 만들고자 합니다.
          </div>
          <div className="problems">
            <div className="problem">
              <img className="problem__img" src={ProblemA} alt="problem-1" />
              <div className="problem__text">
                <h3>가속화 되는 환경오염</h3>
                <p>지구 평균 지표온도는 1880년~2012년 동안 0.85C 상승했다.</p>
              </div>
            </div>
            <div className="problem">
              <img className="problem__img" src={ProblemB} alt="problem-2" />
              <div className="problem__text">
                <h3>넘쳐나는 플라스틱</h3>
                <p>
                  한국에서 1년간 사용한 플라스틱으로 원룸 8,015,933개를 채울 수
                  있다.
                </p>
              </div>
            </div>
            <div className="problem">
              <img className="problem__img" src={ProblemC} alt="problem-3" />
              <div className="problem__text">
                <h3>환경문제 실천 부족</h3>
                <p>
                  국민의 71.9%가 환경에 관심이 있으나, 친환경 행동 실천은 낮은
                  수준에 그친다.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="vision"
          style={{
            background: `center center/ 100%,url(${VisionBg})center center / cover`,
          }}
        >
          <div className="title">
            <div className="title__line"></div>
            <h2>OUR VISION</h2>
            <div className="title__line"></div>
          </div>
          <div className="vision__cards">
            <div className="vision__card">
              <div className="vision__icon">
                <img src={VisionA} alt="vision-1" />
              </div>
              <h3>친환경 제품</h3>
              <p>
                친환경 제품 제작 및 서비스 연구를 원천으로 삼으며, 고객의 요구에
                귀기울여 만족할 수 있는 제품과 신뢰 높은 서비스를
                제공하겠습니다.
              </p>
            </div>
            <div className="vision__card">
              <div className="vision__icon">
                <img src={VisionB} alt="vision-2" />
              </div>
              <h3>환경 콘텐츠</h3>
              <p>
                환경이슈를 쉽고 재미있게 소개하는 콘텐츠를 제공하여 친환경적인
                문화를 만드는 선두자가 될 것입니다.
              </p>
            </div>
            <div className="vision__card">
              <div className="vision__icon">
                <img src={VisionC} alt="vision-3" />
              </div>
              <h3>소셜 벤처</h3>
              <p>
                환경문제를 함께 해결해 나아가는 선두 기업이 되고, 환경문제
                개선과 취약계층을 위해 노력하는 기업이 되겠습니다.
              </p>
            </div>
          </div>
        </div>

        <div className="project">
          <div className="title">
            <div className="title__line"></div>
            <h2>OUR PROJECT</h2>
            <div className="title__line"></div>
          </div>
          <div className="project__text">
            우리는 지구를 위해 환경오염을 줄이고
            <br />
            환경문제를 알리려 노력하고 있습니다.
          </div>
          <div className="project__columns">
            <a className="project__column" href="product.html">
              <div className="project__icon">
                <img src={Product} alt="product" />
              </div>
              <h3>PRODUCT</h3>
              <p>환경을 위한 제품 생산</p>
              <div className="project__btn">MORE +</div>
            </a>
            <a
              className="project__column"
              href="https://www.youtube.com/channel/UCF_ADUp8BIvjHF45Zch73JQ"
              target="blank"
            >
              <div className="project__icon">
                <img src={Youtube} alt="youTube" />
              </div>
              <h3>YOUTUBE</h3>
              <p>환경문제를 영상으로</p>
              <div className="project__btn">MORE +</div>
            </a>
            <a
              className="project__column"
              href="https://www.instagram.com/t_lids.information/"
              target="blank"
            >
              <div className="project__icon">
                <img src={Insta} alt="instagram" />
              </div>
              <h3>INSTARGRAM</h3>
              <p>환경문제를 카드뉴스로</p>
              <div className="project__btn">MORE +</div>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Story;
