var options = function(game){};
options.prototype = {
  create: function(){
    var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
    var start = game.add.text(0, 0, "Start", style);
    var options = game.add.text(0, 0, "Options", style);
    start.setTextBounds(0, 100, 800, 100);
    options.setTextBounds(0, 200, 800, 100);
  }
}