class GameScene extends Phaser.Scene {

	constructor() {
		super({key : 'gameScene'});
	}

	init() {
		
	};

	preload() {
		console.log(""+ Scene.settings.data);
	}

	create() {
        var text2 = this.add.text(100,150, 'Deine Rolle ist '+ Scene.settings.data +'!');

	}

	update() {

	}


	end() {
		
	}

}

export default GameScene;