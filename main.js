document.getElementById('inputBox').onkeyup = getColorOrWavelength;

Mousetrap.bind('up', function() { increaseValue(5); });
Mousetrap.bind('down', function() { increaseValue(-5); });

function increaseValue(amt) {
  var value = document.getElementById('inputBox').value;
  if (parseFloat(value).toString().length == value.toString().length) {
    document.getElementById('inputBox').value = parseFloat(value) + amt;
  }
  getColorOrWavelength();
}

function getColorOrWavelength() {
  var value = document.getElementById('inputBox').value;
  var color;
  var nanometers = 350;
  //top = 780
  
  if (parseFloat(value).toString().length && parseFloat(value).toString().length == value.toString().length) {
    //we have a value in nanometers
    nanometers = value;
    color = getColorFromWaveLength(value);
  }
  else {
    //we have a color
    if (colorNameToHex(value)) {
      //our color is a named color e.x. teal
      color = colorNameToHex(value);
    } else if (value.indexOf('#') != -1) {
      //we have a hex color, which is good
      color = value;
    }
    for (var i=350; i<780; i++) {
      if (getColorFromWaveLength(i) == color) nanometers = i;
    }
  }
  document.getElementById('outputColor').style.backgroundColor = color;
  document.getElementById('outputText').innerHTML = nanometers + " nanometers = "+color;
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
