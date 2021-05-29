class GameScene extends Phaser.Scene {

    aiFeelingStartMin = 5;
    aiFeelingStartMax = 25;
    aiFeelings = new Array(13);
    texts = new Array(13);
    burnout = 1;
    burnoutRect;
    card0;
    card1;
    card2;
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

        this.card0 = this.add.graphics();
        this.card1 = this.add.graphics();
        this.card2 = this.add.graphics();


        this.card0.lineStyle(2, 0xffff00, 1);
        this.card0.strokeRoundedRect(32, 32, 200, 300, 32);

        this.card1.lineStyle(2, 0xffff00, 1);
        this.card1.strokeRoundedRect(252, 32, 200, 300, 32);

        this.card2.lineStyle(2, 0xffff00, 1);
        this.card2.strokeRoundedRect(252, 352, 200, 300, 32);

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

    DrawCard() {

    }

}

export default GameScene;
