const canvas = document.querySelector("#screen");
const ctx = canvas.getContext("2d");

/* constants */
const BG_COLOR = "#000000";
const COLOR = "#FA4616";

/* settings */
const CIRCLE_LINE_WIDTH = 5;
const CICLE_RADIUS = 200;
const POINTS_AMOUNT = 100;
const POINTS_RADIUS = 500;

/* util functions */
const degToRad = deg => deg * (Math.PI / 180);
const getPos = deg => { 
    return {
        x: Math.cos(deg) * CICLE_RADIUS, 
        y: Math.sin(deg) * CICLE_RADIUS
    } 
}

const drawCircle = (x, y, lineW, rad, stroke, fill) => {
    ctx.beginPath();
    ctx.lineWidth = lineW;
    ctx.arc(x, y, rad, 0, 2 * Math.PI, false);
    if (stroke) ctx.stroke();
    if (fill) ctx.fill();
    ctx.closePath();
}

const drawLine = (x1, y1, x2, y2) => {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.closePath();
}

/* variables */
let pointsArrL = [];
let pointsArrR = [];

let wave = 280;
let pulse = 1;

/* variable init */
for (let i = 0; i < POINTS_AMOUNT; i++) {
    let rotationDeg = i * degToRad(360 / (POINTS_AMOUNT * 4));
    let pos = getPos(rotationDeg);

    pointsArrL.push({
        x: pos.x,
        y: pos.y,
        rotationDeg
    });

    pointsArrR.push({
        x: -pos.x,
        y: -pos.y,
        rotationDeg
    })
}

/* loop */
ctx.translate(canvas.width / 2, canvas.height / 2);
const loop = () => {
    ctx.fillStyle = BG_COLOR;
    ctx.fillRect(-canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);

    ctx.strokeStyle = COLOR;
    drawCircle(0, 0, CIRCLE_LINE_WIDTH, CICLE_RADIUS, true, false);

    ctx.fillStyle = COLOR;
    for (let i = 0; i < POINTS_AMOUNT; i++) {
        let pointL = pointsArrL[i];
        let pointR = pointsArrR[i];

        let rotationDegL = pointL.rotationDeg;
        let rotationDegR = pointR.rotationDeg;

        // drawCircle(pointL.x, pointL.y, 0, POINTS_RADIUS, false, true);
        // drawCircle(pointR.x, pointR.y, 0, POINTS_RADIUS, false, true);

        ctx.lineWidth = 1.5 + Math.sin( i * (degToRad(360 / POINTS_AMOUNT)));
        //ctx.strokeStyle = `hsla(289, ${80 + Math.sin(wave) * 10}%, 50%, 1)`;
        drawLine(pointL.x, pointL.y, pointR.x, pointR.y);

        rotationDegL += degToRad(0.25 + Math.sin(degToRad(wave / Math.PI / 2)));
        const newPosL = getPos(rotationDegL);

        rotationDegR += -degToRad(0.13 + Math.sin(degToRad(wave / Math.PI / 4)));
        const newPosR = getPos(rotationDegR);

        pointsArrL[i].x = newPosL.x;
        pointsArrL[i].y = newPosL.y;
        pointsArrL[i].rotationDeg = rotationDegL;

        pointsArrR[i].x = newPosR.x;
        pointsArrR[i].y = newPosR.y;
        pointsArrR[i].rotationDeg = rotationDegR;
    }

    wave = (wave > 360) ? 0 : wave + pulse;
    requestAnimationFrame(loop);
}

loop();
