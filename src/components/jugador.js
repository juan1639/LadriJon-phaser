
// =======================================================================
export class Jugador {

    static VEL_X = 420;
    static ACEL_X = 900;
    static VEL_Y = 0;

    static sizeXY = [128, 32];

    // ------------------------------------------------------------
    constructor(scene) {
        this.relatedScene = scene;
    }

    create(WIDTH, HEIGHT) {

        this.jugador = this.relatedScene.physics.add.sprite(Math.floor(WIDTH / 2), Math.floor(HEIGHT / 1.1), 'jugador');

        this.jugador.setData('vel-x', Jugador.VEL_X);
        this.jugador.setData('acel-x', Jugador.ACEL_X);
        this.jugador.setData('vel-y', Jugador.VEL_Y);

        this.jugador.setCollideWorldBounds(true);
        this.jugador.setImmovable(true);
        this.jugador.setBounce(0.1);

        this.controles = this.relatedScene.input.keyboard.createCursorKeys();
        
        console.log(this.jugador);
    }

    update() {

        if (this.controles.left.isDown) {
            // this.jugador.setVelocityX(-this.jugador.getData('vel-x'));
            this.jugador.setAccelerationX(-this.jugador.getData('acel-x'));

        } else if (this.controles.right.isDown) {
            // this.jugador.setVelocityX(this.jugador.getData('vel-x'));
            this.jugador.setAccelerationX(this.jugador.getData('acel-x'));

        } else {
            this.jugador.setAccelerationX(0);
        }

        if (this.controles.up.isDown) {
            console.log('disparo');
        }
    }

    get() {
        return this.jugador;
    }
}

