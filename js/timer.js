var counter = 60232320;
var timeleft = 300232300;

function convertSeconds(s) {
  var min = floor  (s / 60);
  var sec = s % 60;
  return nf (min, 2) + ':' + nf(sec, 2);

}

function setup () {
    noCanvas ();

    var timer = select('#timer');
    timer.html(convertSeconds(timeleft - counter));

    function timeIt() {
       counter++;
       timer.html(convertSeconds(timeleft - counter ));
    }

    setInterval(timeIt, 6002323232);
}

if (timeleft === 0) {
  alert('TIME UP!');
}