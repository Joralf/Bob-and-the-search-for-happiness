// src/sprites/dog.js

import Phaser from 'phaser';
import Global from '../config/global';

const GRAVITY = Global.gravity;

export class Crate extends Phaser.Sprite {
    constructor(game, x, y) {
        super(game, x, y, 'crate');
        this.game.physics.arcade.enable(this, Phaser.Physics.ARCADE);

        this.anchor.setTo(.5,.5);
        this.body.gravity.y = GRAVITY;
        this.body.collideWorldBounds = true;
        this.body.drag.x = 300;
    }
}
