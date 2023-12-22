import { Game } from './scenes/game.js';
// import { Congratulations } from './scenes/congratulations.js';
// import { Gameover } from './scenes/gameover.js';

const config = {
  type: Phaser.AUTO,
  width: 896,
  height: 640,
  scene: [Game],
  physics: {
    default: 'arcade',
    arcade: {
      physics: { y: 700 },
      debug: false
    }
  },
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  // audio: {
  //   disableWebAudio: true
  // }
}

var game = new Phaser.Game(config);
