import Ball from './ball.js';
import { BALL } from './constants/ball.js';
import Controller from './controller.js';
import Painter from './painter.js';

export default class Game {

    constructor(context) {
        this.context = context;
    }

    initialize() {
        this.ball = new Ball(BALL.RADIUS, BALL.RADIUS, BALL.DEFAULT_COLOR);
        this.painter = new Painter(this.context, this.ball);
        this.controller = new Controller(this.ball);
        this.isMoving = false;
        this.painter.paintCorners();
        this.painter.paint();
    }

    update() {
        if (this.isMoving) {
            this.painter.reset();
            this.painter.paintCorners();
            this.isMoving = this.controller.moveBall();
            this.painter.paint();
        }
    }

    async onClick(x, y) {
        if (!this.isMoving && this.ball.contains(x, y)) {
            await this.controller.startMoving();
            this.isMoving = true;
        }
    }
}
