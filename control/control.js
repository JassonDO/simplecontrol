const
  range = document.getElementById('range'),
  rangeV = document.getElementById('rangeV'),
  setValue = ()=>{
    const
      newValue = Number( (range.value - range.min) * 100 / (range.max - range.min) ),
      newPosition = 10 - (newValue * 0.2);
    rangeV.innerHTML = `<span>${range.value}</span>`;
    rangeV.style.left = `calc(${newValue}% + (${newPosition}px))`;
  };
document.addEventListener("DOMContentLoaded", setValue);
range.addEventListener('input', setValue);

var isLEDon = false;

  function toggleLED() {
    var led = document.getElementById('led');

    // Toggle the LED state
    isLEDon = !isLEDon;

    // Change the background color based on the state
    if (isLEDon) {
      led.style.backgroundColor = 'green'; // LED is on
    } else {
      led.style.backgroundColor = 'red'; // LED is off
    }
  }