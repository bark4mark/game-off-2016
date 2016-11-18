var intro, width = 800, height = 600, game = new Phaser.Game(width, height, Phaser.AUTO, 'game', { preload: preload, create: create});

function preload() {
  this.load.image('progress', 'assets/images/progress-pixel.png');
  intro = this.load.image('intro', 'assets/images/intro.png');
  this.load.script('startScreen',  'states/start.js');
}

function create() {
  this.stage.backgroundColor = "#bdbcba";
  this.state.add('startScreen', startScreen);
  this.state.start('startScreen');
}