import { BALL } from './constants/ball.js';

export default class Ball {

    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
    }

    contains(x, y) {
        const dx = x - this.x;
        const dy = y - this.y;
        return dx * dx + dy * dy <= BALL.RADIUS * BALL.RADIUS; // Pythagoras Theorem
    }
}
