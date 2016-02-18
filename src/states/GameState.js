class GameState extends Phaser.State {

	preload() {
		this.game.load.image('background', '../styles/images/background.jpg');
		// 63x44, 14 sprites
		this.game.load.spritesheet('dog', '../styles/images/dog/dog_sprite_sheetx4.gif', 65, 44, 14);

	}

	create() {
		let background = this.game.add.sprite(0, 0, 'background');
		background.x = 0;
		background.y = 0;
		background.height = this.game.height;
		background.width = this.game.width;

		this.dog = this.game.add.sprite(300, 200, 'dog');
		this.dog.anchor.setTo(.5,.5);

		this.game.physics.arcade.enable(this.dog);
		this.dog.body.gravity.y = 700;
		this.dog.body.collideWorldBounds = true;

		//  Here we add a new animation called 'walk'
		//  Because we didn't give any other parameters it's going to make an animation from all available frames in the 'mummy' sprite sheet
		this.dog.animations.add('walk', [8, 9, 10, 11, 12]);
		this.dog.animations.add('stand', [0]);

		//  And this starts the animation playing by using its key ("walk")
		//  30 is the frame rate (30fps)
		//  true means it will loop when it finishes

		//input cursors
		this.cursors = this.game.input.keyboard.createCursorKeys();

	}

	update() {
		//  Move to the left
		if (this.cursors.left.isDown)
		{
			this.dog.scale.x = 1;
			this.dog.body.velocity.x = -200;
			this.dog.animations.play('walk', 10, true);
		}
		//  Move to the right
		else if (this.cursors.right.isDown)
		{
			this.dog.scale.x = -1;
			this.dog.body.velocity.x = 200;
			this.dog.animations.play('walk', 10, true);
		}
		// Don't move
		else {
			this.dog.body.velocity.x = 0;
			this.dog.animations.play('stand', 10, true);
		}
	}
}

export default GameState;
