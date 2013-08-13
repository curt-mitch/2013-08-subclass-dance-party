var LazyDancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="LazyDancer"><img src="https://si0.twimg.com/profile_images/774843094/bright_2.jpg"/ height = "100px" width ="100px"></span>');
  Dancer.apply(this, arguments);
};

LazyDancer.prototype = Object.create(Dancer.prototype);
LazyDancer.prototype.constructor = LazyDancer;

LazyDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
};