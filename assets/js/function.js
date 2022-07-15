@charset "utf-8";

* {
  font-family: "Noto Sans JP", sans-serif;
}
body.is-fixed {
  height: 100%;
  overflow: hidden;
}
/*削除予定*/
.dummy-h1 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ffffff;
  font-size: 40px;
}

/*-------------------------------------
共通パーツ
-------------------------------------*/
.ttl-bg-left,
.ttl-bg-right {
  display: inline-block;
  position: relative;
  z-index: 2;
  padding: 0 10px 5px;
  overflow: hidden;
  color: #ffffff;
  font-weight: 700;
  font-size: calc(70 / 1366 * 100vw);
  white-space: nowrap;
}
.ttl-bg-right {
  position: absolute;
  top: -35px;
  right: 0;
}
.ttl-bg-left::before,
.ttl-bg-right::before {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: -1;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background-color: #333333;
  content: "";
}
.entry-btn-container {
  display: flex;
  justify-content: center;
  margin: 80px auto 0;
}
.entry-btn-container > li {
  display: block;
  position: relative;
  width: 340px;
  overflow: hidden;
  border-radius: 100px;
  text-align: center;
}
.entry-btn-container > li + li {
  margin-left: 40px;
}
.entry-btn-container > li > a {
  display: block;
  color: #ffffff;
  font-weight: 700;
  font-size: 20px;
  line-height: 60px;
  transition: color 0.2s;
}
.entry-btn-container > li::before {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  border-radius: 100px;
  content: "";
}
.entry-btn-container > li:first-child {
  border: 1px solid #151515;
}
.entry-btn-container > li:last-child {
  border: 1px solid #009cba;
}
.entry-btn-container > li:first-child::before {
  background-image: linear-gradient(#151515, #151515, #151515, #151515);
}
.entry-btn-container > li:last-child::before {
  background-image: linear-gradient(#21bddb, #21bddb, #21bddb, #21bddb);
}
.entry-btn-container > li::after {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: -1;
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  border-radius: 100px;
  content: "";
  transition-duration: 0.2s;
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
}
.entry-btn-container > li:first-child::after,
.entry-btn-container > li:last-child::after {
  background-color: #ffffff;
}
.entry-btn-container > li:first-child:hover > a {
  color: #151515;
}
.entry-btn-container > li:last-child:hover > a {
  color: #21bddb;
}
.entry-btn-container > li:hover::after {
  width: 100%;
  height: 100%;
}

@media screen and (max-width: 1024px) {
  .ttl-bg-left,
  .ttl-bg-right {
    font-size: 36px;
  }
  .ttl-bg-right {
    top: -20px;
  }
  .ttl-bg-left > span {
    display: block;
  }
  .entry-btn-container {
    display: none;
  }
}
@media screen and (min-width: 1367px) {
  .ttl-bg-left,
  .ttl-bg-right {
    font-size: 70px;
  }
}

/*-------------------------------------
HEADER
-------------------------------------*/
.main-header {
  position: absolute;
  z-index: 4;
  width: 100%;
  height: 76px;
  background-color: transparent;
}
.main-header.is-fixed {
  position: fixed;
  top: 0;
  left: 0;
  background-color: #ffffff;
  animation: headerSlideIn 0.2s forwards;
}
.main-header.is-hidden {
  transform: translateY(0);
  animation: headerHidden 0.2s;
}
@keyframes headerSlideIn {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
}
@keyframes headerHidden {
  0% {
    position: fixed;
    transform: translateY(0);
  }
  100% {
    position: fixed;
    transform: translateY(-100%);
  }
}
.header-nav-pc {
  display: flex;
  align-items: center;
  padding-left: 70px;
}
.header-nav-sp {
  display: none;
}
.header-logo-link {
  width: 70px;
  height: 50px;
}
.header-logo-link > img {
  width: 100%;
}
.header-menu-list {
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
}
.header-nav-pc > .header-menu-list > li + li {
  margin-left: 60px;
}
.header-nav-pc > .header-menu-list > li > a {
  color: #ffffff;
  font-weight: 700;
  font-size: 14px;
  transition: color 0.2s;
}
.header-nav-pc > .header-menu-list > li > a:hover {
  color: #c1ab58;
}
.main-header.is-fixed > .header-nav-pc > .header-menu-list > li > a {
  color: #151515;
  transition: color 0.2s;
}
.main-header.is-fixed > .header-nav-pc > .header-menu-list > li > a:hover {
  color: #c1ab58;
}
.header-entry-list {
  display: flex;
  align-items: center;
  margin-left: 60px;
}
.header-entry-list > li {
  position: relative;
  width: 160px;
  overflow: hidden;
  line-height: 1.5;
  text-align: center;
}
.header-entry-list > li > a {
  display: block;
  height: 76px;
  padding: 20px 0;
  color: #ffffff;
  font-weight: 700;
  font-size: 13px;
  line-height: 1;
}
.header-entry-list > li > a > span {
  display: block;
  margin-top: 8px;
  font-size: 16px;
}
.header-entry-list > li::before {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  content: "";
}
.header-entry-list > li:first-child::before {
  background-image: linear-gradient(#c1ab58, #c1ab58, #c1ab58, #c1ab58);
}
.header-entry-list > li:last-child::before {
  background-image: linear-gradient(#21bddb, #21bddb, #21bddb, #21bddb);
}
.header-entry-list > li::after {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: -1;
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  border-radius: 0;
  content: "";
  transition-duration: 0.2s;
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
}
.header-entry-list > li:first-child::after {
  background-color: #b1983c;
}
.header-entry-list > li:last-child::after {
  background-color: #0ca9c7;
}
.header-entry-list > li:hover::after {
  width: 100%;
  height: 100%;
}

/*-------------------------------------
HAMBURGER MENU
-------------------------------------*/
.hamburger-menu {
  display: none;
}

@media screen and (max-width: 1024px) {
  .main-header {
    height: 60px;
  }
  .header-nav-pc {
    display: none;
  }
  .header-nav-sp {
    display: flex;
    align-items: center;
    height: 100%;
    padding-left: 16px;
  }
  .header-logo-link {
    width: 51px;
    height: 36px;
  }
  .hamburger-menu {
    display: block;
    position: absolute;
    top: 23px;
    right: 16px;
  }
  .hamburger-menu > span {
    display: block;
    transform: translate(0) rotate(0);
    width: 26px;
    height: 2px;
    background-color: #ffffff;
    transition: transform 0.2s;
  }
  .main-header.is-fixed .hamburger-menu > span {
    background-color: #151515;
  }
  .hamburger-menu > span + span {
    margin-top: 4px;
  }
  .header-nav-sp.is-active > .hamburger-menu > .hamburger-border-top {
    transform: translateY(3px) rotate(45deg);
  }
  .header-nav-sp.is-active > .hamburger-menu > .hamburger-border-middle {
    display: none;
  }
  .header-nav-sp.is-active > .hamburger-menu > .hamburger-border-bottom {
    transform: translateY(-3px) rotate(-45deg);
  }
  .header-nav-sp > .header-menu-list {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    transform: translateX(-100%);
    width: 80%;
    height: 100vh;
    padding: 104px 16px 0;
    background-color: rgba(255, 255, 255, 0.9);
    content: "";
    transition: transform 0.2s;
  }
  .header-nav-sp.is-active > .header-menu-list {
    transform: translateX(0);
  }
  .header-menu-list > li:not(:last-child) {
    height: 44px;
  }
  .header-menu-list > li + li {
    margin: 30px 0 0;
  }
  .header-menu-list > li:last-child {
    margin: 0;
  }
  .header-menu-list > li > a {
    display: inline-block;
    position: relative;
    height: 100%;
    padding-left: 3px;
    font-weight: 700;
    font-size: 36px;
  }
  .header-nav-sp.is-active > .header-menu-list > li > a {
    color: #ffffff;
  }
  .header-menu-list > li > a::before {
    position: absolute;
    top: 50%;
    left: 0;
    z-index: -1;
    transform: translateY(-50%);
    width: calc(100% + 6px);
    height: 44px;
    background-color: #151515;
    content: "";
  }
  .header-logo-list {
    display: flex;
    align-items: center;
    margin-top: 64px;
  }
  .header-nav-sp.is-active .header-logo-list {
    transform: translateX(0);
  }
  .header-logo-list > li + li {
    margin-left: 20px;
  }
  .header-logo-list > li > a {
    display: block;
    width: 100%;
  }
  .header-wantedly-logo {
    width: 24px;
    height: 17px;
  }
  .header-facebook-logo {
    width: 21px;
    height: 21px;
  }
  .hamburger-bg {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
  }
  .header-nav-sp.is-active > .hamburger-bg {
    display: block;
  }
}
.section-kv {
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #151515;
}

/*-------------------------------------
ABOUT　レイビジョン
-------------------------------------*/
.section-about {
  position: relative;
  max-width: 1226px;
  margin: 0 auto;
  padding: 62px 70px 0;
  box-sizing: content-box;
}
.head-section-about {
  position: absolute;
  top: 62px;
  left: 40px;
}
.head-section-about > img {
  width: calc(577 / 1366 * 100vw);
  max-width: 577px;
}
.vision-wrapper {
  display: flex;
  justify-content: space-between;
  position: relative;
  padding-bottom: 118px;
  font-weight: 700;
}
.vision-wrapper::before {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100vw;
  height: 100%;
  margin: 0 calc(50% - 50vw);
  background: url(/assets/images/vision-bg.jpg) no-repeat center / contain;
  content: "";
}
.vision-txt-right {
  margin-top: calc(50 / 1366 * 100vw);
  font-size: calc(18 / 1366 * 100vw);
  line-height: 2;
}
.vision-container {
  flex: 1;
  margin-top: calc(335 / 1366 * 100vw);
}
.vision-container + .vision-container {
  margin: 90px 0 0 calc(154 / 1366 * 100vw);
}
.vision-num-content {
  display: flex;
  flex-direction: row-reverse;
  font-weight: 700;
}
.vision-num-txt-main {
  opacity: 1;
  position: relative;
  margin-left: calc(16 / 1366 * 100vw);
  font-size: calc(180 / 1366 * 100vw);

  writing-mode: vertical-lr;
}
.vision-num-punctuation {
  position: absolute;
  top: 95%;
  right: 0;
  font-size: calc(120 / 1366 * 100vw);
}
.vision-num-list {
  display: flex;
  flex-direction: row-reverse;
  list-style-type: none;
}
.vision-num-list > li {
  display: flex;
  flex-direction: column;
  margin-left: calc(38 / 1366 * 100vw);
  font-size: calc(46 / 1366 * 100vw);
}
.vision-num-list > li:nth-of-type(4) {
  margin-left: 0;
}
.vision-num-list > li > span {
  font-family: "Fjalla One", "Noto Sans JP", sans-serif;
}
.vision-txt-left {
  line-height: 2;
}
.vision-txt-main {
  margin-top: calc(40 / 1366 * 100vw);
  font-size: calc(28 / 1366 * 100vw);
}
.vision-txt-sub {
  margin-top: calc(20 / 1366 * 100vw);
  font-size: calc(18 / 1366 * 100vw);
  white-space: nowrap;
}
.vision-txt-last {
  margin-top: calc(30 / 1366 * 100vw);
  font-size: calc(24 / 1366 * 100vw);
}

/*-------------------------------------
ABOUT　働き方/制度
-------------------------------------*/
.workstyle-wrapper {
  position: relative;
  padding: 290px 0 120px;
}
.workstyle-wrapper::before {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100vw;
  height: 400px;
  margin: 0 calc(50% - 50vw);
  background: url(/assets/images/workstyle-bg.jpg) no-repeat center / cover;
  content: "";
}
.workstyle-list-main {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 70px 100px 67px;
  background-color: #ffffff;
}
.workstyle-list-main > li {
  width: calc(100% / 2 - 40px);
}
.workstyle-list-main > li:nth-of-type(n + 3) {
  margin-top: 60px;
}
.workstyle-list-main > li > img {
  width: 100%;
}
.workstyle-ttl {
  margin-top: 27px;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.5;
}
.workstyle-txt {
  margin-top: 16px;
  line-height: 1.7;
}

.workstyle-list-sub {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 100px;
}
.workstyle-list-sub > li {
  position: relative;
  width: calc(100% / 5 - 15px);
  max-width: 180px;
  margin-left: 10px;
  padding-top: 90px;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.5;
  text-align: center;
}
.workstyle-list-sub > li:nth-of-type(n + 6) {
  margin-top: 36px;
}
.workstyle-list-sub > li:nth-of-type(5) {
  flex-wrap: wrap;
}
.workstyle-list-sub > li:nth-of-type(1),
.workstyle-list-sub > li:nth-of-type(6) {
  margin-left: 0;
}
.workstyle-list-sub > li::before {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 80px;
  content: "";
}
.workstyle-list-sub > li:nth-of-type(1)::before {
  background: url(/assets/images/workstyle-severance-pay.svg);
}
.workstyle-list-sub > li:nth-of-type(2)::before {
  background: url(/assets/images/workstyle-social-insurance.svg);
}
.workstyle-list-sub > li:nth-of-type(3)::before {
  background: url(/assets/images/workstyle-overtime-allowance.svg);
}
.workstyle-list-sub > li:nth-of-type(4)::before {
  background: url(/assets/images/workstyle-transportation-costs.svg);
}
.workstyle-list-sub > li:nth-of-type(5)::before {
  background: url(/assets/images/workstyle-remote-insurance.svg);
}
.workstyle-list-sub > li:nth-of-type(6)::before {
  background: url(/assets/images/workstyle-medical-examination.svg);
}
.workstyle-list-sub > li:nth-of-type(7)::before {
  background: url(/assets/images/workstyle-paid.svg);
}
.workstyle-list-sub > li:nth-of-type(8)::before {
  background: url(/assets/images/workstyle-childcare-leave.svg);
}
.workstyle-list-sub > li:nth-of-type(9)::before {
  background: url(/assets/images/workstyle-book-purchase.svg);
}
.workstyle-list-sub > li:nth-of-type(10)::before {
  background: url(/assets/images/workstyle-plain-clothes.svg);
}
.workstyle-sub-supplement {
  display: block;
  font-weight: 500;
  font-size: 12px;
}

/*-------------------------------------
ABOUT　数字で見るレイハウオリ
-------------------------------------*/
.numeral-wrapper {
  position: relative;
  padding: 130px 0;
}
.numeral-wrapper::before {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100vw;
  height: 100%;
  margin: 0 calc(50% - 50vw);
  background-color: #e0cb7d;
  content: "";
}
.numeral-list {
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
  line-height: 1;
}
.numeral-list > li {
  width: calc(100% / 4 - 8px);
  margin-left: 10px;
  padding: calc(48 / 1366 * 100vw) calc(18 / 1366 * 100vw)
    calc(32 / 1366 * 100vw);
  background-color: #ffffff;
  font-weight: 700;
  text-align: center;
}
.numeral-list > li:nth-of-type(1),
.numeral-list > li:nth-of-type(4),
.numeral-list > li:nth-of-type(7) {
  margin-left: 0;
}
.numeral-list > li:nth-of-type(n + 4) {
  margin-top: 10px;
}
.numeral-list > li:nth-of-type(1),
.numeral-list > li:nth-of-type(6),
.numeral-list > li:nth-of-type(7) {
  width: calc(100% / 2 - 5px);
}
.numeral-list > li:nth-of-type(1) {
  display: flex;
  justify-content: center;
  align-items: center;
}
.big-panel-txts {
  font-weight: 700;
}
.big-panel-ttl {
  font-size: calc(40 / 1366 * 100vw);
}
.small-panel-ttl {
  font-size: calc(30 / 1366 * 100vw);
}
.small-panel-image {
  width: calc(129 / 1366 * 100vw);
  max-width: 129px;
  margin-top: calc(40 / 1366 * 100vw);
}
.panel-numeral {
  margin-top: calc(24 / 1366 * 100vw);
  font-size: calc(30 / 1366 * 100vw);
}
.panel-numeral-founded {
  margin-top: calc(30 / 1366 * 100vw);
  font-weight: 400;
  font-size: calc(70 / 1366 * 100vw);
  font-family: "Fjalla One", "Noto Sans JP", sans-serif;
}
.panel-img-founded {
  width: calc(222 / 1366 * 100vw);
  max-width: 222px;
  margin-left: calc(12 / 1366 * 100vw);
}
.panel-img-num-employees {
  width: calc(129 / 1366 * 100vw);
  max-width: 129px;
  margin-top: calc(40 / 1366 * 100vw);
}
.panel-img-num-employees {
  width: calc(126 / 1366 * 100vw);
  max-width: 126px;
  margin-top: calc(40 / 1366 * 100vw);
}
.panel-img-paid {
  width: calc(184 / 1366 * 100vw);
  max-width: 184px;
  margin-top: calc(40 / 1366 * 100vw);
}
.panel-img-side-business {
  width: calc(126 / 1366 * 100vw);
  max-width: 126px;
  margin-top: calc(40 / 1366 * 100vw);
}
.panel-img-holiday {
  width: calc(192 / 1366 * 100vw);
  max-width: 192px;
  margin-top: calc(40 / 1366 * 100vw);
}
.panel-img-average-age {
  width: calc(518 / 1366 * 100vw);
  max-width: 518px;
}
.panel-img-workarea {
  width: calc(90 / 1366 * 100vw);
  max-width: 90px;
}
.panel-numeral > span {
  display: inline-block;
  font-weight: 400;
  font-size: calc(70 / 1366 * 100vw);
  font-family: "Fjalla One", "Noto Sans JP", sans-serif;
}
.panel-img-engineer {
  width: calc(90 / 1366 * 100vw);
  max-width: 90px;
}
.panel-img-designer {
  width: calc(80 / 1366 * 100vw);
  max-width: 80px;
}
.panel-img-sales {
  width: calc(86 / 1366 * 100vw);
  max-width: 86px;
}
.panel-img-management {
  width: calc(67 / 1366 * 100vw);
  max-width: 67px;
}
.panel-img-gender-ratio {
  width: calc(157 / 1366 * 100vw);
  max-width: 157px;
  margin-top: calc(40 / 1366 * 100vw);
}
.panel-gender-ratio-numeral {
  display: flex;
  justify-content: center;
  margin-top: calc(30 / 1366 * 100vw);
}
.panel-gender-ratio-numeral > li {
  font-size: calc(20 / 1366 * 100vw);
  white-space: nowrap;
}
.panel-gender-ratio-numeral > li + li {
  margin-left: calc(8 / 1366 * 100vw);
}
.panel-gender-ratio-numeral > li > span {
  display: inline-block;
  font-weight: 400;
  font-size: calc(60 / 1366 * 100vw);
  font-family: "Fjalla One", "Noto Sans JP", sans-serif;
}
.panel-img-average-overtime {
  width: calc(155 / 1366 * 100vw);
  max-width: 156px;
  margin-top: calc(40 / 1366 * 100vw);
}
.numeral-workarea-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: calc(30 / 1366 * 100vw);
}
.numeral-workarea-list > li {
  display: flex;
  flex: 1;
  justify-content: space-around;
  align-items: center;
  margin-left: calc(30 / 1366 * 100vw);
  padding: calc(12 / 1366 * 100vw) calc(20 / 1366 * 100vw);
  border-radius: 6px;
  background-color: #f4f4f4;
}
.numeral-workarea-list > li:nth-of-type(n + 3) {
  margin-top: calc(20 / 1366 * 100vw);
}
.numeral-workarea-list > li:nth-of-type(1),
.numeral-workarea-list > li:nth-of-type(3) {
  margin-left: 0;
}
.numeral-list > li:nth-of-type(7) {
  padding: calc(40 / 1366 * 100vw) calc(46 / 1366 * 100vw);
}
.panel-workarea-ttl {
  font-size: calc(20 / 1366 * 100vw);
}
.panel-workarea-numeral {
  font-size: calc(30 / 1366 * 100vw);
}
.panel-workarea-numeral > span {
  display: inline-block;
  margin-top: calc(14 / 1366 * 100vw);
  font-weight: 400;
  font-size: calc(56 / 1366 * 100vw);
  font-family: "Fjalla One", "Noto Sans JP", sans-serif;
}

/*-------------------------------------
DESIGNER チームについて
-------------------------------------*/
.section-designer {
  position: relative;
  max-width: 1226px;
  margin: 0 auto;
  padding: 80px 70px 0;
  box-sizing: content-box;
}
.head-seciton-designer {
  position: absolute;
  top: 80px;
  left: 40px;
}
.head-seciton-designer > img {
  width: calc(589 / 1366 * 100vw);
  max-width: 589px;
}
.designer-team-wrapper {
  position: relative;
  padding: 210px 0 120px;
}
.designer-team-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1024px;
  margin: 165px auto 0;
}
.designer-team-list > li {
  position: relative;
  width: calc((100% - 124px) / 3);
}
.designer-team-list > li + li {
  margin-left: 62px;
}
.designer-team-list > li:nth-of-type(3n + 1) {
  margin-left: 0;
}
.designer-team-list > li:nth-of-type(n + 4) {
  margin-top: 80px;
}
.header-designer-member {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  width: 117px;
  height: 70px;
}
.designer-member-content {
  margin-top: 10px;
  padding-top: 17px;

  border-top: 1px dashed #e5e5e5;
}
.designer-member-icon {
  width: 70px;
}
.header-designer-member > dd {
  padding-left: 16px;
  font-weight: 600;
  font-size: 16px;
}
.header-designer-member > dd > p + p {
  padding-top: 10px;
  font-weight: 400;
  font-size: 12px;
}
.para-preference {
  width: 64px;
  padding: 3px;
  background-color: #151515;
  color: #ffffff;
  font-size: 12px;
  text-align: center;
}
.designer-member-preferences + .designer-member-preferences {
  margin-top: 21px;
}
.designer-member-preferences-list {
  display: inline-block;
  list-style-type: none;
  margin-top: 7px;
  font-size: 0;
}
.designer-member-preferences-list > li {
  display: inline;
  font-size: 12px;
  line-height: 1.7;
}
.designer-member-preferences-list > li + li::before {
  content: "／";
}

/*-------------------------------------
DESIGNER STYLE(行動指針)
-------------------------------------*/
.designer-style-wrapper {
  max-width: 1024px;
  margin: 80px auto 0;
}
.header-designer-style {
  font-weight: 600;
  font-size: 40px;
  text-align: center;
}
.designer-style-list {
  display: flex;
  justify-content: space-between;
  align-content: flex-start;
  margin-top: 40px;
  counter-reset: counter-designer-style;
}
.designer-style-list > li {
  width: calc(100% - 94px / 3);
  padding: 20px;
  background-color: #f8f4e4;
}
.designer-style-list > li + li {
  margin-left: 47px;
}
.designer-style-number {
  position: relative;
  padding-left: 25px;
  color: #c1ab58;
  font-weight: 600;
  font-size: 12px;
}
.designer-style-number::before {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 20px;
  content: "";

  border-bottom: 2px solid #c1ab58;
}
.designer-style-icon-window {
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(220 / 1366 * 100vw);
  max-width: 220px;
  height: calc(220 / 1366 * 100vw);
  max-height: 220px;
  margin: 20px auto 0;
  border-radius: 50%;
  background-color: #ffffff;
}
.designer-style-icon {
  width: 120px;
}
.designer-style-ttl {
  margin-top: 13px;
  font-weight: 600;
  font-size: 30px;
  text-align: center;
}
.designer-style-sub-ttl {
  margin-top: 24px;
  padding: 8px 0;
  background-color: #c1ab58;
  color: #ffffff;
  font-weight: 600;
  text-align: center;
}
.designer-style-message {
  margin-top: 14px;
}
.designer-style-message > li {
  padding-left: 1em;
  line-height: 1.7;
  text-indent: -1em;
}
.designer-style-message > li::before {
  content: "・";
}

/*-------------------------------------
DESIGNER どんな仕事するのか
-------------------------------------*/
.designer-how-work-wrapper {
  margin-top: 80px;
}
.designer-how-work-ttl {
  font-weight: 600;
  font-size: 40px;
  text-align: center;
}
.designer-how-work-sub-ttl {
  font-weight: 600;
  font-size: 30px;
  text-align: center;
}
.designer-how-work-supplement {
  margin-top: 20px;
  font-size: 14px;
  line-height: 1.7;
  text-align: center;
}
.designer-how-work-container {
  margin-top: 60px;
}
.designer-how-work-examples {
  margin-top: 20px;
  counter-reset: how-work-ttl-counter;
}
.designer-how-work-definition {
  display: grid;
  position: relative;
  background-color: #f8f4e4;

  grid-template-columns: 306px minmax(500px, 716px);
}
.designer-how-work-definition:nth-child(even) {
  background-color: #f2ebcc;
}
.designer-how-work-definition::after {
  position: absolute;
  bottom: -10px;
  left: 32px;
  z-index: 2;
  transform: rotate(45deg);
  width: 32px;
  height: 32px;
  background-color: inherit;
  content: "";
}
.designer-how-work-definition:last-child::after {
  width: 0;
  height: 0;
  content: "";
}
.designer-how-work-definition > dt {
  display: flex;
  align-items: center;
  padding-left: 32px;
  counter-increment: how-work-ttl-counter;
}
.how-work-ttl-counter {
  width: 32px;
  height: 32px;
  margin-right: 16px;
  border-radius: 50%;
  background-color: #c1ab58;
  color: #ffffff;
  font-weight: 600;
  text-align: center;
  content: counter(how-work-ttl-counter, decimal-leading-zero);
}
.how-work-ttl-counter::before {
  font-size: 14px;
  line-height: 32px;
  content: counter(how-work-ttl-counter, decimal-leading-zero);
}
.designer-how-work-definition > dd {
  position: relative;
  padding: 30px;
  line-height: 1.7;
}
.designer-how-work-definition > dd::before {
  position: absolute;
  top: 10%;
  left: 0;
  height: 80%;
  content: "";

  border-left: 1px dashed #c1ab58;
}
.designer-tea-party-container {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 80px;
  padding: 40px 45px;
  border: 5px solid #f2ebcc;
}
.designer-tea-party-container > img {
  max-width: 200px;
  width: 100%;
}
.designer-tea-party-content {
  margin-left: 32px;
}
.designer-tea-party-content > dt {
  font-weight: 600;
  font-size: 30px;
}
.designer-tea-party-content > dd {
  margin-top: 18px;
  line-height: 1.7;
}

/*-------------------------------------
Designer インタビュー
-------------------------------------*/
.interviews-wrapper {
  position: relative;
  margin: 0 auto;
  padding: 120px 0;
  box-sizing: content-box;
}
.interviews-wrapper::before {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100vw;
  height: 100%;
  margin: 0 calc(50% - 50vw);
  background-color: #f8f4e4;
  content: "";
}
.interviews-container {
  margin-top: 90px;
}
.interview-thumbnail {
  position: relative;
  width: calc(100vw - 70px);
  max-width: 1296px;
  height: calc(500 / 1366 * 100vw);
  max-height: 500px;
}
.interview-thumbnail-head {
  display: flex;
  flex-direction: column;
}
.interview-thumbnail-head span {
  font-size: calc(50 / 1366 * 100vw);
}
.interview-thumbnail-head > span + span {
  margin-top: 10px;
}
.interview-thumbnail-head-01 > span:last-child {
  width: 80%;
}
.interview-thumbnail-head-02 > span:first-child {
  width: 35%;
  max-width: 165px;
}
.thumbnail-ttl-interview {
  position: absolute;
  top: calc(237 / 1366 * 100vw);
  left: calc(100 / 1366 * 100vw);
  z-index: 2;
}
.interview-thumbnail-image {
  position: absolute;
  top: 0;
  right: 0;
  width: calc(900 / 1366 * 100vw);
  max-width: 900px;
  height: calc(500 / 1366 * 100vw);
  max-height: 500px;
}
.interviewee {
  position: relative;
  z-index: 2;
  margin-top: 30px;
  font-weight: 600;
}
.interviewee-position {
  display: block;
  font-weight: 100;
}
.interviewee-name {
  display: block;
  margin-top: 10px;
  font-weight: 600;
  font-size: 20px;
}
.interview-thumbnail-leihauoli-logo {
  position: absolute;
  top: calc(75 / 1366 * 100vw);
  left: 0;
  width: calc(287 / 1366 * 100vw);
  max-width: 287px;
  height: calc(277 / 1366 * 100vw);
  max-height: 277px;
}
.interview-contents {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: flex-start;
  max-width: 1024px;
  margin: 0 auto;
  margin-top: 60px;
}

/* schedule time line */
.interview-schedule-btn {
  display: none;
}
.interview-schedule-menu {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  padding: 60px 0 32px 25px;
}
.interview-schedule-menu::before {
  position: absolute;
  top: 0;
  left: 0;
  font-weight: 600;
  font-size: 30px;
  content: "OneDay";
}
.interview-schedule-time-line {
  position: relative;
  z-index: 2;
  width: 51px;
  height: 1124px;
  margin-top: 20px;
  padding-top: 40px;
  border-left: 4px solid #151515;
}
.interview-schedule-time-line::before {
  display: block;
  position: absolute;
  top: -20px;
  left: -11px;
  width: 20px;
  height: 20px;
  border-radius: 32px;
  background-color: #151515;
  content: "";
}
.interview-schedule-time-line > li {
  width: 64px;
  height: 20px;
  margin-left: -32px;
  border-radius: 16px;
  background-color: #ffffff;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
}
.interview-schedule-time-line > li + li {
  margin-top: 104px;
}

/* インタビュー Q&A */
.interview-qa-list {
  max-width: 560px;
  margin-left: 120px;
}
.interview-schedule-container {
  width: 343px;
}
.interview-schedule-todo-list > li > .interview-schedule-todo-detail {
  line-height: 1.5;
}
.interview-schedule-todo-list {
  position: relative;
  height: 1124px;
  width: 266px;
}
.interview-schedule-todo-img {
  position: absolute;
  top: calc((100% - 59px) / 2);
  right: 0;
  width: 59px;
  height: 59px;
  padding-left: 8px;
  box-sizing: content-box;
}
.interview-counter {
  display: inline-block;
  position: relative;
  padding-left: 60px;
  color: #c1ab58;
  font-weight: 600;
  font-size: 12px;
}
.interview-counter::before {
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 52px;
  content: "";
  border-bottom: 1px solid #c1ab58;
}
.interview-question-term {
  margin-top: 50px;
  font-weight: 600;
  font-size: 20px;
  line-height: 2;
}
.interview-question {
  line-height: 2;
}
.interview-answer {
  margin-top: 11px;
  font-weight: 300;
  font-size: 16px;
  line-height: 1.7;
}
.interview-schedule-ttl {
  display: block;
  font-weight: 600;
  font-size: 13px;
}
.interview-schedule-todo-detail {
  display: block;
  width: 200px;
  padding-top: 5px;
  font-size: 12px;
}

/* schedule list */
.interview-schedule-todo-list > li {
  position: absolute;
  width: 100%;
}
.interview-schedule-todo-list > li::before {
  position: absolute;
  top: 6px;
  left: -48px;
  width: 42px;
  content: "";
  border-top: 1px solid #151515;
}
.interview-schedule-todo-list > li::after {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  width: 59px;
  height: 59px;
  background-size: contain;
  content: "";
}

/* インタビュー01 */
.interview-schedule-todo-list-01 > li:nth-child(1) {
  top: 70px;
}
.interview-schedule-todo-list-01 > li:nth-child(1)::after {
  background-image: url(/assets/images/breakfast.png);
}
.interview-schedule-todo-list-01 > li:nth-child(2) {
  top: 138px;
}
.interview-schedule-todo-list-01 > li:nth-child(3) {
  top: 164px;
}
.interview-schedule-todo-list-01 > li:nth-child(3)::after {
  background-image: url(/assets/images/working.png);
}
.interview-schedule-todo-list-01 > li:nth-child(4) {
  top: 245px;
}
.interview-schedule-todo-list-01 > li:nth-child(5) {
  top: 309px;
}
.interview-schedule-todo-list-01 > li:nth-child(5)::after {
  background-image: url(/assets/images/online-meeting.png);
}
.interview-schedule-todo-list-01 > li:nth-child(5) > .interview-schedule-ttl {
  margin-right: 67px;
}
.interview-schedule-todo-list-01 > li:nth-child(6) {
  top: 433px;
}
.interview-schedule-todo-list-01 > li:nth-child(7) {
  top: 494px;
}
.interview-schedule-todo-list-01 > li:nth-child(8) {
  top: 700px;
}
.interview-schedule-todo-list-01 > li:nth-child(9) {
  top: 734px;
}
.interview-schedule-todo-list-01 > li:nth-child(9)::after {
  background-image: url(/assets/images/kindergarten.png);
}
.interview-schedule-todo-list-01 > li:nth-child(10) {
  top: 772px;
}
.interview-schedule-todo-list-01 > li:nth-child(11) {
  top: 823px;
}
.interview-schedule-todo-list-01 > li:nth-child(11)::after {
  background-image: url(/assets/images/dentifrice.png);
}
.interview-schedule-todo-list-01 > li:nth-child(12) {
  top: 896px;
}
.interview-schedule-todo-list-01 > li:nth-child(13) {
  top: 957px;
}
.interview-schedule-todo-list-01 > li:nth-child(14) {
  top: 984px;
}
.interview-schedule-todo-list-01 > li:nth-child(14)::after {
  background-image: url(/assets/images/relaxed.png);
}
.interview-schedule-todo-list-01 > li:nth-child(15) {
  top: 1086px;
}

/* インタビュー02 */
.interview-schedule-todo-list-02 > li:nth-child(1) {
  top: 62px;
}
.interview-schedule-todo-list-02 > li:nth-child(2) {
  top: 85px;
}
.interview-schedule-todo-list-02 > li:nth-child(2)::after {
  background-image: url(/assets/images/calendar.png);
}
.interview-schedule-todo-list-02 > li:nth-child(3) {
  top: 174px;
}
.interview-schedule-todo-list-02 > li:nth-child(3)::after {
  background-image: url(/assets/images/designing.png);
}
.interview-schedule-todo-list-02 > li:nth-child(4) {
  top: 275px;
}
.interview-schedule-todo-list-02 > li:nth-child(5) {
  top: 312px;
}
.interview-schedule-todo-list-02 > li:nth-child(6) {
  top: 435px;
}
.interview-schedule-todo-list-02 > li:nth-child(7) {
  top: 458px;
}
.interview-schedule-todo-list-02 > li:nth-child(7)::after {
  background-image: url(/assets/images/take-note.png);
}
.interview-schedule-todo-list-02 > li:nth-child(8) {
  top: 526px;
}
.interview-schedule-todo-list-02 > li:nth-child(8)::after {
  background-image: url(/assets/images/online-meeting.png);
}
.interview-schedule-todo-list-02 > li:nth-child(8) > .interview-schedule-ttl {
  margin-right: 67px;
}
.interview-schedule-todo-list-02 > li:nth-child(9) {
  top: 683px;
}
.interview-schedule-todo-list-02 > li:nth-child(10) {
  top: 707px;
}
.interview-schedule-todo-list-02 > li:nth-child(11) {
  top: 746px;
}
.interview-schedule-todo-list-02 > li:nth-child(11)::after {
  background-image: url(/assets/images/live-music.png);
}
.interview-schedule-todo-list-02 > li:nth-child(12) {
  top: 931px;
}
.interview-schedule-todo-list-02 > li:nth-child(13) {
  top: 1055px;
}
.interview-schedule-todo-list-02 > li:nth-child(14) {
  top: 1083px;
}
.interview-schedule-todo-list-02 > li:nth-child(14)::after {
  background-image: url(/assets/images/relaxed.png);
}
.interview-schedule-todo-list-02 > li:nth-child(15) {
  top: 1127px;
}

@media screen and (max-width: 1024px) {
  /*-------------------------------------
  ABOUT　レイビジョン
  -------------------------------------*/
  .section-about {
    padding: 64px 16px 0;
    overflow: hidden;
  }
  .head-section-about {
    top: 38px;
    left: 0;
  }
  .head-section-about > img {
    width: 288px;
  }
  .vision-wrapper {
    flex-direction: column;
    padding-bottom: 80px;
  }
  .vision-wrapper::before {
    display: none;
  }
  .vision-container {
    margin-top: 152px;
  }
  .vision-container + .vision-container {
    margin: 64px 0 0 0;
  }
  .vision-txt-main {
    margin-top: 32px;
    font-size: 24px;
  }
  .vision-txt-sub {
    margin-top: 20px;
    font-size: 16px;
    white-space: normal;
  }
  .vision-txt-last {
    margin-top: 30px;
    font-size: 24px;
  }
  .vision-num-txt-main {
    font-size: calc(90 / 375 * 100vw);
  }
  .vision-num-punctuation {
    top: 100%;
    font-size: calc(60 / 375 * 100vw);
  }
  .vision-num-list > li {
    margin-left: calc(17 / 375 * 100vw);
    font-size: calc(23 / 375 * 100vw);
  }
  .no-break {
    display: none;
  }
  .vision-txt-right {
    margin-top: calc(40 / 375 * 100vw);
    font-size: 16px;
  }

  /*-------------------------------------
  ABOUT　働き方/制度
  -------------------------------------*/
  .workstyle-wrapper {
    padding: calc(142 / 375 * 100vw) 0 64px;
  }
  .workstyle-wrapper::before {
    height: calc(110 / 375 * 100vw);
  }
  .workstyle-list-main {
    padding: 0;
    background: none;
  }
  .workstyle-list-main > li {
    width: calc(100% / 2 - 8px);
  }
  .workstyle-list-main > li:nth-of-type(n + 3) {
    margin-top: 24px;
  }
  .workstyle-ttl {
    margin-top: 15px;
    font-size: 16px;
  }
  .workstyle-txt {
    margin-top: 7px;
    font-size: 14px;
  }
  .workstyle-list-sub {
    margin-top: 24px;
    padding: 0;
  }
  .workstyle-list-sub > li {
    width: calc(100% / 2);
    max-width: 100%;
    margin-left: 0;
    font-size: 16px;
  }
  .workstyle-list-sub > li:nth-of-type(n + 3) {
    margin-top: 24px;
  }

  /*-------------------------------------
  ABOUT　数字で見るレイハウオリ
  -------------------------------------*/
  .numeral-wrapper {
    padding: 64px 0;
  }
  .numeral-list {
    margin-top: 32px;
  }
  .numeral-list > li {
    position: relative;
    width: calc(100% / 2 - 5px);
    margin: 0;
    padding: calc(26 / 375 * 100vw) calc(10 / 375 * 100vw)
      calc(18 / 375 * 100vw);
  }
  .numeral-list > li:first-child {
    padding: calc(46 / 375 * 100vw) calc(28 / 375 * 100vw);
  }
  .numeral-list > li:nth-of-type(3),
  .numeral-list > li:nth-of-type(5),
  .numeral-list > li:nth-of-type(9) {
    margin-left: 10px;
  }
  .numeral-list > li:nth-of-type(n + 2) {
    margin-top: 10px;
  }
  .numeral-list > li:nth-of-type(1),
  .numeral-list > li:nth-of-type(6),
  .numeral-list > li:nth-of-type(7) {
    width: 100%;
  }
  .numeral-list > li:nth-of-type(7) {
    padding: calc(23 / 375 * 100vw) calc(25 / 375 * 100vw);
  }
  .big-panel-ttl {
    font-size: calc(22 / 375 * 100vw);
  }
  .panel-numeral-founded {
    margin-top: calc(16 / 375 * 100vw);
    font-size: calc(39 / 375 * 100vw);
  }
  .panel-img-founded {
    width: calc(125 / 375 * 100vw);
    max-width: 100%;
    margin-left: calc(8 / 375 * 100vw);
  }
  .panel-img-num-employees {
    width: calc(72 / 375 * 100vw);
    max-width: 100%;
    margin-top: calc(23 / 375 * 100vw);
  }
  .panel-img-side-business {
    width: calc(70 / 375 * 100vw);
    max-width: 100%;
    margin-top: calc(23 / 375 * 100vw);
  }
  .panel-img-paid {
    width: calc(103 / 375 * 100vw);
    max-width: 100%;
    margin-top: calc(23 / 375 * 100vw);
  }
  .panel-img-holiday {
    width: calc(107 / 375 * 100vw);
    max-width: 100%;
    margin-top: calc(23 / 375 * 100vw);
  }
  .panel-img-gender-ratio {
    width: calc(88 / 375 * 100vw);
    max-width: 100%;
    margin-top: calc(23 / 375 * 100vw);
  }
  .small-panel-ttl {
    font-size: calc(16 / 375 * 100vw);
  }
  .small-panel-image {
    width: calc(72 / 375 * 100vw);
    max-width: 100%;
    margin-top: calc(23 / 375 * 100vw);
  }
  .panel-img-average-age {
    width: calc(292 / 375 * 100vw);
    max-width: 100%;
  }
  .panel-numeral {
    margin-top: calc(16 / 375 * 100vw);
    font-size: calc(16 / 375 * 100vw);
  }
  .panel-numeral > span {
    display: inline-block;
    font-size: calc(38 / 375 * 100vw);
  }
  .numeral-workarea-list {
    margin-top: calc(16 / 375 * 100vw);
  }
  .numeral-workarea-list > li {
    flex: none;
    width: calc(100% / 2 - 8px);
    max-width: 100%;
    margin-left: 16px;
    padding: calc(11 / 375 * 100vw) calc(11 / 375 * 100vw) calc(6 / 375 * 100vw);
  }
  .panel-workarea-ttl {
    font-size: calc(11 / 375 * 100vw);
  }
  .panel-img-engineer {
    width: calc(51 / 375 * 100vw);
    max-width: 100%;
  }
  .panel-img-designer {
    width: calc(46 / 375 * 100vw);
    max-width: 100%;
  }
  .panel-img-sales {
    width: calc(51 / 375 * 100vw);
    max-width: 100%;
  }
  .panel-img-management {
    width: calc(40 / 375 * 100vw);
    max-width: 100%;
  }
  .panel-workarea-numeral {
    font-size: calc(17 / 375 * 100vw);
  }
  .panel-workarea-numeral > span {
    display: inline-block;
    margin-top: calc(10 / 375 * 100vw);
    font-size: calc(31 / 375 * 100vw);
  }
  .panel-gender-ratio-numeral {
    margin-top: calc(20 / 375 * 100vw);
  }
  .panel-gender-ratio-numeral > li {
    font-size: calc(11 / 375 * 100vw);
  }
  .panel-gender-ratio-numeral > li + li {
    margin-left: calc(8 / 375 * 100vw);
  }
  .panel-gender-ratio-numeral > li > span {
    display: inline-block;
    font-size: calc(33 / 375 * 100vw);
  }
  .panel-img-average-overtime {
    width: calc(89 / 375 * 100vw);
    max-width: 100%;
    margin-top: calc(23 / 375 * 100vw);
  }
}

@media screen and (min-width: 1367px) {
  /*-------------------------------------
  ABOUT　レイビジョン
  -------------------------------------*/
  .head-section-about > img {
    width: 577px;
  }
  .vision-txt-right {
    margin-top: 50px;
    font-size: 18px;
  }
  .vision-container {
    margin-top: 335px;
  }
  .vision-container + .vision-container {
    margin: 90px 0 0 154px;
  }
  .vision-num-txt-main {
    margin-left: 16px;
    font-size: 180px;
  }
  .vision-num-punctuation {
    font-size: 120px;
  }
  .vision-num-list > li {
    margin-left: 38px;
    font-size: 46px;
  }
  .vision-txt-main {
    margin-top: 40px;
    font-size: 28px;
  }
  .vision-txt-sub {
    margin-top: 20px;
    font-size: 18px;
  }
  .vision-txt-last {
    margin-top: 30px;
    font-size: 24px;
  }
  /*-------------------------------------
  ABOUT 数字で見るレイハウオリ
  -------------------------------------*/
  .numeral-list > li {
    padding: 48px 18px 32px;
  }
  .big-panel-ttl {
    font-size: 40px;
  }
  .small-panel-ttl {
    font-size: 30px;
  }
  .small-panel-image {
    margin-top: 40px;
  }
  .panel-numeral {
    margin-top: 24px;
    font-size: 30px;
  }
  .panel-numeral > span {
    font-size: 70px;
  }
  .panel-numeral-founded {
    margin-top: 30px;
    font-weight: 400;
    font-size: 70px;
    font-family: "Fjalla One", "Noto Sans JP", sans-serif;
  }
  .panel-img-founded {
    margin-left: 12px;
  }
  .panel-img-num-employees {
    margin-top: 40px;
  }
  .panel-img-num-employees {
    margin-top: 40px;
  }
  .panel-img-paid {
    margin-top: 40px;
  }
  .panel-img-side-business {
    margin-top: 40px;
  }
  .panel-img-holiday {
    margin-top: 40px;
  }
  .panel-img-gender-ratio {
    margin-top: 40px;
  }
  .panel-gender-ratio-numeral {
    margin-top: 30px;
  }
  .panel-gender-ratio-numeral > li {
    font-size: 20px;
  }
  .panel-gender-ratio-numeral > li + li {
    margin-left: 8px;
  }
  .panel-gender-ratio-numeral > li > span {
    font-size: 60px;
  }
  .panel-img-average-overtime {
    margin-top: 40px;
  }
  .numeral-workarea-list {
    margin-top: 30px;
  }
  .numeral-workarea-list > li {
    margin-left: 30px;
    padding: 12px 20px;
  }
  .numeral-workarea-list > li:nth-of-type(n + 3) {
    margin-top: 20px;
  }
  .numeral-workarea-list > li:nth-of-type(1),
  .numeral-workarea-list > li:nth-of-type(3) {
    margin-left: 0;
  }
  .numeral-list > li:nth-of-type(7) {
    padding: 40px 46px;
  }
  .panel-workarea-ttl {
    font-size: 20px;
  }
  .panel-workarea-numeral {
    font-size: 30px;
  }
  .panel-workarea-numeral > span {
    margin-top: 14px;
    font-size: 56px;
  }
}

@media screen and (max-width: 1024px) {
  /*-------------------------------------
  DESIGNER チームについて
  -------------------------------------*/
  .section-designer {
    padding: 64px 16px 0;
  }
  .head-seciton-designer {
    top: 27px;
    left: 0;
  }
  .head-seciton-designer > img {
    width: 290px;
    height: 168px;
  }
  .designer-team-wrapper {
    padding: 160px 0 64px;
  }
  .designer-team-list {
    flex-wrap: nowrap;
    margin-top: 74px;
    padding: 0 20px 10px;
    overflow-x: auto;
  }
  .designer-team-list > li {
    flex-shrink: 0;
    width: 232px;
    height: auto;
  }
  .designer-team-list > li + li {
    margin-left: 30px;
  }
  .designer-team-list > li:nth-of-type(n + 4) {
    margin-top: 0;
    margin-left: 30px;
  }
  /*-------------------------------------
  DESINGER　STYLE(行動指針)
  -------------------------------------*/
  .designer-style-wrapper {
    margin-top: 64px;
  }
  .designer-style-list {
    margin-top: 32px;
    flex-direction: column;
  }
  .designer-style-list > li {
    width: 100%;
  }
  .designer-style-list > li + li {
    margin: 24px 0 0;
  }
  .header-designer-style {
    font-size: 28px;
  }
  .designer-style-number {
    margin-left: 0;
  }
  .designer-style-number::before {
    margin-right: 16px;
  }
  .designer-style-icon-window {
    width: 220px;
    height: 220px;
  }
  .designer-style-ttl {
    font-size: 24px;
  }
  .designer-style-sub-ttl {
    margin-top: 21px;
  }
  .designer-style-message {
    padding: 0;
  }
  /*-------------------------------------
  DESIGNER どんな仕事するのか
  -------------------------------------*/
  .designer-how-work-wrapper {
    margin: 64px auto 0;
  }
  .designer-how-work-ttl {
    font-size: 28px;
  }
  .designer-how-work-container {
    margin-top: 39px;
  }
  .designer-how-work-sub-ttl {
    font-size: 24px;
  }
  .designer-how-work-supplement {
    margin-top: 32px;
    font-size: 14px;
    text-align: left;
  }
  .designer-how-work-definition {
    padding: 18px 15px 16px;

    grid-template-columns: 1fr;
    grid-template-rows: 37px auto;
  }
  .designer-how-work-definition::after {
    left: calc(50% - 10px);
    width: 20px;
    height: 20px;
  }
  dl.designer-how-work-examples {
    margin-top: 25px;
  }
  .designer-how-work-definition > dt {
    padding: 0 0 12px 0;
    font-size: 18px;

    border-bottom: 1px dashed #c1ab58;
    grid-column: 1;
    grid-row: 1/2;
  }
  .designer-how-work-definition > dt::after {
    display: none;
  }
  .how-work-ttl-counter {
    width: 24px;
    height: 24px;
    margin-right: 10px;
  }
  .how-work-ttl-counter::before {
    font-size: 12px;
    line-height: 24px;
  }
  .designer-how-work-definition > dd {
    margin-top: 11px;
    padding: 0;
    font-size: 14px;
  }
  .designer-how-work-definition > dd::before {
    display: none;
  }
  .designer-tea-party-container {
    flex-direction: column-reverse;
    margin-top: 40px;
    padding: 30px 24px 24px;
  }
  .designer-tea-party-container > img {
    margin-top: 35px;
    max-width: 260px;
  }
  .designer-tea-party-content {
    margin-left: 0;
  }
  .designer-tea-party-content > dt {
    font-weight: 600;
    font-size: 24px;
    text-align: center;
  }
  .designer-tea-party-content > dd {
    margin-top: 16px;
    font-size: 14px;
  }
  /*-------------------------------------
  Designer インタビュー
  -------------------------------------*/
  .section-interviews {
    margin-top: 60px;
    padding: 60px 0 64px 16px;
  }
  .interviews-wrapper {
    padding: 64px 0;
  }
  .header-interviews {
    font-size: 36px;
  }
  .interviews-container {
    margin-top: 40px;
  }
  .interview-thumbnail {
    width: calc(100vw - 16px);
    height: calc(142 / 375 * 100vw);
  }
  .interview-thumbnail-head span {
    font-size: 24px;
  }
  .interview-thumbnail-head > span + span {
    margin-top: 5px;
  }
  .interview-thumbnail-head-02 > span:first-child {
    width: calc(100% - 146px);
  }
  .interviewee {
    margin-top: calc(16 / 375 * 100vw);
  }
  .thumbnail-ttl-interview {
    top: calc(62 / 375 * 100vw);
    left: calc(20 / 375 * 100vw);
  }
  .interview-thumbnail-image {
    width: calc(256 / 375 * 100vw);
    height: calc(142 / 375 * 100vw);
  }
  .interview-thumbnail-leihauoli-logo {
    top: calc(20 / 375 * 100vw);
    width: calc(70 / 375 * 100vw);
    height: calc(68 / 375 * 100vw);
  }
  .interview-contents {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    margin-top: 80px;
  }
  .thumbnail-leihauoli-logo {
    top: 45px;
    left: 0;
    margin-right: 33px;
  }
  .thumbnail-ttl-interview {
    left: 10%;
  }
  .interviewee-position {
    font-size: 12px;
  }
  .interviewee-name {
    margin-top: 5px;
    font-size: 16px;
  }

  .interview-schedule-container {
    display: none;
  }
  .interview-schedule-btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 2;
    width: 100%;
    max-width: 343px;
    height: 50px;
    margin-top: 40px;
    padding: 0 16px 0 32px;
    background-color: #e0cb7d;
    font-weight: 600;
  }
  .interview-schedule-btn::after {
    position: absolute;
    right: 16px;
    transform: rotate3d(1, 0, 0, -180deg);
    width: 5px;
    height: 5px;
    content: "";
    transition: transform 0.4s;

    border-bottom: 8px solid #151515;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
  }
  .interview-schedule-menu {
    display: none;
    padding: 32px 16px 32px 32px;
    background-color: #ffffff;
  }
  .interview-schedule-menu::before {
    display: none;
  }
  .interview-schedule-time-line {
    font-size: 14px;
  }
  .interview-schedule-todo-list {
    height: 1124px;
    margin-top: 0;
  }
  /* schedule opened*/
  .interview-schedule-container.is-opened {
    width: 100%;
    max-width: 343px;
  }
  .interview-schedule-container.is-opened ~ .interview-schedule-btn::after {
    transform: rotate3d(1, 0, 0, 0deg);
  }
  .interview-schedule-container.is-opened .interview-schedule-menu {
    display: flex;
  }
  /* interview list */
  .interview-qa-list {
    max-width: 100%;
    margin-left: 0;
  }
  .interview-question-term {
    margin-top: 32px;
    font-size: 18px;
    line-height: 1;
  }
  .interview-question-term:first-child {
    margin-top: 0;
  }
  .dd-interview-answer {
    font-size: 16px;
  }
  .interview-schedule-ttl {
    width: auto;
    font-size: 13px;
  }
  .interview-schedule-todo-detail {
    width: auto;
    margin-right: 67px;
    font-size: 12px;
  }
}
@media screen and (min-width: 1367px) {
  /*-------------------------------------
  DESIGNER チームについて
  -------------------------------------*/
  .interview-thumbnail-head span {
    font-size: 50px;
  }
  .interview-thumbnail-leihauoli-logo {
    top: 75px;
  }
  .thumbnail-ttl-interview {
    top: 237px;
    left: 100px;
  }
}

/*-------------------------------------
WORKS
-------------------------------------*/
.section-works {
  position: relative;
  max-width: 1226px;
  margin: 0 auto;
  padding: 100px 70px 80px;
  box-sizing: content-box;
}
.head-section-works > img {
  width: calc(552 / 1366 * 100vw);
  max-width: 552px;
}
.works-examples-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 25px;
}
.works-examples-list > li {
  position: relative;
  width: 30%;
}
.works-examples-list > li:nth-child(3n + 1) {
  margin-top: 120px;
}
.works-examples-list > li:nth-child(3n + 2) {
  margin-top: 60px;
}
.works-examples-list > li:nth-child(3n) {
  margin-top: 0;
}
.works-example-card {
  display: block;
  position: relative;
  cursor: pointer;
}
.works-example-card-img {
  width: 100%;
}
.works-example-txt {
  display: flex;
  justify-content: space-around;
  align-items: center;
  opacity: 0;
  position: absolute;
  top: 0;
  z-index: 2;
  height: 100%;
  padding: 0 20px;
  background-color: rgba(21, 21, 21, 0.5);
  color: #ffffff;
  font-weight: 600;
  line-height: 1.7;
  transition: opacity 0.4s;
}
.works-example-txt:hover {
  opacity: 1;
}
.works-example-supplement {
  margin-top: 10px;
  font-weight: 600;
  font-size: 20px;
}
.works-example-type {
  display: block;
  margin-top: 10px;
  font-weight: 400;
  font-size: 12px;
}
@media screen and (max-width: 1024px) {
  /*-------------------------------------
  WORKS
  -------------------------------------*/
  .section-works {
    padding: 48px 16px 64px;
  }
  .head-section-works > img {
    width: 276px;
    height: 168px;
  }
  .works-examples-list {
    flex-wrap: nowrap;
    margin-top: 39px;
    padding-bottom: 30px;
    overflow-x: scroll;
  }
  .works-examples-list > li {
    flex-shrink: 0;
    width: 232px;
    margin: 0 16px;
  }
  .works-examples-list > li:nth-child(3n),
  .works-examples-list > li:nth-child(3n + 1),
  .works-examples-list > li:nth-child(3n + 2) {
    margin-top: 0;
  }
  .works-example-company {
    margin: 16px 0 6px;
    font-size: 16px;
  }
  .works-example-txt {
    font-size: 16px;
  }
}

