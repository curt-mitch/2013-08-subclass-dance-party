var CrazyDancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="CrazyDancer"><img src="https://si0.twimg.com/profile_images/1831644430/DSC02750.JPG" height="100px" width="100px"></span>');
  Dancer.apply(this, arguments);
};

CrazyDancer.prototype = Object.create(Dancer.prototype);
CrazyDancer.prototype.constructor = CrazyDancer;

CrazyDancer.prototype.step = function(){
    Dancer.prototype.step.call(this);
};
$(document).ready(function(){
  $('.CrazyDancer').click(function(event) {
    $(this)
      .animate(
        { left: 200 }, {
          duration: 'slow',
          easing: 'easeOutBounce'
        })
      .animate(
        { left: 0 }, {
          duration: 'slow',
          easing: 'easeOutBounce'
        });
  });
});