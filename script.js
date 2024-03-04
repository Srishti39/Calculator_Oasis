window.onload = function() {
    var buttons = document.getElementsByClassName('btn');
    var display = document.getElementById('display');
    for(var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', calculate);
    }

    function calculate() {
        if(this.getAttribute('value') === 'C') {
            display.value = '';
        } else if(this.getAttribute('value') === '=') {
            try {
                display.value = eval(display.value);
            } catch(e) {
                display.value = 'Error';
            }
        } else {
            display.value += this.getAttribute('value');
        }
    }
}
