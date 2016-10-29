
import Phaser from 'phaser';

export class Tree extends Phaser.Sprite {
    constructor(game, x, y) {
        super(game, x, y, 'tree');
        this.game.physics.arcade.enable(this, Phaser.Physics.ARCADE);

        this.anchor.setTo(.5,.8);
    }
}
