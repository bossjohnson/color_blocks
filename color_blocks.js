$(document).ready(function() {
  $('div.cell').on('mouseenter', function() {
    console.log();
    var hexColor = Math.floor(Math.random() * parseInt('FFFFFF', 16)).toString(16);
    console.log(hexColor);
    $(this).css('background-color', '#' + hexColor);
  });
});
