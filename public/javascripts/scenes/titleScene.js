class TitleScene extends Phaser.Scene {

	constructor() {
		super({key:'titleScene'});
	}

	preload() {
		this.load.image('background', 'images/background.jpg');
	}

	create() {
		 var bg = this.add.sprite(0,0,'background');
		  bg.setOrigin(0,0);

		  var text = this.add.text(100,100, 'Welcome to our serious game eco-data-swarm!');
	}

}

export default TitleScene;