// src/states/play.js

import Phaser from 'phaser';
import { Dog } from '../sprites/dog';
import { Background } from '../sprites/background';
import { Floor} from '../sprites/floor';
import { Crate } from '../sprites/crate';
import { Tree } from '../sprites/tree';


export class Play extends Phaser.State {
    create() {
        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        this.background = new Background(this.game, 0, 0);
        this.game.add.existing(this.background);

        this.rope = new Phaser.Line();

        this.tree = new Tree(this.game, this.game.world.centerX, this.game.height * 0.72);
        this.game.add.existing(this.tree);

        this.dog = new Dog(this.game, 350, this.game.height * 0.8 - 20);
        this.game.add.existing(this.dog);

        this.floor = new Floor(this.game, 0, this.game.height * 0.8);
        this.game.add.existing(this.floor);

        this.crate = new Crate(this.game, this.game.world.centerX - 100, this.game.height * 0.8 - 25);
        this.game.add.existing(this.crate);




        this.game.input.keyboard.addKeyCapture([ Phaser.Keyboard.SPACEBAR ]);


        this.cursors = this.game.input.keyboard.createCursorKeys();
        this.pickupKey = this.game.input.keyboard.addKey(Phaser.Keyboard.F);
        this.pickupKey.onDown.add(this.dog.pickup, this);
        this.pickupKey.onUp.add(this.dog.release, this)

        this.spacebar = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        this.spacebar.onDown.add(this.dog.jump, this.dog);

    }

    update() {
        this.game.physics.arcade.collide(this.dog, this.floor);
        this.game.physics.arcade.collide(this.crate, this.floor);

        // @NOTE: add check if pickup
        this.game.physics.arcade.collide(this.dog, this.crate, null, this.dog.pickupObject);

        if (this.cursors.left.isDown) {
          this.dog.moveLeft()
        } else if (this.cursors.right.isDown) {
          this.dog.moveRight()
        } else if (this.cursors.down.isDown) {
          this.dog.duck()
        } else {
          this.dog.stand()
        }

        this.rope.fromSprite(this.tree, this.dog, 0);

    }

    render() {
      this.game.debug.geom(this.rope, 'black');

    }
}
