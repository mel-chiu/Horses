
let canvas;
let ctx = document.getElementById('canvas').getContext('2d');
let animation = [];
let horses = [];

let image = new Image();
image.src = "horseRun.png"

image.onload = function () {
    let totalFrames = 6;
    let imgNum = 0;
    let imgWidth = image.width;
    let imgHeight = image.height;
    let spriteSize = imgWidth / totalFrames;

    setInterval(function () {
        ctx.clearRect(0, 0, 500, 500)

        imgNum++;
        imgNum = imgNum % totalFrames;

        ctx.drawImage(image,
            imgNum * spriteSize, 0,
            spriteSize, imgHeight,
            50, 50,
            spriteSize, imgHeight);
    }, 100)
}















// Horses spritesheet source : [https://opengameart.org/content/animated-horse] ScratchIO, thanks for sharing!