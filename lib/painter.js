import { BALL } from './constants/ball.js';
import { CANVAS } from './constants/canvas.js';

export default class Painter {

    constructor(context, ball) {
        this.context = context;
        this.ball = ball;
    }

    reset() {
        this.context.clearRect(0, 0, CANVAS.WIDTH, CANVAS.HEIGHT);
    }

    /**
     * Because css border radius just doesn't do the job right
     */
    paintCorners() {
        const numberOfCornersInSquare = 4;
        for (let i = 0; i < numberOfCornersInSquare; i++) {
            const location = this.getCornerLocation(i);
            this.context.strokeStyle = CANVAS.WALL_COLOR;
            this.context.lineWidth = 8;
            this.context.beginPath();
            this.context.arc(
                location.x,
                location.y,
                BALL.RADIUS + 4,
                i * 0.5 * Math.PI,
                (i + 1) * 0.5 * Math.PI
            );
            this.context.stroke();
        }
    }

    paint() {
        this.context.fillStyle = this.ball.color;
        this.context.beginPath();
        this.context.arc(
            this.ball.x,
            this.ball.y,
            BALL.RADIUS,
            0,
            2 * Math.PI);
        this.context.closePath();
        this.context.fill();
    }

    /**
     * @param cornerNumber counted from top-left = 0 clockwise to bottom-left = 3
     *
     * @returns {x, y} location tuple
     */
    getCornerLocation(cornerNumber) {
        switch (cornerNumber) {
            case 0:
                return {x: CANVAS.WIDTH - BALL.RADIUS, y: CANVAS.HEIGHT - BALL.RADIUS};
            case 1:
                return {x: BALL.RADIUS, y: CANVAS.HEIGHT - BALL.RADIUS};
            case 2:
                return {x: BALL.RADIUS, y: BALL.RADIUS};
            case 3:
                return {x: CANVAS.WIDTH - BALL.RADIUS, y: BALL.RADIUS};
        }
    }
}
