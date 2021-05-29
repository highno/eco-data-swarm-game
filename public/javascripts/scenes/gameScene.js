class GameScene extends Phaser.Scene {

    //GameStats
    aiFeelingStartMin = 5;
    aiFeelingStartMax = 25;
    burnout = 1;
    aiFeelings = new Array(13);


    //UI
    texts = new Array(13);
    burnoutRect;

    //Cards
    cards = new Array(3);
    titelText = new Array(3);
    descriptionText = new Array(3);
    eddieText = new Array(3);
    stressText = new Array(3);


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
        console.log(data.role);
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

        this.CreateCard(0, 32, 32);

    }

    update() {
        this.DrawMap();
        for (let i = 0; i < this.aiFeelings.length; i++) {
            this.aiFeelings[i] = this.aiFeelings[i];
        }

        if (this.burnout > 1000) this.burnout = 1000;
        this.burnoutRect.setSize(200 * (this.burnout / 1000), 20);

    }


    end() {

    }

    DrawMap() {
        for (let i = 0; i < this.texts.length; i++) {
            this.texts[i].setText(this.aiFeelings[i] + "%");
        }
    }

    CreateCard(index, x, y) {

        var style = {
            fontSize: 14,
            fontFamily: 'Arial',
            align: "left",
            wordWrap: {width: 150, useAdvancedWrap: true}
        }

        this.cards[index] = this.add.rectangle(x, y, 200, 300).setOrigin(0, 0);
        this.cards[index].setInteractive();
        this.cards[index].setStrokeStyle(4, 0xffffff);
        this.cards[index].on('pointerdown', () => this.clickButton("asdasdasd"));

        this.titelText[index] = this.add.text(x + 25, y + 5, "Titel", style);
        this.descriptionText[index] = this.add.text(x + 25, this.titelText[index].height + this.titelText[index].y + 5, "Descriptionasdasdasdasdasdassdasddasdasdasdasdasdasdas", style);
        this.eddieText[index] = this.add.text(x + 25, this.descriptionText[index].height + this.descriptionText[index].y + 5, "Description2",style);

    }

    ActivateCard(stats) {
        this.burnout += -stats.stress;
        this.aiFeelings[Math.floor(Math.random() * this.aiFeelings.length)] += -stats.eddie;
    }

}

export default GameScene;
