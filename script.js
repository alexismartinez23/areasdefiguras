function calculateArea() {
    var shape = document.getElementById("shape").value;
    var resultArea = document.getElementById("result");

    switch(shape) {
        case "circle":
            var radius = parseFloat(document.getElementById("radius").value);
            if(radius <= 0 || isNaN(radius)) {
                resultArea.innerHTML = "Por favor, introduce un radio válido.";
            } else {
                var area = Math.PI * radius * radius;
                resultArea.innerHTML = "El área del círculo es: " + area.toFixed(2);
            }
            break;
        case "triangle":
            var base = parseFloat(document.getElementById("base").value);
            var height = parseFloat(document.getElementById("height").value);
            if(base <= 0 || height <= 0 || isNaN(base) || isNaN(height)) {
                resultArea.innerHTML = "Por favor, introduce una base y altura válidas.";
            } else {
                var area = 0.5 * base * height;
                resultArea.innerHTML = "El área del triángulo es: " + area.toFixed(2);
            }
            break;
        case "square":
            var side = parseFloat(document.getElementById("side").value);
            if(side <= 0 || isNaN(side)) {
                resultArea.innerHTML = "Por favor, introduce un lado válido.";
            } else {
                var area = side * side;
                resultArea.innerHTML = "El área del cuadrado es: " + area.toFixed(2);
            }
            break;
        default:
            resultArea.innerHTML = "Por favor, selecciona una figura.";
    }
}