class TitleScene extends Phaser.Scene {

	constructor() {
		super({key:'titleScene'});
	}

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
          buttonScientist.setInteractive({ useHandCursor: true });
          buttonJournalist.setInteractive({ useHandCursor: true });
          buttonPolitician.setInteractive({ useHandCursor: true });
          buttonNerd.setInteractive({ useHandCursor: true });
	}

}

export default TitleScene;