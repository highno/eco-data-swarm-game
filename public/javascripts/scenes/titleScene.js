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

		  var text = this.add.text(100,100, 'Welcome to our serious game eco-data-swarm!');
          var text2 = this.add.text(100,150, 'Wähle deine Rolle!');
          var buttonCitizen = this.add.rectangle(160,300,250,120, 0x8f8f8f);
          var buttonScientist = this.add.rectangle(460,300,250,120, 0x8f8f8f);
          var buttonJournalist = this.add.rectangle(760,300,250,120, 0x8f8f8f);
          var buttonPolitician = this.add.rectangle(1060,300,250,120, 0x8f8f8f);
          var buttonNerd = this.add.rectangle(1360,300,250,120, 0x8f8f8f);

          var textCitizen = this.add.text(100,300, 'Bürger');
          var textScientist = this.add.text(400,300, 'Wissenschaftler');
          var textJournalist = this.add.text(700,300, 'Journalist');
          var textPolitician = this.add.text(1000,300, 'Politiker');
          var textNerd = this.add.text(1300,300, 'Nerd');
          var imgCitzen = this.add.sprite(70,300,'citizen');
          var imgScientist = this.add.sprite(370,300,'scientist');
          var imgJournalist = this.add.sprite(670,300,'journalist');
          var imgPolitician = this.add.sprite(970,300,'politician');
          var imgNerd = this.add.sprite(1270,300,'nerd');

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