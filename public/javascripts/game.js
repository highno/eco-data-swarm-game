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

// load scenes
game.scene.add('titleScene', titleScene);
game.scene.add("game", gameScene);

// start title
game.scene.start('gameScene');
