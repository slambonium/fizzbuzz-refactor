$(document).ready(function() {

function Printer(divId) {
  var lineCount = 1;

  // create new div element with id=divId and append to body element
  var d = document.createElement('div');
  d.id = divId;
  // console.log(d);
  // document.querySelector('#console').appendChild(d);
  document.body.appendChild(d);
  
  this.printLine = function() {
    var m = lineCount + ': ';
    
    for (var i = 0; i < arguments.length; i++) {
      m += arguments[i] + ' ';
    }

    var n = document.createElement('pre'),
        t = document.createTextNode(m);

    n.appendChild(t);
    // console.log(divId, m, n, t);
    document.getElementById(divId).appendChild(n);
    
    lineCount++;
  }
} // end function Printer()

function fizzbuzzer(max, lineWriter) {

  function check(n) {
    var msg = '';
    if ( n % 3 == 0 ) { msg += "Fizz" };
    if ( n % 5 == 0 ) { msg += "Buzz" };
    return msg || n;
  }
  
  for (var i = 1; i <= max; i++) {
    lineWriter(check(i));
  }
  
} // end function fizzbuzzer()

/* isNum() accepts a string and returns true if it contains 
   only characters 0-9, false otherwise */
function isNum(x) {
  for (var i=0; i<x.length; i++) {
    if (num.charCodeAt(i) < 48 || num.charCodeAt(i) > 57) {
      return false;
    }
  }
  return true;
}

var num = prompt('Enter an integer number.');

while (!isNum(num)) {
  num = prompt('Enter an integer number (no commas), or x to exit.');
  if (num === 'x') break;
}

if (num !== 'x') {
  var lineAdder = new Printer('fizzbuzzer').printLine;
  fizzbuzzer(parseInt(num), lineAdder);
}

}); // end $(document).ready()

