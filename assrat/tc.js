
$(document).ready(function() {

var counters = $(".count");
var countersQuantity = counters.length;
var counter = [];

for (i = 0; i < countersQuantity; i++) {
counter[i] = parseInt(counters[i].innerHTML);
}

var count = function(start, value, id) {
var localStart = start;
setInterval(function() {
if (localStart < value) {
localStart++;
counters[id].innerHTML = localStart;
}
}, 2);
}

for (j = 0; j < countersQuantity; j++) {
count(0, counter[j], j);
}
});

// loder java script

window.onload = (event) => {
 document.getElementById("home-page").style.display='none'
 setTimeout(() => {
    document.getElementById("home-page").style.display='block' 
    document.getElementById("loder").style.display='none'

 }, 6000);
  };
