$(document).ready(function(){
var hover = $('.nav-item a');

hover.on('click' ,  function(){

    // alert('work');
    $(this).css("background-color", "purple");
    $(this).css("color", "purple");
    // $(this).css("background-color", "white");

  if ($(hover).css("background-color" , "lightblue")) {

    $(this).css("background-color", "blue");
    $(this).css("color", "white");
}  

});
var img1 = $('.img1');
var img2 = $('.img2');
var img3 = $('.img3');
var img4 = $('.img4');


var m1 = $('.m1');
var m2 = $('.m2');
var m3 = $('.m3');
var m4 = $('.m4');

// var bg = $('.bg2');
console.log(m1);

img1.on('mouseover' , function(){
 
  $(m1).css("display" , "block").text();   
});
console.log(img1);
img2.on('mouseover' , function(){
 
    $(m2).css("display" , "block").text();   
  });
  img3.on('mouseover' , function(){
 
    $(m3).css("display" , "block").text();   
  });
  img4.on('mouseover' , function(){
 
    $(m4).css("display" , "block").text();   
  });


  var btn = $('.txt1 button');
  console.log(btn);
  
  var name = $('.form1 input');
  var email =$('.form2 input');
  var fill = $('.form1 p')

  btn.on('click' , function(){
   if($('name').text()==''){
     alert('name is empty')
     $(fill).css("display" , "block").text();
     
   }
  })
  console.log(btn);
  
});


