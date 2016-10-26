// src/states/load.js

import Phaser from 'phaser';

export class Load extends Phaser.State {
    preload() {
       let textStyle = {font: '45px Arial', alight: 'center', stroke: 'blue', fill: 'blue'};

       this.game.add.text(80, 150, 'loading...', textStyle);
       this.game.load.spritesheet('dog', '../assets/dog_sprite_sheetx4.gif', 65, 44, 16);
       this.game.load.image('background', '../assets/background.jpg');
       this.game.load.image('blacksquare', '../assets/blacksquare.jpg');
       this.game.load.image('crate', '../assets/cratesmall.png');
     }

    create() {
        this.game.state.start('play');
    }
}
