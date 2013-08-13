var BlinkyDancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="BlinkyDancer"></span>');
  Dancer.apply(this, arguments);
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.contructor = BlinkyDancer;

BlinkyDancer.prototype.step = function(){
    Dancer.prototype.step.call(this);
    this.$node.toggle();
};