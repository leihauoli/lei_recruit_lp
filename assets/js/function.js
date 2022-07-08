var LEIHAUOLI = LEIHAUOLI || {};
LEIHAUOLI.RECRUIT_DESIGNER = LEIHAUOLI.RECRUIT_DESIGNER || {};

/**
 * 画面をスクロールして該当要素が表示領域に入ったとき、該当要素をアニメーションさせる
 */
LEIHAUOLI.RECRUIT_DESIGNER.AnimateByScroll = {
  init: function(){
    this.setParameters();
    this.bindEvent();
  },
  setParameters: function(){
    this.$window = $(window);
    if (window.matchMedia('(max-width: 1024px)').matches){
      this.headerOptions = {
        rootMargin: '-60px 0px 0px 0px'
      };
    } else {
      this.headerOptions = {
        rootMargin: '-76px 0px 0px 0px'
      };
    }
    this.$header = $('.jsc-main-header');
    this.$sectionKv = $('.jsc-section-kv');
    this.headerObserver = new IntersectionObserver(this.changeHeaderBg, this.headerOptions);
  },
  bindEvent: function(){
    var myself = this;
    Array.prototype.forEach.call(this.$sectionKv, function(box){
      myself.headerObserver.observe(box);
    });
    this.$window.on('resize', function(){
      if (window.matchMedia('(max-width: 1024px)').matches){
        myself.headerOptions = {
          rootMargin: '-60px 0px 0px 0px'
        };
      } else {
        myself.headerOptions = {
          rootMargin: '-76px 0px 0px 0px'
        };
      }
    });
  },
  changeHeaderBg: function(entries){
    Array.prototype.some.call(entries, function(entry){
      if (!entry.isIntersecting){
        if (!$('.jsc-main-header').is(':animated')){
          $('.jsc-main-header').removeClass('is-hidden').addClass('is-fixed');
          $('.jsc-header-logo').attr('src', '/assets/images/header-color-logo.svg');
        }
      } else {
        if (!$('.jsc-main-header').is(':animated')){
          if ($('.jsc-main-header').css('position') === 'fixed'){
            $('.jsc-main-header').addClass('is-hidden');
          }
          $('.jsc-main-header').removeClass('is-fixed');
          $('.jsc-header-logo').attr('src', '/assets/images/header-logo.svg');
        }
      }
    });
  }
};


/**
 * ハンバーガーメニュー
 */
LEIHAUOLI.RECRUIT_DESIGNER.HamburgerMenu = {
  ACTIVE_CLASS: 'is-active',
  FIXED_CLASS: 'is-fixed',
  SLIDE_SPEED: 400,
  init: function(){
    this.setParameters();
    this.bindEvent();
  },
  setParameters: function(){
    this.$body = $('body');
    this.$header = $('.jsc-main-header');
    this.$headerMenuList = $('.jsc-header-menu-list-sp');
    this.$headerMenuItem = this.$headerMenuList.find('li').find('a');
    this.$hamburgerMenu = $('.jsc-hamburger-menu');
    this.$headerNavSp = $('.jsc-header-nav-sp');
    this.$hamburgerBg = $('.jsc-hamburger-bg');
  },
  bindEvent: function(){
    var myself = this;
    this.$hamburgerMenu.on('click', function(){
      if (myself.$headerMenuList.is(':animated')) return;
      myself.toggleHamburger();
    });
    this.$headerMenuItem.on('click', function(){
      if (myself.$headerMenuList.is(':animated')) return;
      myself.toggleHamburger();
    });
    this.$headerNavSp.on('click', function(e){
      e.stopPropagation();
    });
    this.$hamburgerBg.on('click', this.toggleHamburger.bind(this));
  },
  toggleHamburger: function(){
    this.$body.toggleClass(this.FIXED_CLASS);
    this.$hamburgerMenu.toggleClass(this.ACTIVE_CLASS);
    this.$headerNavSp.toggleClass(this.ACTIVE_CLASS);
  }
};

/**
 * スムーススクロール
 */
LEIHAUOLI.RECRUIT_DESIGNER.SmoothScroll = {
  SMOOTH_SCROLL_SPEED: 200,
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
      var href = $(this).attr('href'),
        target = $(href == '#' || href == '' ? 'html' : href),
        position = target.offset().top - myself.$header.height();

      myself.$body.animate({scrollTop: position}, myself.SMOOTH_SCROLL_SPEED);
      return false;
    });
  }
};

$(function(){
  LEIHAUOLI.RECRUIT_DESIGNER.AnimateByScroll.init();
  LEIHAUOLI.RECRUIT_DESIGNER.HamburgerMenu.init();
  LEIHAUOLI.RECRUIT_DESIGNER.SmoothScroll.init();
});
