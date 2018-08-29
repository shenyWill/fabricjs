window.onload = function() {
    var canvas = new fabric.Canvas('c');
    var path = new fabric.Path('M 0 0 L 200 100 L 170 200 z');

    path.set({
        left: 120,
        top: 120,
        fill: 'green'
    })

    canvas.add(path);
}