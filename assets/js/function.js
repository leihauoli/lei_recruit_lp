var LEIHAUOLI = LEIHAUOLI || {};
LEIHAUOLI.RECRUIT_DESIGNER = LEIHAUOLI.RECRUIT_DESIGNER || {};

/**
 * 画面をスクロールして該当要素が表示領域に入ったとき、該当要素をアニメーションさせる
 */
LEIHAUOLI.RECRUIT_DESIGNER.AnimateByScroll = {
  FADE_TIME: 400,
  DELAY_TIME: 800,
  ACTIVE_CLASS: 'is-active',
  init: function(){
    this.setParameters();
    this.bindEvent();
  },
  setParameters: function(){
    this.$window = $(window);
    this.options = {
      rootMargin: '0px 0px 0px 0px'
    };
    this.emergeOptions = {
      rootMargin: '0px 0px -20%',
    };
    this.spMediaQuery;
    this.setHeaderOptions();
    this.$header = $('.jsc-main-header');
    this.$sectionKv = $('.jsc-section-kv');
    this.$emergeItem = $('.jsc-emerge-item');
    this.$averageAgeGraph = $('.jsc-average-age-graph');
    this.$panelImg = $('.numeral-list').find('img');
    this.$countUpNum = $('.jsc-count-up-num');
    this.$footer = $('.jsc-main-footer');
    this.$body = $('body, html');
    this.kvObserver = new IntersectionObserver(this.initPosition, this.options);
    this.headerObserver = new IntersectionObserver(this.changeHeaderBg, this.headerOptions);
    this.pageTopBtnObserver = new IntersectionObserver(this.emergePageTopBtn, this.headerOptions);
    this.itemObserver = new IntersectionObserver(this.emergeItem, this.emergeOptions);
    this.panelImgObserver = new IntersectionObserver(this.boundImg, this.emergeOptions);
    this.countUpObserver = new IntersectionObserver(this.countUp, this.emergeOptions);
    this.averageAgeGraphObserver = new IntersectionObserver(this.renderGraph, this.emergeOptions);
    this.entryBtnFixObserver = new IntersectionObserver(this.fixedEntryBtn, this.headerOptions);
    this.pageTopFixObserver = new IntersectionObserver(this.fixedPageTop, this.headerOptions);
    this.entryBtnObserver = new IntersectionObserver(this.emergeEntryBtn, this.headerOptions);
  },
  bindEvent: function(){
    var myself = this;
    Array.prototype.forEach.call(this.$sectionKv, function(box){
      myself.pageTopBtnObserver.observe(box);
      myself.headerObserver.observe(box);
      myself.entryBtnObserver.observe(box);
    });
    Array.prototype.forEach.call(this.$emergeItem, function(box){
      myself.itemObserver.observe(box);
    });
    Array.prototype.forEach.call(this.$panelImg, function(box){
      myself.panelImgObserver.observe(box);
    });
    Array.prototype.forEach.call(this.$countUpNum, function(box){
      myself.countUpObserver.observe(box);
    });
    Array.prototype.forEach.call(this.$averageAgeGraph, function(box){
      myself.averageAgeGraphObserver.observe(box);
    });
    Array.prototype.forEach.call(this.$footer, function(box){
      myself.entryBtnFixObserver.observe(box);
      myself.pageTopFixObserver.observe(box);
    });
    this.$window.on('resize', function(){
      myself.setHeaderOptions();
    });
  },
  initPosition: function(entries){
    Array.prototype.some.call(entries, function(entry){
      if (entry.isIntersecting){
        $('body').animate({scrollTop: $(entry.target).offset().top}, 0);
      }
    });
  },
  emergePageTopBtn: function(entries){
    var myself = this;
    if (this.spMediaQuery === false){
      return;
    }
    Array.prototype.some.call(entries, function(entry){
      if (!entry.isIntersecting){
        if (!$('#jsi-page-top-btn').is(':animated')){
          $('#jsi-page-top-btn').fadeIn(myself.FADE_TIME);
        }
      } else {
        if (!$('#jsi-page-top-btn').is(':animated')){
          $('#jsi-page-top-btn').fadeOut(myself.FADE_TIME);
        }
      }
    });
  },
  emergeItem: function(entries){
    Array.prototype.some.call(entries, function(entry){
      if (entry.isIntersecting){
        var $target = $(entry.target);
        if ($target.hasClass('is-visible')) return;

        $target.addClass('is-visible');

        if ($target.hasClass('svg-writing')){
          var svgId = $target.attr('id');
          new Vivus(svgId, {
            type: 'oneByOne',
            duration: 200,
            forceRender: false,
            animTimingFunction: Vivus.EASE_OUT,
          });
        }
      }
    });
  },
  emergeEntryBtn: function(entries){
    if (this.spMediaQuery === false){
      return;
    }
    Array.prototype.some.call(entries, function(entry){
      if (!entry.isIntersecting){
        if (!$('.jsc-follow-entry-btn').is(':animated')){
          $('.jsc-follow-entry-btn').addClass('is-active');
        }
      } else {
        if (!$('.jsc-follow-entry-btn').is(':animated')){
          $('.jsc-follow-entry-btn').removeClass('is-active');
        }
      }
    });
  },
  boundImg: function(entries){
    Array.prototype.some.call(entries, function(entry){
      if (entry.isIntersecting){
        if ($(entry.target).hasClass('is-visible')) return;
        entry.target.classList.add('is-visible');
      }
    });
  },
  countUp: function(entries){
    Array.prototype.some.call(entries, function(entry){
      if (entry.isIntersecting){
        setTimeout(function(){
          new LEIHAUOLI.RECRUIT_DESIGNER.countUpNum($(entry.target));
        }, this.DELAY_TIME);
      }
    });
  },
  renderGraph: function(entries){
    Array.prototype.some.call(entries, function(entry){
      if (entry.isIntersecting){
        setTimeout(function(){
          new LEIHAUOLI.RECRUIT_DESIGNER.graph($(entry.target));
        }, this.DELAY_TIME);
      }
    });
  },
  setHeaderOptions: function(){
    if ($(window).width() < 1025){
      this.headerOptions = {
        rootMargin: '-60px 0px 0px 0px'
      };
      this.spMediaQuery = true;
    } else {
      this.headerOptions = {
        rootMargin: '-76px 0px 0px 0px'
      }
      this.spMediaQuery = false;
    }
  },
  changeHeaderBg: function(entries){
    Array.prototype.some.call(entries, function(entry){
      if (!entry.isIntersecting){
        if (!$('.jsc-main-header').is(':animated')){
          $('.jsc-main-header').removeClass('is-hidden').addClass('is-fixed');
          $('.jsc-header-logo').attr('src', '/assets/images/header-color-logo.svg');
          $('.jsc-header-menu-list').addClass('is-fixed');
        }
      } else {
        if (!$('.jsc-main-header').is(':animated')){
          if ($('.jsc-main-header').css('position') === 'fixed'){
            $('.jsc-main-header').addClass('is-hidden');
          }
          $('.jsc-main-header').removeClass('is-fixed');
          $('.jsc-header-logo').attr('src', '/assets/images/header-logo.svg');
          $('.jsc-header-menu-list').removeClass('is-fixed');
        }
      }
    });
  },
  fixedEntryBtn: function(entries){
    if (this.spMediaQuery === false){
      return;
    }
    Array.prototype.some.call(entries, function(entry){
      if (entry.isIntersecting){
        $('.jsc-follow-entry-btn').css({
          'position': 'absolute'
        });
      } else {
        $('.jsc-follow-entry-btn').css({
          'position': 'fixed',
          'bottom': '16px'
        });
      }
    });
  },
  fixedPageTop: function(entries){
    if (this.spMediaQuery === true){
      return;
    }
    Array.prototype.some.call(entries, function(entry){
      if (entry.isIntersecting){
        $('#jsi-page-top-btn').css({
          'position': 'absolute'
        });
      } else {
        $('#jsi-page-top-btn').css({
          'position': 'fixed',
          'bottom': '28px'
        });
      }
    });
  }
};

