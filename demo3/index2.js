window.onload = function() {
    var canvas = new fabric.Canvas('c');

    fabric.Image.fromURL('1.png', oImg => {
        oImg.scale(0.1);
        canvas.add(oImg);
    })
}