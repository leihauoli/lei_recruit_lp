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
    this.$header = $('.jsc-main-header');
    this.$sectionKv = $('.jsc-section-kv');
    this.setHeaderOptions();
    this.headerObserver = new IntersectionObserver(this.changeHeaderBg, this.headerOptions);
  },
  bindEvent: function(){
    var myself = this;
    Array.prototype.forEach.call(this.$sectionKv, function(box){
      myself.headerObserver.observe(box);
    });
    this.$window.on('resize', function(){
      myself.setHeaderOptions();
    });
  },
  setHeaderOptions: function(){
    if (window.matchMedia('(max-width: 1024px)').matches){
      this.headerOptions = {
        rootMargin: '-60px 0px 0px 0px'
      };
    } else {
      this.headerOptions = {
        rootMargin: '-76px 0px 0px 0px'
      };
    }
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
    this.$hamburgerMenu.add(this.$headerMenuItem).add(this.$hamburgerBg).on('click', function(){
      if (myself.$headerMenuList.is(':animated')) return;
      myself.toggleHamburger();
    });
    this.$headerNavSp.on('click', function(e){
      e.stopPropagation();
    });
  },
  toggleHamburger: function(){
    this.$body.toggleClass(this.FIXED_CLASS);
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
    this.$link = $('a[href^="#"]');
    this.$body = $('body, html');
    this.$header = $('.jsc-main-header');
  },
  bindEvent: function(){
    var myself = this;
    this.$link.on('click', function(e){
      e.preventDefault();
      var href = $(this).attr('href'),
        target = $(href == '#' || href == '' ? 'html' : href),
        position = target.offset().top - myself.$header.height();

      myself.$body.animate({scrollTop: position}, myself.SMOOTH_SCROLL_SPEED);
      return false;
    });
  }
};

/**
 * デザイナーのとある一日　アコーディオンメニュー
 */
LEIHAUOLI.RECRUIT_DESIGNER.AccordionTodoMenu = function(trigger){
   this.$trigger = $(trigger);
   this.init();
 };

LEIHAUOLI.RECRUIT_DESIGNER.AccordionTodoMenu.prototype = {
  DURATION: 400,
  OPEN_CLASS: 'is-opened',
  init: function(){
    this.bindEvent();
  },
  bindEvent: function(){
    var myself = this;
    this.closeFlag = false;
    this.$accordionMenu = this.$trigger.prev();

    this.$trigger.on('click', function(){
      myself.toggleAccordion();
    });

    $(window).on('resize', function(){
      if (window.matchMedia('(min-width: 1025px)').matches && myself.closeFlag === true){
        //SP版からPC版にサイズが変化したとき、slideUpによって設定されたdisplay: noneの状態を変化させる
        myself.$accordionMenu.css('display', '');
        myself.closeFlag = false;
      }
    });
  },
  toggleAccordion: function(){
    if (this.$trigger.is(':animated')) return;

    var myself = this;

    if (this.$accordionMenu.hasClass(this.OPEN_CLASS)){
      this.$accordionMenu.slideUp(this.DURATION, function(){
        myself.$accordionMenu.removeClass(myself.OPEN_CLASS);
      });
      this.closeFlag = true;
    } else {
      this.$accordionMenu.addClass(this.OPEN_CLASS).slideDown(this.DURATION);
      this.closeFlag = false;
    }
  }
};


$(function(){
  LEIHAUOLI.RECRUIT_DESIGNER.AnimateByScroll.init();
  LEIHAUOLI.RECRUIT_DESIGNER.HamburgerMenu.init();
  LEIHAUOLI.RECRUIT_DESIGNER.SmoothScroll.init();
  $('.jsc-interview-schedule-btn').each(function(){
    new LEIHAUOLI.RECRUIT_DESIGNER.AccordionTodoMenu(this);
  });
});