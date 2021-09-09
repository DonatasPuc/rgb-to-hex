function convert() {
    let rgb = document.getElementById("rgbInput").value;

    let values = getRgbValues(rgb);

    if (values == null) {
        showOutput("Please enter correct format: '225,255,255'");
    } else if (+values[1] > 255 || +values[2] > 255 || +values[3] > 255) {
        showOutput("Please enter numbers between 0 and 255.");
    } else {
        let hex = convertRgbToHex(rgb);
        showOutput("Hex value: " + hex);
    }
}

function getRgbValues(rgb) {
    // Match 3 numbers separated by commas
    return rgb.match(/^\s*(\d+),(\d+),(\d+)\s*$/);
}

function convertRgbToHex(rgb) {
    let values = getRgbValues(rgb);
    if (values == null) return undefined;

    let hex = "#" + componentToHex(+values[1]) + componentToHex(+values[2]) + componentToHex(+values[3]);

    return hex.toUpperCase();
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function showOutput(str) {
    document.getElementById("output").innerHTML = str;
}