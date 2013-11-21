function getColorOrWavelength() {
  var value = document.getElementById('inputBox').value;
  var color;
  
  if (parseFloat(value).toString().length == value.toString().length) {
    //we have a value in nanometers
    alert(getColorFromWavelength(value));
  }
  else {
    //we have a color
    if (colourNameToHex(value)) {
      color = colorNameToHex(value);
      color = hexToRgb(color);
    } else if (value.indexOf('#') != -1) {
      //we have a hex color, which needs to be an RGB color
      color = hexToRgb(value);
    }
    alert(color);
}

function hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}
