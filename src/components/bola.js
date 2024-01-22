// ========================================================================================
export class Bola {

    static VEL_X = 200;
    static VEL_Y = -200;
    static ACEL_X = 1200;
    static ACEL_Y = 900;

    static MAS_ESCORADA = 9;
    static sizeXY = [16, 16];

    // -----------------------------------------------------
    constructor(scene) {
        this.relatedScene = scene;
    }

    create(x, y) {

        this.bola = this.relatedScene.physics.add.sprite(x, y - Bola.sizeXY[1] * 2, 'bola');

        this.bola.setData('inmovil', true);
        this.bola.setData('vel-x', 0);
        this.bola.setData('vel-y', 0);
        this.bola.setData('acel-x', Bola.ACEL_X);
        this.bola.setData('acel-y', Bola.ACEL_Y);

        this.bola.allowGravity = false;
        if (this.bola.getData('inmovil')) this.bola.allowGravity = true;

        // this.bola.setAcceleration(this.bola.getData('acel-x'), this.bola.getData('acel-y'));
        this.bola.setVelocity(this.bola.getData('vel-x'), this.bola.getData('vel-y'));

        this.bola.setCollideWorldBounds(true).setBounce(1).setDepth(-10);

        const shadowFX = this.bola.postFX.addShadow(-5, 5, 0.06, 0.5, 0x111111, 2, .8);

        this.controles = this.relatedScene.input.keyboard.createCursorKeys();

        console.log(this.bola, this.bola.body.height, this.bola.body.y);
    }

    update() {
    }

    get() {
        return this.bola;
    }
}
