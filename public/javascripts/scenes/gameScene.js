class GameScene extends Phaser.Scene {

    //GameStats
    aiFeelingStartMin = 5;
    aiFeelingStartMax = 25;
    burnout = 1;
    aiFeelings = new Array(13);


    //UI
    texts = new Array(13);
    burnoutRect;

    deck;

    //Cards
    cards = new Array(3);
    titelText = new Array(3);
    descriptionText = new Array(3);
    eddieText = new Array(3);
    stressText = new Array(3);
    seperatorText = new Array(3);


    textPositions =
        [
            {x: 900, y: 150},   //Schleswig-Holstein
            {x: 900, y: 300},   // Niedersachsen
            {x: 750, y: 400},   // NRW
            {x: 750, y: 580},   // RLP
            {x: 720, y: 640},   // Saarland
            {x: 850, y: 530},   // Hessen
            {x: 850, y: 700},   // Baden
            {x: 1000, y: 650},  // Bayern
            {x: 1000, y: 500},  // Thüringen
            {x: 1030, y: 350},  //Sachsen-Anhalt
            {x: 1030, y: 200},  //Pom
            {x: 1130, y: 280},  //Brandenburg
            {x: 1130, y: 480},  //Sachsen
        ]

    constructor() {
        super({key: 'gameScene'});
    }

    init(data) {
        this.deck = data.cards;
        for (let i = 0; i < this.aiFeelings.length; i++) {
            this.aiFeelings[i] = this.aiFeelingStartMin + Math.floor(Math.random() * (this.aiFeelingStartMax - this.aiFeelingStartMin));
        }
    };

    preload() {
        this.load.image('map', './images/de-map.png');
    }

    create() {
        const mapSprite = this.add.image(960, 450, 'map');

        for (let i = 0; i < this.textPositions.length; i++) {
            this.texts[i] = this.add.text(this.textPositions[i].x, this.textPositions[i].y, this.aiFeelings[i] + "%");
        }

        this.add.rectangle(1420, 40, 200, 20, 0x4e5052);
        this.burnoutRect = this.add.rectangle(1420, 40, 200, 20, 0xff6699);

        this.add.text(1220, 30, "Burnout:");

        this.CreateCard(0, 30, 30);
        this.CreateCard(1, 300, 30);
        this.CreateCard(2, 330/2, 360);

    }

    update() {


    }


    end() {

    }

    DrawMap() {
        for (let i = 0; i < this.texts.length; i++) {
            this.texts[i].setText(this.aiFeelings[i] + "%");
        }
    }

    CreateCard(index, x, y) {

        var styleTitle = {
            fontSize: 14,
            fontFamily: 'monospace',
            align: "left",
            fontWeight : "bold",
            wordWrap: {width: 200, useAdvancedWrap: true}
        }

        var descriptionStyle = {
            fontSize: 12,
            fontFamily: 'monospace',
            align: "left",
            fill: "#ffffff",
            wordWrap: {width: 200, useAdvancedWrap: true}
        }

        var eddieStyle = {
            fontSize: 12,
            fontFamily: 'monospace',
            align: "left",
            fill: "#12ffaa",
            wordWrap: {width: 200, useAdvancedWrap: true}
        }

        var stressStyle = {
            fontSize: 12,
            fontFamily: 'monospace',
            align: "left",
            fill: "#ff12aa",
            wordWrap: {width: 200, useAdvancedWrap: true}
        }

        if(this.cards[index]) {
            this.cards[index].destroy();
            this.titelText[index].destroy();
            this.descriptionText[index].destroy();
            this.eddieText[index].destroy();
            this.stressText[index].destroy();
            this.seperatorText[index].destroy();
        }

        this.cards[index] = this.add.rectangle(x, y, 250, 300).setOrigin(0, 0);
        this.cards[index].setInteractive();
        this.cards[index].setStrokeStyle(4, 0xffffff);


        var deckIndex = Math.floor(Math.random() * this.deck.length);

        this.cards[index].on('pointerdown', () => this.ActivateCard(this.deck[deckIndex]));

        this.titelText[index] = this.add.text(x + 25, y + 5, this.deck[deckIndex].shortDescription, styleTitle);
        this.seperatorText[index] = this.add.text(x+25,this.titelText[index].height + this.titelText[index].y + 1 , "----------------------------", descriptionStyle);
        this.descriptionText[index] = this.add.text(x + 25, this.titelText[index].height + this.titelText[index].y + 15, this.deck[deckIndex].longText, descriptionStyle);
        this.eddieText[index] = this.add.text(x + 25, this.descriptionText[index].height + this.descriptionText[index].y + 15, this.deck[deckIndex].valueTextEddie,eddieStyle);
        this.stressText[index] = this.add.text(x + 25, this.eddieText[index].height + this.eddieText[index].y + 15, this.deck[deckIndex].valueTextStress,stressStyle);

    }

    ActivateCard(card) {
        this.burnout += card.valueStress;
        this.aiFeelings[Math.floor(Math.random() * this.aiFeelings.length)] += card.valueEddie;

        this.CreateCard(0, 30, 30);
        this.CreateCard(1, 300, 30);
        this.CreateCard(2, 330/2, 360);

        this.DrawMap();

        //if (this.burnout > 100) this.burnout = 100;
        if (this.burnout > 100) this.scene.start('gameOverScene',this.gameData);
        if(this.burnout < 0) this.burnout = 0;
        var sum = 0;
        for( var i = 0; i < this.aiFeelings.length; i++ ){
            sum += parseInt( this.aiFeelings[i], 10 ); 
        }
        var eddieScore = sum/this.aiFeelings.length;
        console.log('E.D.D.I.E. Score:' + eddieScore);
        if(eddieScore > 25)  this.scene.start('winScene',this.gameData); //Für MVP ist E.D.D.I.E. erstmal mit 25 %Average zufrieden.
        this.burnoutRect.setSize(200 * (this.burnout / 100), 20);
    }

}

export default GameScene;
