function createGrid(n1, n2) {
  for (var i = n1; i < n2; i++) {        
    $('<div>').addClass('pixel').appendTo('#container') }
  //hovering
  $('.pixel').hover(function() {    	
    $(this).css('background-color', '#'+Math.floor(Math.random()*16777215).toString(16));      
  });
};

$(document).ready(function() {
//set default 16x16 pad	
  var n = 16; //number of squares in a row/column    
  createGrid(0, n**2);

//display resolution
  $('.resolution').append(n+' x '+n); 

//button 'clear'
  $('#clear').click(function() {
    	$('.pixel').css("background-color", '#FF0000')
  });
  
//button 'Size of squares'
  $('#squareSize').click(function() {
    $('.pixel').css("background-color", '#FF0000');
    var sizeOfPixel = prompt('Enter size of squares (px): ', 25);
    var newn = Math.floor($('#container').innerWidth() / sizeOfPixel); //new number of squares in a row/column
    if(newn === n) {return}; // do nothing if resolution is the same    
    //change number of squares
    if(newn > n) { //add additional squares if new resolution is greater. 
      createGrid(n**2, newn**2); 
      } else { //if new resolution is lower remove old grid and create new 
       	$('.pixel').remove();
       	createGrid(0, newn**2) };
     //resize squares  
     $('.pixel').width(sizeOfPixel).height(sizeOfPixel);     
     //update resolution display
     n = newn;
     $('.resolution').empty().append(n+' x '+n);     
    });     
});