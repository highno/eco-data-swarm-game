import TitleScene from './scenes/titleScene.js';
import GameScene from './scenes/gameScene.js';

// Our game scene
var gameScene = new GameScene();
var titleScene = new TitleScene();


//* Game scene */
var config = {
  type: Phaser.AUTO,
  width: 1900,
  height: 900,
  backgroundColor: '0x000000',
};
var game = new Phaser.Game(config);

var gamedata = {
  role: '',
  cards: [
    {
      role: 'Citizen',
      shortDescription: 'Fridays4Future',
      longText: 'Du nimmst an einem einer Fridays4Future Veranstaltung teil und kannst viele überzeugen, dass es Sinn macht unseren Eddie mit Umweltdaten zu Füttern',
      valueTextEddie: 'Karte hat mittelmäßige Wirkung auf Erhöhung der Sensordichte',
      valueEddie: 5,
      valueTextStress: 'Karte hat entspannende Wirkung auf deinen Stresslevel',
      valueStress: -3,
      valueTextCO2: 'Karte hat mittelmäßige Auswirkung auf CO2 Verbrauch',
      valueCO2: 3
    },
    {
      role: 'Citizen',
      shortDescription: 'Bürgertalks zu Nachhaltigkeit',
      longText: 'Du nimmst an einem Bürgertalk zu der Thematik teil. Hier kannst du einen Kommunalpolitiker überzeugen Maßnahmen für mehr Umweltdatem für Eddie einzuleiten.',
      valueTextEddie: 'Karte hat mittelmäßige Wirkung auf Erhöhung der Sensordichte',
      valueEddie: 5,
      valueTextStress: 'Karte hat leicht anstrenge Wirkung auf deinen Stresslevel',
      valueStress: 2,
      valueTextCO2: 'Karte hat wenig Auswirkung auf CO2 Verbrauch',
      valueCO2: 1
    }
  ]
};
// load scenes
game.scene.add('titleScene', titleScene, false, gamedata);
game.scene.add("game", gameScene, false, gamedata);

// start title
game.scene.start('titleScene',gamedata);

