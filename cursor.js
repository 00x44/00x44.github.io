$(document).ready(function(){
      // ADD content to terminal design
    $('.terminalDesign').addClass('disableSelector');
    $('.terminalDesign').html('<span class="terminalDesign-dollar">$</span>'+ $('.terminalDesign').html() + '<span class="terminalDesign-cursor">&#9608;</span>');

      // ADD responsive img class - img-fluid
    $('img').addClass('img-fluid');
    $('img').wrap('<div class="text-center img-container">')
    $('table').wrap('<div class="fluid-container" style="overflow: auto">');
  });
