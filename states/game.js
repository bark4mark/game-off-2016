var sprite, levelOne = function (game) {};

levelOne.prototype = {
  create: function () {
    sprite = game.add.sprite(500, 0, 'yoke');
    this.physics.enable([sprite], Phaser.Physics.ARCADE);
    sprite.body.collideWorldBounds = true;
    sprite.anchor.setTo(0.5, 0.5);
  },
  update: function () {
    gyro.startTracking(function (o) {
      sprite.body.velocity.x += o.y/2;
      sprite.angle += o.y/2;
    });
  }
}