window.onload = function() {
    var canvas = new fabric.Canvas('c');
    var rect = new fabric.Rect({
        left: 100,
        top: 100,
        fill: 'red',
        height: 100,
        width: 100
    })

    var circle = new fabric.Circle({
        radius: 50,
        top: 200,
        left: 200,
        fill: 'green'
    })

    var triangle = new fabric.Triangle({
        width: 80,
        height: 100,
        fill: 'yellow'
    })
    canvas.add(rect)
    canvas.add(circle)
    canvas.add(triangle)
}