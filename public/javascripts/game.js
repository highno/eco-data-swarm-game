import TitleScene from './scenes/titleScene.js';
import GameScene from './scenes/gameScene.js';

// Our game scene
var gameScene = new GameScene();
var titleScene = new TitleScene();


//* Game scene */
var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600
};
var game = new Phaser.Game(config);

var gamedata = {
  role: ''
};
// load scenes
game.scene.add('titleScene', titleScene, false, gamedata);
game.scene.add("game", gameScene, false, gamedata);

// start title
game.scene.start('titleScene');

