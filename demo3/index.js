window.onload = function() {
    var canvas = new fabric.Canvas('c');
    var imgNode = document.getElementById('image');
    var image = new fabric.Image(imgNode,{
        top: 100,
        left: 100,
        height:315,
        width:1215
    });
    canvas.add(image);
}