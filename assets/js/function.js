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
        this.options = {
            root: null,
            rootMargin: "0px 0px",
            threshould: 0
        },
        this.ttlBgLeft = document.querySelectorAll(".jsc-ttl-bg-left");
        this.contentLeft = document.querySelectorAll(".jsc-left-content");
        this.contentRight = document.querySelectorAll(".jsc-right-content");
        this.emergeTop = document.querySelectorAll(".jsc-emerge-top");
        this.emergeBottom = document.querySelectorAll(".jsc-emerge-bottom");
        // this.emerge02 = document.querySelectorAll(".jsc-emerge-02");
        // this.emerge03 = document.querySelectorAll(".jsc-emerge-03");
        // this.emerge04 = document.querySelectorAll(".jsc-emerge-04");
        // this.emerge05 = document.querySelectorAll(".jsc-emerge-05");
        this.observer = new IntersectionObserver(this.showContents, this.options);
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
    },
    showContents: function(entries){
        var myself = this;
        Array.prototype.some.call(entries, function(entry){
            if (entry.isIntersecting){
                //要素が表示領域に入ったとき
                entry.target.classList.add('is-active');
            }
        });
    }
};
$(function(){
    LEIHAUOLI.DEMO_ANIMATION.showByScroll.init();
});