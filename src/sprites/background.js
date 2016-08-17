// src/sprites/dog.js

import Phaser from 'phaser';

export class Background extends Phaser.Sprite {
    constructor(game, x, y) {
        super(game, x, y, 'background');

        this.x = x;
        this.y = y;
        this.height = game.height;
        this.width = game.width;
    }
}