/*-------------------------------------
RECRUIT 募集要項
-------------------------------------*/
.section-recruit {
  position: relative;
  max-width: 1226px;
  margin: 0 auto;
  padding: 0 70px;
  box-sizing: content-box;
}
.section-recruit::before {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 400px;
  margin: 0 calc(50% - 50vw);
  background: url(/assets/images/recruit-bg.jpg) no-repeat center right / cover;
  content: "";
}
.head-section-recruit {
  position: absolute;
  top: 53px;
  left: 70px;
  width: calc(559 / 1366 * 100vw);
  max-width: 559px;
}
.head-section-recruit > img {
  width: 100%;
}
.job-description-wrapper {
  position: relative;
  max-width: 1024px;
  margin: 0 auto;
  padding: 480px 0 135px;
}
.job-description-wrapper::before {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100vw;
  height: 100%;
  margin-right: calc(50% - 50vw);
  margin-left: calc(50% - 50vw);
  background-color: #f7f7f7;
  content: "";
}
.job-description-list > li {
  display: flex;
  align-items: center;
  padding: 30px 0;
  color: #151515;

  border-bottom: 1px dashed #b9b9b9;
}
.job-description-list > li:first-child {
  padding-top: 0;
}
.job-description-ttl {
  min-width: 205px;
  font-weight: 700;
  font-size: 16px;
}
.job-description-txt,
.job-description-txt-list > li {
  font-size: 14px;
  line-height: 1.7;
}

