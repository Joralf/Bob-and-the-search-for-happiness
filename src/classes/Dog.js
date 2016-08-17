export default class Dog extends Phaser.Sprite {
    constructor(game){
      super(game);
      super(game, 0, 0);
      this.addChild(game.add.sprite(50, 50, 'dog'));
      game.stage.addChild(this);
      this.game.physics.arcade.enable(this);

      this.x = 400;
  		this.y = 100;
      this.anchor.setTo(.5,.5);
      this.body.gravity.y = 20;
  		this.body.collideWorldBounds = true;
    }
    update() {
      this.body.collideWorldBounds = true;

    }
    moveLeft() {
    	this.scale.x = 1;
    	this.body.velocity.x = -200;
    }
    moveRight() {
      this.scale.x = -1;
      this.body.velocity.x = 200;
    }
    stop() {
      this.body.velocity.x = 0;
    }

}
