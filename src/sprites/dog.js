// src/sprites/dog.js
import { Crate } from '../sprites/crate';

import Phaser from 'phaser';
import Global from '../config/global';

const SPEED = 200;
const GRAVITY = Global.gravity;

let pickupAction = false;
let dogCovered = false;
let objectCarrying = null;

export class Dog extends Phaser.Sprite {
    constructor(game, x, y) {
        super(game, x, y, 'dog');
        this.game.physics.arcade.enable(this, Phaser.Physics.ARCADE);

        //@TODO: fix animatons, spritesheet is pretty much broken
        this.animations.add('walk', [8, 9, 10, 11]);
        this.animations.add('stand', [0]);
        this.animations.add('sit', [4]);
        this.animations.add('hide', [12]);
        this.animations.add('jump', [13]);

        this.anchor.setTo(.5,.5);
        this.body.gravity.y = GRAVITY;
        this.body.collideWorldBounds = true;

    }

    moveLeft() {
      this.scale.x = 1;
      this.body.velocity.x = -SPEED;
      if (dogCovered) {
        this.animations.play('hide', 10, true);
      } else {
        this.animations.play('walk', 10, true);
      }
    }

    moveRight() {
      this.scale.x = -1;
      this.body.velocity.x = SPEED;
      if (dogCovered) {
        this.animations.play('hide', 10, true);
      } else {
        this.animations.play('walk', 10, true);
      }
    }

    duck() {
      this.body.velocity.x = 0;
      if (dogCovered) {
        this.animations.play('hide', 10, true);
      } else {
        this.animations.play('sit', 10, true);
      }
    }

    stand() {
      if (dogCovered) {
        this.animations.play('hide', 10, true);
      } else {
        this.animations.play('stand', 10, true);
      }
      this.body.velocity.x = 0;
    }

    pickup() {
      pickupAction = true;
    }

    release() {
      pickupAction = false;
      if (dogCovered) {
        dogCovered = false;
        this.crate = new Crate(this.game, this.dog.centerX, this.dog.centerY);
        this.game.add.existing(this.crate);
      }
    }

    pickupObject(dog, object) {
      if (pickupAction) {
        object.destroy();
        dogCovered = true;
        return false;
      }
    }

    jump() {
      this.body.velocity.y = -190;
    }
}
