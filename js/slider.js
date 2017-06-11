
$(document).ready(function() {
$("#content > .action:gt(0)").hide();

setInterval(function() { 
  $('#content > .action:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#content');
},  5000);

});
