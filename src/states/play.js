// src/states/play.js

import Phaser from 'phaser';
import { Dog } from '../sprites/dog';
import { Background } from '../sprites/background';
import { Floor} from '../sprites/floor';
import { Crate } from '../sprites/crate';

export class Play extends Phaser.State {
    create() {
        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        this.background = new Background(this.game, 0, 0);
        this.game.add.existing(this.background);

        this.dog = new Dog(this.game, 350, this.game.height * 0.8 - 200);
        this.game.add.existing(this.dog);

        this.floor = new Floor(this.game, 0, this.game.height * 0.8);
        this.game.add.existing(this.floor);

        this.crate = new Crate(this.game, this.game.world.centerX, this.game.world.centerY);
        this.game.add.existing(this.crate);

        this.cursors = this.game.input.keyboard.createCursorKeys();
        this.spacebar = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        this.game.input.keyboard.addKeyCapture([ Phaser.Keyboard.SPACEBAR ]);
    }

    update() {
        this.game.physics.arcade.collide(this.dog, this.floor);
        this.game.physics.arcade.collide(this.crate, this.floor);

        // @NOTE: add check if pickup
        this.game.physics.arcade.collide(this.dog, this.crate, null, this.dog.pickup);

        this.dog.move(this.cursors, this.spacebar);
    }
}
