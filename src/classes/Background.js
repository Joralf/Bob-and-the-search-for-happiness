export default class Background extends Phaser.Sprite {
    constructor(game){
      super(game, 0, 0);
      this.addChild(game.add.sprite(0, 0, 'background'));
      game.stage.addChild(this);
    }
    create() {
      // this.x = 0;
      // this.y = 0;
      // this.height = this.game.height;
      // this.width = this.game.width;

    }
    update() {
    }
}
