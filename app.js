import Game from './lib/game.js';

const FPS = 300; // SPEED OF THE BALL

let context, game;

window.onload = function () {
    let canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');

    game = new Game(context);
    game.initialize();

    document.getElementById('canvas')
        .addEventListener('click', (event) => {
                game.onClick(event.offsetX, event.offsetY);
            }
        );

    setInterval(() => {
        game.update();
    }, 1000 / FPS);
}
