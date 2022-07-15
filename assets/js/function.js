var LEIHAUOLI = LEIHAUOLI || {};
LEIHAUOLI.RECRUIT_DESIGNER = LEIHAUOLI.RECRUIT_DESIGNER || {};

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
  $('.jsc-interview-schedule-btn').each(function(){
    new LEIHAUOLI.RECRUIT_DESIGNER.AccordionTodoMenu(this);
  });
});
