// ========================================================================
export class Muro {

    static WIDTH = 896;
    static HEIGHT = 640;

    static tileXY = [64, 32];

    static array_muro = [
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,6,0,0,5,1,7,7,1,5,0,0,2,0],
        [0,8,0,0,2,1,7,7,1,2,0,0,8,0],
    
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,7,2,3,5,5,3,2,7,0,0,0],
        [0,0,0,8,8,8,8,8,8,8,8,0,0,0],
    
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,8,5,8,0,0,0,0,8,6,8,0,0],
        [0,0,8,4,8,0,0,0,0,8,4,8,0,0],
    
        [0,0,8,8,8,0,0,0,0,8,8,8,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    ];

    // ------------------------------------------------------------
    constructor(scene) {
        this.relatedScene = scene;
    }

    create() {

        this.ladrillo = this.relatedScene.physics.add.staticGroup();

        for (let i = 0; i < Muro.array_muro.length; i ++) {
            for (let ii = 0; ii < Muro.array_muro[i].length; ii ++) {

                const valor = Muro.array_muro[i][ii];

                if (valor !== 0) {
                    this.ladrillo.create(ii * Muro.tileXY[0], i * Muro.tileXY[1], `ladrillo${valor}`).setOrigin(0, 0);
                }
            }
        }

        console.log(this.ladrillo);
    }

    get() {
        return this.ladrillo;
    }
}