/*-------------------------------------
RECRUIT 採用までの流れ
-------------------------------------*/
.recruit-flow-wrapper {
  max-width: 1024px;
  margin: 0 auto;
  padding: 130px 0;
  box-sizing: content-box;
}
.recruit-flow-head {
  font-weight: 700;
  font-size: 40px;
  text-align: center;
}
.recruit-flow-accent {
  position: relative;
  margin-top: 76px;
  font-weight: 700;
  font-size: 30px;
  text-align: center;
}
.recruit-flow-accent::before {
  position: absolute;
  bottom: -7px;
  left: 50%;
  z-index: -1;
  transform: translateX(-50%);
  width: 500px;
  height: 14px;
  background-color: #ece0b1;
  content: "";
}
.recruit-flow-list {
  display: flex;
  justify-content: space-between;
  margin-top: 70px;
}
.recruit-flow-list > li {
  position: relative;
  width: 220px;
}
.recruit-flow-list > li + li {
  margin-left: 50px;
}
.recruit-flow-num {
  position: absolute;
  top: 29px;
  left: 50%;
  transform: translateX(-50%);
  color: #c1ab58;
  font-weight: 700;
  font-size: 12px;
  line-height: 1;
}
.recruit-flow-list > li::before {
  position: absolute;
  top: 0;
  left: 50%;
  z-index: -1;
  transform: translateX(-50%);
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background-color: #f8f4e4;
  content: "";
}
.recruit-flow-list > li::after {
  position: absolute;
  top: 55px;
  left: 50%;
  transform: translateX(-50%);
  content: "";
}
.recruit-flow-list > li:nth-of-type(1)::after {
  width: 102px;
  height: 90px;
  background: url(/assets/images/recruit-flow-01.svg) no-repeat;
}
.recruit-flow-list > li:nth-of-type(2)::after {
  width: 76px;
  height: 90px;
  background: url(/assets/images/recruit-flow-02.svg) no-repeat;
}
.recruit-flow-list > li:nth-of-type(3)::after {
  width: 86px;
  height: 86px;
  background: url(/assets/images/recruit-flow-03.svg) no-repeat;
}
.recruit-flow-list > li:nth-of-type(4)::after {
  width: 109px;
  height: 91px;
  background: url(/assets/images/recruit-flow-04.svg) no-repeat;
}
.recruit-flow-ttl {
  padding-top: 200px;
  font-weight: 700;
  font-size: 20px;
  text-align: center;
}
.recruit-flow-txt {
  margin-top: 10px;
  font-size: 16px;
  line-height: 1.7;
}

