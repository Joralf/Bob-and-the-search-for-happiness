// src/sprites/dog.js

import Phaser from 'phaser';
import Global from '../config/global';

const SPEED = 200;
const GRAVITY = Global.gravity;
let pickupAction = false;
let dogCovered = false;

export class Dog extends Phaser.Sprite {
    constructor(game, x, y) {
        super(game, x, y, 'dog');
        this.game.physics.arcade.enable(this, Phaser.Physics.ARCADE);

        //@TODO: fix animatons, spritesheet is pretty much broken
        this.animations.add('walk', [8, 9, 10, 11]);
        this.animations.add('stand', [0]);
        this.animations.add('sit', [4]);
        this.animations.add('hide', [12]);

        this.anchor.setTo(.5,.5);
        this.body.gravity.y = GRAVITY;
        this.body.collideWorldBounds = true;
    }

    move(cursors, spacebar) {
        // @NOTE1: dirty dirty dirty, maybe use an interface for doing the animations?
        // @NOTE2: dog specific behaviour should be here, but controls should be in play.js
        if (cursors.left.isDown) {
            this.scale.x = 1;
            this.body.velocity.x = -SPEED;
            if (dogCovered) {
              this.animations.play('hide', 10, true);
            } else {
              this.animations.play('walk', 10, true);

            }
        } else if (cursors.right.isDown) {
            this.scale.x = -1;
            this.body.velocity.x = SPEED;
            if (dogCovered) {
              this.animations.play('hide', 10, true);
            } else {
              this.animations.play('walk', 10, true);
            }
        } else if (cursors.down.isDown) {
            this.body.velocity.x = 0;
            if (dogCovered) {
              this.animations.play('hide', 10, true);
            } else {
              this.animations.play('sit', 10, true);
            }
        } else {
            if (dogCovered) {
              this.animations.play('hide', 10, true);
            } else {
              this.animations.play('stand', 10, true);

            }
            this.body.velocity.x = 0;
        }

        if (spacebar.isDown) {
          pickupAction = true;
        } else {
          pickupAction = false;
        }
    }

    pickup(dog, object) {
      console.log("dog", dog);
      console.log("object", object);

      console.log(pickupAction);

      if (pickupAction) {
        object.destroy();
        dogCovered = true;
        console.log("destroy object");
        return false;
      }
    }
}
