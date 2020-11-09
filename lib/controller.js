import ColorService from './color-service.js';
import { BALL } from './constants/ball.js';
import { CANVAS } from './constants/canvas.js';
import { DIRECTION } from './constants/direction.js';

export default class Controller {

    constructor(ball) {
        this.ball = ball;
        this.direction = DIRECTION.UP;
        this.colorService = new ColorService();
    }

    /**
     * @returns {boolean} If move was successful
     */
    moveBall() {
        switch (this.direction) {
            case DIRECTION.LEFT:
                if (this.ball.x <= BALL.RADIUS) {
                    return false;
                }
                this.ball.x--;
                return true;
            case DIRECTION.RIGHT:
                if (this.ball.x >= CANVAS.WIDTH - BALL.RADIUS) {
                    return false;
                }
                this.ball.x++;
                return true;
            case DIRECTION.UP:
                if (this.ball.y <= BALL.RADIUS) {
                    return false;
                }
                this.ball.y--;
                return true;
            case DIRECTION.DOWN:
                if (this.ball.y >= CANVAS.HEIGHT - BALL.RADIUS) {
                    return false;
                }
                this.ball.y++;
                return true;
        }
    }

    async startMoving() {
        await this.changeColor();
        this.changeDirection();
    }

    async changeColor() {
        await this.colorService.getRandomColor()
            .then(
                (color) => {
                    this.ball.color = color;
                }
            )
    }

    changeDirection() {
        switch (this.direction) {
            case DIRECTION.LEFT:
                this.direction = DIRECTION.UP;
                break;
            case DIRECTION.RIGHT:
                this.direction = DIRECTION.DOWN;
                break;
            case DIRECTION.UP:
                this.direction = DIRECTION.RIGHT;
                break;
            case DIRECTION.DOWN:
                this.direction = DIRECTION.LEFT;
                break;
        }
    }
}