@media screen and (max-width: 1024px) {
  .section-recruit {
    padding: 0 16px;
  }
  .section-recruit::before {
    height: 180px;
  }
  .head-section-recruit {
    top: 18px;
    left: 16px;
    width: 279px;
  }
  .head-section-recruit > img {
    width: 100%;
  }
  .job-description-wrapper {
    padding: 225px 0 64px;
  }
  .job-description-list > li {
    flex-direction: column;
    align-items: flex-start;
    padding: 28px 0;
  }
  .job-description-txt,
  .job-description-txt-list {
    margin-top: 18px;
  }
  /*-------------------------------------
  RECRUIT 採用までの流れ
  -------------------------------------*/
  .recruit-flow-wrapper {
    padding: 70px 0;
  }
  .recruit-flow-head {
    font-size: 24px;
  }
  .recruit-flow-accent {
    margin-top: 40px;
    font-size: 18px;
  }
  .recruit-flow-accent::before {
    bottom: -3px;
    width: 286px;
    height: 8px;
  }
  .recruit-flow-list {
    flex-direction: column;
    margin-top: 40px;
  }
  .recruit-flow-list > li + li {
    margin: 38px 0 0;
  }
  .recruit-flow-num {
    top: 14px;
    left: 50px;
  }
  .recruit-flow-list > li {
    display: flex;
    width: 100%;
    min-height: 100px;
  }
  .recruit-flow-list > li::before {
    left: 0;
    transform: none;
    width: 100px;
    height: 100px;
  }
  .recruit-flow-list > li::after {
    top: 32px;
    left: 0;
    transform: none;
  }
  .recruit-flow-list > li:nth-of-type(1)::after {
    left: 21px;
    width: 57px;
    height: 50px;
    background-size: cover;
  }
  .recruit-flow-list > li:nth-of-type(2)::after {
    left: 29px;
    width: 42px;
    height: 50px;
    background-size: cover;
  }
  .recruit-flow-list > li:nth-of-type(3)::after {
    left: 25px;
    width: 49px;
    height: 49px;
    background-size: cover;
  }
  .recruit-flow-list > li:nth-of-type(4)::after {
    left: 20px;
    width: 60px;
    height: 51px;
    background-size: cover;
  }
  .recruit-flow-contents {
    padding-left: 116px;
  }
  .recruit-flow-ttl {
    padding-top: 0;
    font-size: 16px;
    text-align: left;
  }
  .recruit-flow-txt {
    margin-top: 10px;
  }
}

