/** @type {HTMLCanvasElement} */


class hardBound {
    constructor(x, y, w, h, color) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.c = color;
    }

    draw = () => {
        ctx.beginPath();
        ctx.fillStyle = this.c;
        ctx.strokeStyle = this.c;
        ctx.fillRect(this.x, this.y, this.w, this.h);
        ctx.strokeRect(this.x, this.y, this.w, this.h);
        ctx.closePath();
    }
}