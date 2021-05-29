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
      longText: 'Du nimmst an einem Bürgertalk zu der Thematik Nachhaltigkeit und Umweltschutz teil. Hier kannst du einen Kommunalpolitiker überzeugen Maßnahmen für mehr Umweltdatem für Eddie einzuleiten.',
      valueTextEddie: 'Karte hat mittelmäßige Wirkung auf Erhöhung der Sensordichte',
      valueEddie: 5,
      valueTextStress: 'Karte hat leicht anstrenge Wirkung auf deinen Stresslevel',
      valueStress: 2,
      valueTextCO2: 'Karte hat wenig Auswirkung auf CO2 Verbrauch',
      valueCO2: 1
    },
    {
      role: 'Citizen',
      shortDescription: 'Diskussionsrunde im Kommunalrat',
      longText: 'Du nimmst an einer Diskussionsrunde im Kommunalrat teil. Hier kannst du auf die Dringlichkeit hinweisen, dass Eddie einfach mehr Daten für Analyse zwecke benötigt.',
      valueTextEddie: 'Karte hat mittelmäßige Wirkung auf Erhöhung der Sensordichte',
      valueEddie: 5,
      valueTextStress: 'Karte hat sehr anstrenge Wirkung auf deinen Stresslevel',
      valueStress: 8,
      valueTextCO2: 'Karte hat wenig Auswirkung auf CO2 Verbrauch',
      valueCO2: 1
    },
    {
      role: 'Citizen',
      shortDescription: 'Stammtisch Nachhaltigkeit',
      longText: 'Der Stammtisch Nachhaltigkeit steht wieder an. In einer gemütlichen Runde konnte fanden sehr interessante entspannende Diskussionen statt.',
      valueTextEddie: 'Karte hat geringe Wirkung auf Erhöhung der Sensordichte',
      valueEddie: 1,
      valueTextStress: 'Karte hat leicht entspannende Wirkung auf deinen Stresslevel',
      valueStress: -1,
      valueTextCO2: 'Karte hat wenig Auswirkung auf CO2 Verbrauch',
      valueCO2: 1
    },
    {
      role: 'Citizen',
      shortDescription: 'Teilnahme deutschlandweite Hackathons',
      longText: 'Es ist wieder soweit. Ein spannendes Wochenende steht wiede bevor und Du versammelst Dich mit dem Open Social Innovation Netwerk und kannst Deine Gedanken platzieren und findest neue Mitstreiter',
      valueTextEddie: 'Karte hat hohe Wirkung auf Erhöhung der Sensordichte',
      valueEddie: 7,
      valueTextStress: 'Karte hat anstrenge Wirkung auf deinen Stresslevel',
      valueStress: 5,
      valueTextCO2: 'Karte hat mäßige Auswirkung auf CO2 Verbrauch',
      valueCO2: 6
    },
    {
      role: 'Citizen',
      shortDescription: 'Mitwirkung Initiativen Nachhaltigkeit',
      longText: 'Die nächsten Wochen bringst Du wieder sehr viel Kraft für Initiativen rund um Thematik Nachhaltigkeit auf. Auch wenn es sehr viel Spaß bringt, zehrt es doch etwas an Dir',
      valueTextEddie: 'Karte hat hohe Wirkung auf Erhöhung der Sensordichte',
      valueEddie: 10,
      valueTextStress: 'Karte hat sehr anstrenge Wirkung auf deinen Stresslevel',
      valueStress: 7,
      valueTextCO2: 'Karte hat mäßige Auswirkung auf CO2 Verbrauch',
      valueCO2: 4
    }


  ]
};
// load scenes
game.scene.add('titleScene', titleScene, false, gamedata);
game.scene.add("game", gameScene, false, gamedata);

// start title
game.scene.start('titleScene',gamedata);

