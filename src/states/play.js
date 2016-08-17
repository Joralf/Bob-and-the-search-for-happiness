// src/states/play.js

import Phaser from 'phaser';
import { Wizard } from '../sprites/wizard';
import { Dog } from '../sprites/dog';
import { Background } from '../sprites/background';
import { Floor} from '../sprites/floor';

export class Play extends Phaser.State {
    create() {
        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        this.background = new Background(this.game, 0, 0);
        this.game.add.existing(this.background);

        this.dog = new Dog(this.game, 350, this.game.height * 0.8 - 200);
        this.game.add.existing(this.dog);

        this.floor = new Floor(this.game, 0, this.game.height * 0.8);
        this.game.add.existing(this.floor);

        this.cursors = this.game.input.keyboard.createCursorKeys();

    }

    update() {
        this.game.physics.arcade.collide(this.dog, this.floor);

        this.dog.move(this.cursors);
    }
}
