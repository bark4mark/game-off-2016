var yoke, touch, progressBar, startScreen = function(game){};

startScreen.prototype = {
  preload: function(){
    intro = game.add.sprite(0, 0, 'intro');
    this.load.image('yoke', 'assets/images/yoke-pixel.png');
    progressBar = game.add.sprite(100, 400, "progress");
    this.load.setPreloadSprite(progressBar);
    this.load.script('levelOne',  'states/game.js');
  },
  create: function(){
    progressBar.visible = false;
    this.add.text(300, 400, "Touch to start", {font: "bold 32px Arial", fill: "#000", boundsAlignH: "center", boundsAlignV: "middle"});
    intro.inputEnabled = true;
    intro.events.onInputDown.add(function(){
      this.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
      this.scale.startFullScreen(false);
      screen.orientation.lock('landscape-primary');
      this.state.add('levelOne', levelOne);
      this.state.start('levelOne');
      this.physics.startSystem(Phaser.Physics.ARCADE);
      this.physics.arcade.gravity.y = 100;
    }, this);
  }
}