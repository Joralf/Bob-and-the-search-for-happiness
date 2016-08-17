// src/sprites/dog.js

import Phaser from 'phaser';
const SPEED = 200;
let jumping = false;

export class Dog extends Phaser.Sprite {
    constructor(game, x, y) {
        super(game, x, y, 'dog');
        this.game.physics.arcade.enable(this, Phaser.Physics.ARCADE);

        //@TODO: fix animatons, spritesheet is pretty much broken
        this.animations.add('walk', [8, 9, 10, 11, 12]);
        this.animations.add('stand', [0]);
        this.animations.add('sit', [4]);

        this.anchor.setTo(.5,.5);
        this.body.gravity.y = 500;
        this.body.collideWorldBounds = true;
    }

    move(cursors) {
        if (cursors.left.isDown) {
            this.scale.x = 1;
            this.body.velocity.x = -SPEED;
            this.animations.play('walk', 10, true);
        } else if (cursors.right.isDown) {
            this.scale.x = -1;
            this.body.velocity.x = SPEED;
            this.animations.play('walk', 10, true);
        } else if (cursors.down.isDown) {
            this.body.velocity.x = 0;
            this.animations.play('sit', 10, true);
        } else {
            this.animations.play('stand', 10, true);
            this.body.velocity.x = 0;
        }

        if (cursors.up.isDown) {
            this.body.velocity.y = -100;

        } else {
            this.body.velocity.y = 0;
        }


    }
}
