var Dancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;
  this.step();
  this.setPosition(top, left);
};

Dancer.prototype = {
  step: function(){
    var that = this;
    setTimeout(function(){ that.step(); }, that.timeBetweenSteps);
  },
  setPosition: function(top, left){
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  }
};