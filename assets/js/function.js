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
    this.$trigger.on('click', function(){
      myself.toggleAccordion();
    });
  },
  toggleAccordion: function(){
    if (this.$trigger.is(':animated')) return;

    var myself = this;

    if (this.$trigger.prev().hasClass(this.OPEN_CLASS)){
      this.$trigger.prev().slideUp(this.DURATION, function(){
        myself.$trigger.prev().removeClass(myself.OPEN_CLASS);
      });
    } else {
      this.$trigger.prev().addClass(this.OPEN_CLASS);
      this.$trigger.prev().slideDown(this.DURATION);
    }
  }
};

$(function(){
  $('.jsc-interview-schedule-btn').each(function(){
    new LEIHAUOLI.RECRUIT_DESIGNER.AccordionTodoMenu(this);
  });
});
