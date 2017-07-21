// JavaScript source code
window.onload = function () {

    var buttons = document.getElementsByTagName('button'),
        result = document.querySelector('.result'),
        clear = document.getElementsByClassName('clear')[0];

  

    $(".powerButton").click(function () {
        $(".result").toggleClass('powerOn');
        $(this).toggleClass('green');
        
    });
    $.fn.extend({
        toggleText: function (a, b) {
            var isClicked = false;
            var that = this;
            this.click(function () {
                if (isClicked) {
                    that.text(a);
                    $(".result").text('');                   
                    isClicked = false;
                }
                else {
                    that.text(b);
                    isClicked = true;
                }
            });
            return true;
        }
    });
    $(".powerButton").toggleText("OFF", "ON");

    


    for (var i = 0; i < buttons.length; i += 1) {
        if (buttons[i].innerHTML === '=') {
            buttons[i].addEventListener("click", calculate(i));            
        } else {
            buttons[i].addEventListener("click", addValue(i));            
        }
        
    }
    function addValue(i) {
        return function () {
            if (buttons[i].innerHTML === '+') {
                result.innerHTML += '+';
            } else if (buttons[i].innerHTML === 'x') {
                result.innerHTML += '*';
            } 
            else {
                result.innerHTML += buttons[i].innerHTML;
            }
        }
    };
    function calculate(i) {
        return function () {            
            result.innerHTML = eval(result.innerHTML);            
        }
    };   

    $(".clear").click(function () {
        $(".result").text('');
    });



};//End ready function