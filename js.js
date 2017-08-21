function hoverWithGradient($x, num) {
  var counter = 0;
  var r = Math.random()*256;
  var g = Math.random()*256;
  var b = Math.random()*256;  
  $($x).hover(function() {
    r = Math.floor(r - r * 0.1);
    g = Math.floor(g - g * 0.1);
    b = Math.floor(b - b * 0.1);
    var newColor = 'rgb(' + r + ',' + g + ',' + b + ')'
    $(this).css("background-color", newColor);
     counter++
    if (counter === num*2) {
      r = Math.random()*256;
      g = Math.random()*256;
      b = Math.random()*256;
      counter = 0 };            
  });
};

function createGrid(n1, n2) {
    for (var i = n1**2; i < n2**2; i++) {        
       $('<div>').addClass('pixel').appendTo('#container') 
    };
    var sizeOfPixel= $('#container').innerWidth() / n2; //counting size of squares
    $('.pixel').width(sizeOfPixel).height(sizeOfPixel); //resize squares  
    hoverWithGradient('.pixel', 10);
}
       
$(document).ready(function() {
//set default 10x10 pad 
  var n = 10;
  createGrid(0, n);

//display resolution
  $('.resolution').append(n+' x '+n); 

//button 'Clear'
  $('#clear').click(function() {      
    $('.pixel').remove();
    createGrid(0, n)
  });
  
//button 'Resize'
  $('#resize').click(function() {
    $('.pixel').css("background-color", '#FF0000');
    var newn = prompt('Enter number of squares in a row/column: ', 10);
    // do nothing if resolution is the same    
    if(newn === n) {return}
    else {
      $('.pixel').remove();
       createGrid(0, newn) 
     };   
     //update resolution display
     n = newn;
     $('.resolution').empty().append(n+' x '+n);     
    });     
});
