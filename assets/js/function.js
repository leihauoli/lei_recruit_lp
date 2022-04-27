var LEIHAUOLI = LEIHAUOLI || {};
LEIHAUOLI.DESIGNER_LP = {};

/**
 * 機能名
 */
LEIHAUOLI.DESIGNER_LP.機能名 = {
  init: function () {
    this.setParameters(); //変数を格納する関数を実行
    this.bindEvent(); //イベント（処理）を発火させる関数を実行
  },
  setParameters: function () {
    //jqueryオブジェクト等はここで変数化してください
    this.$href = $('a[href^="#"]');
    this.$body = $("body, html");
    this.$sample = $(".jsc-sample"); //
  },
  bindEvent: function () {
    //(例)this.$hrefをクリックしたとき、processAを実行させる
    this.$href.on("click", this.processA.bind(this));
  },
  processA: function () {
    //ここに具体的な処理内容を記述
  },
};

/**
 * ハンバーガーメニュー（実装例）
 */
LEIHAUOLI.DESIGNER_LP.HamburgerMenu = {
  init: function () {
    this.setParameters();
    this.bindEvent();
  },
  setParameters: function () {
    this.$hamburgerMenu = $(".jsc-cm-hamburger-menu");
    this.$headerMenu = $(".jsc-cm-header-list");
    this.$hamburgerBorderTop = $(".jsc-cm-hamburger-border-top");
    this.$hamburgerBorderMiddle = $(".jsc-cm-hamburger-border-middle");
    this.$hamburgerBorderBottom = $(".jsc-cm-hamburger-border-bottom");
    this.$menuItem = this.$headerMenu.find("li").find("a");
    this.$headerBg = $(".jsc-cm-header-bg");
    this.$menuBg = $(".jsc-cm-header");
    this.$body = $("body");
  },
  bindEvent: function () {
    var myself = this;
    this.$hamburgerMenu.on("click", function () {
      if (myself.$headerMenu.is(":animated")) return;
      myself.toggleHamburger();
    });
    this.$menuItem.on("click", this.toggleHamburger.bind(this));
    this.$headerBg.on("click", this.toggleHamburger.bind(this));
  },
  toggleHamburger: function () {
    this.$hamburgerMenu.toggleClass("is-active");
    this.$body.toggleClass("is-fixed");
    if (window.matchMedia("(min-width: 768px)").matches) {
      this.$headerMenu.slideToggle(0);
    } else {
      this.$headerMenu.slideToggle(this.SLIDE_SPEED);
    }
    this.$headerBg.toggleClass("is-active");
  },
};

//各機能をここで呼び出します
$(function () {
  LEIHAUOLI.DESIGNER_LP.HamburgerMenu.init();
});
