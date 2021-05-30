class GameOverScene extends Phaser.Scene {

	constructor() {
		super({key:'gameOverScene'});
	}
    init(gameData) {
        console.log(gameData.cards[1].shortDescription);
    };
	preload() {
		this.load.image('background', './images/background.jpg');
        this.load.image('citizen', './images/boy.png');
        this.load.image('scientist', './images/catgirl.png');
        this.load.image('journalist', './images/princess.png');
        this.load.image('politician', './images/horngirl.png');
        this.load.image('nerd', './images/pinkgirl.png');
	}

	create() {
		 var bg = this.add.sprite(0,0,'background');

     	 bg.setOrigin(0,0);
         //imgCitizen.setOrigin(0,0);

		  var text = this.add.text(100,100, 'Du hast leider Verloren und stresslevel überreizt!');
		  var text = this.add.text(100,150, 'zum Neustarten einfach Browser aktualisieren');

          var text = this.add.text(100,170, 'Infos und Feedback an eco-data-swarm@gmail.com');
          
	}
/*
    clickButton(role) {
        console.log(""+role);
        this.gameData.role = role;
        this.scene.start('gameScene',this.gameData);
    }
*/
}

export default TitleScene;