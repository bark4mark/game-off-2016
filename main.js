var width = 800, height = 600, game = new Phaser.Game(width, height, Phaser.AUTO, 'game', { preload: preload, create: create});

function preload() {
  this.load.image('loading', '/assets/images/progress.jpg');
  this.load.image('bg', '/assets/images/retro-game-background.jpg');
  this.load.script('splash',  'states/splash.js');
}

function create() {
  this.state.add('splash', splash);
  this.state.start('splash');
}