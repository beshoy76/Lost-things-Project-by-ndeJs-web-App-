var i = 0 ;
var SlidesImage = ["images/1.jpg","images/2.jpg" , "images/3.jpg" , "images/4.jpg","images/5.jpg"];
var slideshow = function () {
    document.slideshow.src = SlidesImage[i];
    if( i < SlidesImage.length - 1){
        i++ ; 
    }else{  i=0 ; }

     setTimeout("slideshow()", 2000) ; 
} 

slideshow()