/**
 * 数値のカウントアップ
 */
LEIHAUOLI.RECRUIT_DESIGNER.countUpNum = function(target){
  this.$target = target;
  this.init();
};

LEIHAUOLI.RECRUIT_DESIGNER.countUpNum.prototype = {
  SLOW_SPEED: 100,
  FAST_SPEED: 50,
  FOUND_YEAR: 2008,
  init: function(){
    this.setParameters();
    this.bindEvent();
  },
  setParameters: function(){
    this.maxIndex = Number(this.$target.attr('data-num'));
    this.currentNum = Number(this.$target.html());
  },
  bindEvent: function(){
    var myself = this;
    this.countUp = setInterval(function(){
      myself.$target.html(myself.currentNum);
      myself.currentNum += 1;

      if (myself.currentNum > myself.maxIndex){
        clearInterval(myself.countUp);
      }
    }, ((myself.maxIndex > 9 || myself.maxIndex === myself.FOUND_YEAR) ? myself.FAST_SPEED : myself.SLOW_SPEED));
  },
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
 * 平均年齢のドーナツグラフを描画する
 */
LEIHAUOLI.RECRUIT_DESIGNER.graph = function(){
  this.init();
};

LEIHAUOLI.RECRUIT_DESIGNER.graph.prototype = {
  init: function(){
    this.setParameters();
    this.bindEvent();
  },
  setParameters: function(){
    this.data = {
      datasets: [{
        label: '平均年齢',
        data: [52.7, 1.8, 14.5, 30.9],
        backgroundColor: ['#E0CB7D', '#C1AB58', '#F8F4E4', '#ECE0B1'],
        borderColor: ['#14100E', '#14100E', '#14100E', '#14100E'],
        borderWidth: 4
      }]
    };
    this.options = {
      plugin: {
        legend: {
            display: false
        }
      },
      plugins: {
        tooltip: {
            enabled: false,
        },
      },
      hover: {
        mode: null
      },
      cutout: '76.6%',
      animation: {
        easing: 'easeInOutExpo'
      },
      rotation: -38,
      responsive: true
    }
  },
  bindEvent: function(){
    new Chart($('#average-age-graph'),{
      type: 'doughnut',
      data: this.data,
      options: this.options
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

/**
 * ページトップに戻る
 */
LEIHAUOLI.RECRUIT_DESIGNER.BackToTop = {
  BACK_TO_TOP_SPEED: 400,
  init: function(){
    this.setParameters();
    this.bindEvent();
  },
  setParameters: function(){
    this.$pageTopBtn = $('#jsi-page-top-btn');
    this.$body = $('body, html');
  },
  bindEvent: function(){
    var myself = this;
    this.$pageTopBtn.on('click', function(){
      myself.$body.animate({scrollTop: 0}, myself.BACK_TO_TOP_SPEED);
    });
  }
};

$(function(){
  LEIHAUOLI.RECRUIT_DESIGNER.AnimateByScroll.init();
  LEIHAUOLI.RECRUIT_DESIGNER.HamburgerMenu.init();
  LEIHAUOLI.RECRUIT_DESIGNER.SmoothScroll.init();
  LEIHAUOLI.RECRUIT_DESIGNER.BackToTop.init();
  $('.jsc-interview-schedule-btn').each(function(){
    new LEIHAUOLI.RECRUIT_DESIGNER.AccordionTodoMenu(this);
  });
});
