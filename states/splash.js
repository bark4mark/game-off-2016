var splash = function(game){};
splash.prototype = {
  preload: function(){
    this.add.sprite(0, 0, 'bg');
    var loadingBar = this.add.sprite(width/4, height/2, 'loading');
    this.load.setPreloadSprite(loadingBar);
    this.load.script('game', 'states/game.js');
    this.load.script('options', 'states/options.js');
  },
  create: function(){
    game.state.add('options', options);
    game.state.start('options');
  }
}