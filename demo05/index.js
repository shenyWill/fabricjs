window.onload = function() {
    var canvas = new fabric.Canvas('c');
    
    var rect = new fabric.Rect({
        left: 100,
        top: 100,
        height: 100,
        width: 100,
        fill: 'green'
    })
    rect.set('angle', 45);
    rect.animate('angle', '+=360', {
        onChange: canvas.renderAll.bind(canvas),
        duration: 2000,
        easing: fabric.util.ease.easeOutBounce
    })
    canvas.add(rect);
}