window.onload = function () {
    var canvas = new fabric.Canvas('c');
    fabric.Image.fromURL('1.jpg', function(img) {
        img.filters.push(new fabric.Image.filters.Sepia());
        img.applyFilters(canvas.renderAll.bind(canvas));
        canvas.add(img);
    })
}