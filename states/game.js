var sprite, levelOne = function (game) {};

levelOne.prototype = {
  create: function () {
    sprite = game.add.sprite(0, 0, 'yoke');
    this.physics.enable( [ sprite ], Phaser.Physics.ARCADE);
  },
  update: function () {
    sprite.x += 1;
  }
}