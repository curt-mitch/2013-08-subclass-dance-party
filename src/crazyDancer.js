var CrazyDancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="CrazyDancer"></span>');
  Dancer.apply(this, arguments);
};

CrazyDancer.prototype = Object.create(Dancer.prototype);
CrazyDancer.prototype.constructor = CrazyDancer;

CrazyDancer.prototype.step = function(){
    Dancer.prototype.step.call(this);
    this.$node.toggle();
};