class TitleScene extends Phaser.Scene {

	constructor() {
		super({key:'titleScene'});
	}
    init(gameData) {
        console.log(gameData.cards[1].shortDescription);
        this.gameData = gameData;
    };
	preload() {
		this.load.image('background', './images/background.jpg');
	}

	create() {
		 var bg = this.add.sprite(0,0,'background');
		  bg.setOrigin(0,0);

		  var text = this.add.text(100,100, 'Welcome to our serious game eco-data-swarm!');
          var text2 = this.add.text(100,150, 'Wähle deine Rolle!');
          var box = this.add.rectangle(160,300,180,40, 0x8f8f8f);
          var box = this.add.rectangle(360,300,180,40, 0x8f8f8f);
          var box = this.add.rectangle(560,300,180,40, 0x8f8f8f);
          var box = this.add.rectangle(160,350,180,40, 0x8f8f8f);
          var box = this.add.rectangle(360,350,180,40, 0x8f8f8f);

          var buttonCitizen = this.add.text(100,300, 'Bürger');
          var buttonScientist = this.add.text(300,300, 'Wissenschaftler');
          var buttonJournalist = this.add.text(500,300, 'Journalist');
          var buttonPolitician = this.add.text(100,350, 'Politiker');
          var buttonNerd = this.add.text(300,350, 'Nerd');

          buttonCitizen.setInteractive({ useHandCursor: true });
          buttonCitizen.on('pointerdown', () => this.clickButton('Citizen'));
          buttonScientist.setInteractive({ useHandCursor: true });
          buttonScientist.on('pointerdown', () => this.clickButton('Scientist'));
          buttonJournalist.setInteractive({ useHandCursor: true });
          buttonJournalist.on('pointerdown', () => this.clickButton('Journalist'));
          buttonPolitician.setInteractive({ useHandCursor: true });
          buttonPolitician.on('pointerdown', () => this.clickButton('Politician'));
          buttonNerd.setInteractive({ useHandCursor: true });
          buttonNerd.on('pointerdown', () => this.clickButton('Nerd'));
          
	}
    clickButton(role) {
        console.log(""+role);
        this.gameData.role = role;
        this.scene.start('gameScene',this.gameData);
    }

}

export default TitleScene;