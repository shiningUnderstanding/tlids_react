import React from "react";
import ProductBg from "../img/product/header-product.jpg";
import ArrowDown from "../img/product/arrow_down.png";
import Introduction from "../img//product/introduction.jpg";
import SummaryMain from "../img/product/summary.jpg";
import SummarySafe from "../img/product/summary-1.png";
import SummaryCost from "../img/product/summary-2.png";
import SummaryComfortable from "../img/product/summary-3.png";
import SummaryEco from "../img/product/summary-4.png";
import SafetyIcon from "../img/product/safety-icon.png";
import Cost from "../img/product/cost.gif";
import Comfortable from "../img/product/comfortable.jpg";
import EcoFriend from "../img/product/eco-friend.jpg";
import DriveThru from "../img/product/drive_thru.jpg";
import SpillCoffee from "../img/product/spill_coffee.jpg";
import EcoFriendly from "../img/product/eco_friendly.jpg";
import "./Product.css";
import "./Style.css";
function Product() {
  return (
    <div>
      <header
        style={{
          background: ` center center/ 100%,url(${ProductBg})center center / cover`,
        }}
        className="header-product"
      >
        <h1 className="header__title">PRODUCT</h1>
        <div className="header__text">
          환경을 위한 우리의
          <br />
          프로젝트를 소개합니다.
        </div>
      </header>

      <main className="product" id="product">
        <div className="slogan">
          <div className="slogan__title">
            티리드는 모두에게 더 좋은
            <br />
            친환경 제품을 연구하고 있습니다.
          </div>
          <a href="#introduction">
            <img src={ArrowDown} alt="arrow-down" />
          </a>
        </div>

        <div
          className="introduction"
          id="introduction"
          style={{
            background: ` center center/ 100%,url(${Introduction})center center / cover`,
          }}
        >
          <div className="explanation">
            <h2>빨대가 필요없는</h2>
            <h1>친환경 커피 뚜껑</h1>
            <p>
              커피 시장이 지속적으로 성장함에 따라, 빨대와 뚜껑 등 플라스틱이
              <br />
              많이 사용되어 환경문제가 심각해지고 있습니다. 심지어 기존 뚜껑은
              <br />
              음료가 종종 흘러넘치고, 마시기 불편하다는 문제가 있었습니다.
              <br />
              특허받은 기술로 여러분의 문제를 해결해 드리겠습니다.
            </p>
          </div>
        </div>

        <div className="why">
          <div className="title">
            <div className="title__line"></div>
            <h2>WHY TLIDS?</h2>
            <div className="title__line"></div>
          </div>
          <div className="subtitle">티리드만의 특별한 4가지</div>

          <div className="summary">
            <img
              className="summary__img-main"
              src={SummaryMain}
              alt="summary-main"
            />
            <div className="specialities-summary">
              <div className="speciality-summary">
                <img src={SummarySafe} alt="summary-safe" />
                <div className="speciality-summary__text">높아진 안전성</div>
              </div>
              <div className="speciality-summary">
                <img src={SummaryCost} alt="summary-cost" />
                <div className="speciality-summary__text">40% 비용 절감</div>
              </div>
              <div className="speciality-summary">
                <img src={SummaryComfortable} alt="summary-comfortable" />
                <div className="speciality-summary__text">편리한 음용</div>
              </div>
              <div className="speciality-summary">
                <img src={SummaryEco} alt="summary-eco" />
                <div className="speciality-summary__text">친환경 제품</div>
              </div>
            </div>
          </div>

          <div className="specialities">
            <div className="speciality">
              <div className="safety">
                <div className="safety__text">
                  <h3>
                    높아진 <span className="highlight-product">안전성</span>
                  </h3>
                  <p>
                    -기압차이와 유체역학의 원리로 놀라운 성능을 구경하세요.
                    <br />
                    -인간공학적인 설계로 이제는 새로운 방법으로 마셔보세요.
                  </p>
                </div>

                <iframe
                  title="safety-vieod"
                  className="safety__video"
                  width="549"
                  height="373"
                  src="https://www.youtube.com/embed/bL3VqUBezdw"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <div className="safety-reasons">
                  <div className="safety-reason">
                    <img src={SafetyIcon} alt="safety-icon" />
                    <span>
                      포장할 경우, 기울였을 때 음료가 쉽게 나오지 않아요.
                    </span>
                  </div>
                  <div className="safety-reason">
                    <img src={SafetyIcon} alt="safety-icon" />
                    <span>마시는 경우, 적정량의 음료가 나와요.</span>
                  </div>
                  <div className="safety-reason">
                    <img src={SafetyIcon} alt="safety-icon" />
                    <span>걷거나 뛸 때, 음료가 쉽게 밖으로 튀지 않아요.</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="speciality">
              <div className="cost">
                <div className="cost__img">
                  <img src={Cost} alt="cost" />
                </div>
                <div className="cost__text">
                  <h3>
                    40% <span className="highlight-product">비용 절감</span>
                  </h3>
                  <p>
                    티리드만의 기술력으로
                    <br />
                    기존 친환경 제품 대비 약 40% 비용 절감
                  </p>
                </div>
              </div>
            </div>
            <div className="speciality">
              <div className="comfortable">
                <div className="comfortable">
                  <div className="comfortable__text">
                    <h3>
                      <span className="highlight-product">편리</span>한 음용
                    </h3>
                    <p>
                      텀블러 형태 디자인으로,
                      <br />
                      머그컵에 마시듯 편안한 제품
                    </p>
                  </div>
                  <div className="comfortable__image">
                    <img src={Comfortable} alt="comfortable" />
                  </div>
                </div>
              </div>
            </div>
            <div className="speciality">
              <div className="eco-friend">
                <div className="eco-friend__img">
                  <img src={EcoFriend} alt="eco-friend" />
                </div>
                <div className="eco-friend__text">
                  <h3>
                    <span className="highlight-product">친환경</span> 제품
                  </h3>
                  <p>
                    인증받은 원재료를 사용하여
                    <br />
                    재활용과 퇴비화가 가능한 친환경 제품
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="for-you">
          <div className="for-you__title">
            <div className="title__line"></div>
            <h2>FOR YOU</h2>
            <div className="title__line"></div>
          </div>
          <div className="subtitle">이런 분들에게 추천합니다.</div>

          <div className="recommands">
            <div className="recommand">
              <img src={DriveThru} alt="drive-thru" />
              <div className="recommand__text">
                <h3>드라이브 스루 애용자</h3>
                <p>
                  아침마다 드라이브 스루로 커피를 구매하는데,
                  <br />
                  토퍼를 껴도 커피가 종종 새서 불편해요.
                </p>
              </div>
            </div>
            <div className="recommand">
              <img src={SpillCoffee} alt="spill-coffee" />
              <div className="recommand__text">
                <h3>커피를 자주 흘리시는 분</h3>
                <p>
                  커피를 들고 계단을 오르거나 움직이면,
                  <br />
                  쉽게 커피가 흘러넘쳐서 불편해요.
                </p>
              </div>
            </div>
            <div className="recommand">
              <img src={EcoFriendly} alt="eco-friendly" />
              <div className="recommand__text">
                <h3>환경을 생각하는 분</h3>
                <p>
                  테이크아웃을 하면 커피 뚜껑이 꼭 필요한데,
                  <br />
                  플라스틱 쓰레기가 쌓이는 걸 보면 불편해요.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Product;
