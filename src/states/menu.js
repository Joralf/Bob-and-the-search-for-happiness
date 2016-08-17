// src/states/menu.js

import Phaser from 'phaser';
import { Background } from '../sprites/background';

export class Menu extends Phaser.State{
    create() {
        this.background = new Background(this.game, 0, 0);
        this.game.add.existing(this.background);

        let textStyle = {font: '45px Arial', alight: 'center', stroke: 'grey', fill: 'black'};

        let title = this.game.add.text(this.game.world.centerX, this.game.world.centerY - 100, 'Bob and the Search for Happiness', textStyle);
        title.anchor.set(0.5);

        textStyle.font = '36px Arial';

        let instructions = this.game.add.text(this.game.world.centerX, this.game.world.centerY, '"enter" key to start', textStyle);
        instructions.anchor.set(0.5);

        let enterKey = this.game.input.keyboard.addKey(Phaser.KeyCode.ENTER);
        enterKey.onDown.addOnce( () => this.game.state.start('play'));
    }
}
