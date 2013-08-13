var BlinkyDancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="BlinkyDancer"><img src="http://hackreactor.com/wp-content/uploads/2012/10/Anthony.png" height="100px" width="100px"</span>');
  Dancer.apply(this, arguments);
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.contructor = BlinkyDancer;

BlinkyDancer.prototype.step = function(){
    Dancer.prototype.step.call(this);
    this.$node.toggle();
};