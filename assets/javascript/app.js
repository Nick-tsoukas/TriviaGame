var questonButton = document.getElementById('answerQ');
var question2 = document.getElementById('q2');
var inputs = Array.from(document.getElementsByClassName('myInput'));
var time = document.getElementById('time');

inputs.forEach(function(val) {
  val.addEventListener('click', function(e) {
    e.preventDefault();
    console.log('you clicked me')
  })
})


function myFunction() {
    var x = document.getElementById("myRadio").value;
    document.getElementById("demo").innerHTML = x;
}

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};
