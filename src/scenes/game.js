// =========================================================================================
//  D O N K E Y - J O N  4
// 
// -----------------------------------------------------------------------------------------
import { loader } from './loader.js';
import { Muro } from './../components/muro.js';
import { Jugador } from './../components/jugador.js';
import { Bola } from './../components/bola.js';
import { Marcador } from './../components/marcador.js';

// --------------------------------------------------------------
export class Game extends Phaser.Scene {

  constructor() {
    super({ key: 'game' });
  }

  init() {
    this.marcadores = {
      puntos: 0,
      nivel: 1,
      vidas: 3
    };

    this.muro = new Muro(this);
    this.jugador = new Jugador(this);
    this.bola = new Bola(this);
    // this.marcador = new Marcador(this);
  }

  preload() {
    this.escala = loader(this);
  }

  create() {

    const nivel = this.marcadores.nivel;

    // this.add.image(0, 0, 'fondo1').setOrigin(0, 0).setScale(0.7, 0.5);
    this.add.image(0, 0, `fondo${nivel}`).setOrigin(0, 0).setDepth(-20).setScale(this.escala[nivel][0], this.escala[nivel][1]);

    // this.cameras.main.setBounds(0, 0, 800, 550 * 2);
    this.physics.world.setBounds(0, 0, this.sys.game.config.width, this.sys.game.config.height);
    this.physics.world.setBoundsCollision(true, true, true, false);

    this.muro.create();
    this.jugador.create(this.sys.game.config.width, this.sys.game.config.height);
    this.bola.create(this.jugador.get().x, this.jugador.get().y);
    // this.marcador.create();
    
    this.physics.add.collider(this.jugador.get(), this.bola.get(), (jugador, bola) => {
      
      this.bola.get().setVelocityX((this.bola.get().x - this.jugador.get().x) * Bola.MAS_ESCORADA);

    }, null, this);

    this.keyCodes = this.input.keyboard.on('keydown', event => {
      console.log(event.key, event.keyCode);

      if (this.bola.get().getData('inmovil') && (event.keyCode === 32 || event.key === 'ArrowUp')) {
          this.bola.get().setData('inmovil', false);
      }
    });
  }
  
  // ================================================================
  update() {

    this.jugador.update();

    if (this.bola.get().getData('inmovil')) {
      this.bola.get().setVelocityY(-Bola.VEL_Y);
    }

    // this.bola.update();
    // this.marcador.update(this.jugador.get().x, this.jugador.get().y);
  }
}