/*-------------------------------------
FOOTER
-------------------------------------*/
.main-footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  position: relative;
  padding: 44px 63px 20px 70px;
  background: #151515;
}
.footer-info-copmpany {
  color: #ffffff;
  font-size: 13px;
  line-height: 1.5;
}
.footer-privacypolicy-link {
  display: block;
  margin-top: 30px;
  font-size: 12px;
  text-decoration: none;
  transition: text-decoration 0.2s;
}
.footer-privacypolicy-link:hover {
  text-decoration: underline;
}
.footer-copyright {
  margin-bottom: 14px;
  color: #ffffff;
  font-size: 10px;
}
.footer-logo-list {
  display: flex;
  align-items: center;
  position: absolute;
  right: 70px;
  bottom: 66px;
}
.footer-logo-list > li + li {
  margin-left: 20px;
}
.footer-wantedly-logo {
  width: 24px;
  height: 17px;
}
.footer-facebook-logo {
  width: 21px;
  height: 21px;
}
@media screen and (max-width: 1024px) {
  .main-footer {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 32px 16px;
  }
  .footer-privacypolicy-link {
    margin-top: 37px;
  }
  .footer-logo-list {
    right: 16px;
    bottom: 73px;
  }
  .footer-copyright {
    margin: 30px 0 0 0;
    text-align: left;
  }
}

/*-------------------------------------
SP
-------------------------------------*/
@media screen and (max-width: 1024px) {
  .sp-scroll-bar::-webkit-scrollbar {
    height: 5px;
  }
  .sp-scroll-bar::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #151515;
  }
  .sp-scroll-bar::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: #e5e5e5;
  }
  .entry-button-container {
    display: none;
  }
}
