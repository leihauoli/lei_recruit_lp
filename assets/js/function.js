var LEIHAUOLI = LEIHAUOLI || {};
LEIHAUOLI.DEMO_ANIMATION = LEIHAUOLI.DEMO_ANIMATION || {};

/**
 * 画面をスクロールして該当要素が表示領域に入ったとき、該当要素を表示させる
 */
LEIHAUOLI.DEMO_ANIMATION.showByScroll = {
    ACTIVE_CLASS: 'is-active',
    init: function(){
        this.setParameters();
        this.bindEvent();
    },
    setParameters: function(){
      console.log('set');
      this.$window = $(window);
      this.options = {
        rootMargin: "0px 0px"
      };
      if (window.matchMedia('(max-width: 1024px)').matches){
        this.headerOptions = {
          rootMargin: "-60px 0px 0px 0px"
        };
      } else {
        this.headerOptions = {
          rootMargin: "-76px 0px 0px 0px"
        };
      }
      this.ttlBgLeft = document.querySelectorAll(".jsc-ttl-bg-left");
      this.contentLeft = document.querySelectorAll(".jsc-left-content");
      this.contentRight = document.querySelectorAll(".jsc-right-content");
      this.emergeTop = document.querySelectorAll(".jsc-emerge-top");
      this.emergeBottom = document.querySelectorAll(".jsc-emerge-bottom");
      this.header = document.getElementsByClassName(".jsc-main-header");
      this.sectionKv = document.querySelectorAll(".jsc-section-kv");
      // this.emerge02 = document.querySelectorAll(".jsc-emerge-02");
      // this.emerge03 = document.querySelectorAll(".jsc-emerge-03");
      // this.emerge04 = document.querySelectorAll(".jsc-emerge-04");
      // this.emerge05 = document.querySelectorAll(".jsc-emerge-05");
      this.observer = new IntersectionObserver(this.showContents, this.options);
      this.headerObserver = new IntersectionObserver(this.changeHeaderBg, this.headerOptions);
      this.headerLogo = document.querySelectorAll(".jsc-header-logo");
      this.$header = $(".jsc-main-header");
    },
    bindEvent: function(){
      var myself = this;
      Array.prototype.forEach.call(this.ttlBgLeft, function(box){
          myself.observer.observe(box);
      });
      Array.prototype.forEach.call(this.contentLeft, function(box){
          myself.observer.observe(box);
      });
      Array.prototype.forEach.call(this.emergeTop, function(box){
          myself.observer.observe(box);
      });
      Array.prototype.forEach.call(this.emergeBottom, function(box){
        myself.observer.observe(box);
      });
      Array.prototype.forEach.call(this.sectionKv, function(box){
        myself.headerObserver.observe(box);
      });
      this.$window.on('resize', function(){
        if (window.matchMedia('(max-width: 1024px)').matches){
          myself.headerOptions = {
            rootMargin: "-60px 0px 0px 0px"
          };
        } else {
          myself.headerOptions = {
            rootMargin: "-76px 0px 0px 0px"
          };
        }
      });
    },
    showContents: function(entries){
        var myself = this;
        Array.prototype.some.call(entries, function(entry){
            if (entry.isIntersecting){
                //要素が表示領域に入ったとき
                entry.target.classList.add('is-active');
            }
        });
    },
    changeHeaderBg: function(entries){
      var myself = this;
      Array.prototype.some.call(entries, function(entry){
        if (!entry.isIntersecting){
          console.log('kvから外れた');
          $(".jsc-main-header").addClass('is-change');
          $(".jsc-header-menu-list").addClass("is-change");
          $(".jsc-header-logo").attr("src", "/assets/images/header-black-logo.png");
          if (window.matchMedia('(max-width: 1024px)').matches){
            $(".jsc-hamburger-menu").addClass("is-change");
          }
        } else {
          console.log('kvに入った');
          $(".jsc-main-header").removeClass('is-change');
          $(".jsc-header-menu-list").removeClass("is-change");
          $(".jsc-header-logo").attr("src", "/assets/images/header-logo.png");
          if (window.matchMedia('(max-width: 1024px)').matches){
            $(".jsc-hamburger-menu").removeClass("is-change");
          }
        }
      });
    }
};


/**
 * ハンバーガーメニュー
 */
 LEIHAUOLI.DEMO_ANIMATION.HamburgerMenu = {
  ACTIVE_CLASS: 'is-active',
  SLIDE_SPEED: 400,
  init: function(){
    this.setParameters();
    this.bindEvent();
  },
  setParameters: function(){
    this.$body = $('body');
    this.$header = $('.jsc-main-header');
    this.$headerMenuList = $('.jsc-header-menu-list');
    this.$headerMenuItem = this.$headerMenuList.find('li').find('a');
    this.$hamburgerMenu = $('.jsc-hamburger-menu');
    this.$headerLogoList = $('.jsc-header-logo-list');
    this.$headerNavSp = $('.jsc-header-nav-sp');
    this.$hamburgerBg = $('.jsc-hamburger-bg');
    this.$hamburgerBorderTop = $('.jsc-hamburger-border-top');
    this.$hamburgerBorderMiddle = $('.jsc-hamburger-border-middle');
    this.$hamburgerBorderBottom = $('.jsc-hamburger-border-bottom');
  },
  bindEvent: function(){
    var myself = this;
    this.$hamburgerMenu.on('click', function(){
      if (myself.$headerMenuList.is(':animated')) return;
      myself.toggleHamburger();
    });
    this.$headerMenuItem.on('click', this.toggleHamburger.bind(this));
    this.$headerNavSp.on('click', function(e){
      e.stopPropagation();
    });
    this.$hamburgerBg.on('click', this.toggleHamburger.bind(this));
  },
  toggleHamburger: function(){
    this.$hamburgerMenu.toggleClass('is-active');
    this.$body.toggleClass('is-fixed');
    this.$headerMenuList.toggleClass('is-active');
    this.$headerNavSp.toggleClass('is-active');
    this.$hamburgerBg.toggleClass('is-active');
  }
};

/**
 * スムーススクロール
 */
 LEIHAUOLI.DEMO_ANIMATION.SmoothScroll = {
  SMOOTH_SCROLL_SPEED: 500,
  init: function(){
    this.setParameters();
    this.bindEvent();
  },
  setParameters: function(){
    this.$href = $('a[href^="#"]');
    this.$body = $('body, html');
    this.$header = $('.jsc-main-header');
  },
  bindEvent: function(){
    var myself = this;
    this.$href.on('click', function(e){
        e.preventDefault();
        console.log(myself.$header.height());
        var href = $(this).attr('href');
        var target = $(href == '#' || href == '' ? 'html' : href);
        var position = target.offset().top - myself.$header.height();
        myself.$body.animate({scrollTop: position}, myself.SMOOTH_SCROLL_SPEED);
        return false;
    });
  }
};

$(function(){
  LEIHAUOLI.DEMO_ANIMATION.showByScroll.init();
  LEIHAUOLI.DEMO_ANIMATION.HamburgerMenu.init();
  LEIHAUOLI.DEMO_ANIMATION.SmoothScroll.init();
});