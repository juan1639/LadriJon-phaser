// ====================================================================================
export function loader(scene) {

  const array_datosFondos = [
    [0.7, 0.5, '.jpg'],
    [0.7, 0.8, '.jpg'],
    [0.7, 0.75, '.png'],
    [0.7, 0.8, '.jpg']
  ];

  const NRO_FONDOS = 4;

  for (let i = 0; i < NRO_FONDOS; i ++) {
    const index = i + 1;
    let extension = array_datosFondos[i][2];
    
    scene.load.image(`fondo${index}`, `./src/img/fondo-mosaico${index}${extension}`);
  }

  // -------------------------------------------------------------------------
  const COLORES_LADRILLO = 8;

  for (let i = 0; i < COLORES_LADRILLO; i ++) {
    const color = i + 1;
    scene.load.image(`ladrillo${color}`, `./src/img/ladrillo${color}.png`);
  }

  scene.load.image('jugador', './src/img/arka-plataforma.png');

  scene.load.image('bola', './src/img/arka-bola.png');

  // scene.load.image('gameover', './src/img/gameover.png');

  return array_datosFondos;
}
