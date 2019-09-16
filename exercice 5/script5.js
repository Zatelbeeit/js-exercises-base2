var image1Element = document.getElementById("image1");
var image2Element = document.getElementById("image2");
var image3Element = document.getElementById("image3");
var image4Element = document.getElementById("image4");
var image5Element = document.getElementById("image5");


var mouseOver = image1Element.addEventListener("mouseover", function(){
    image1Element.src = "images/image1_2.jpg"
})
var mouseOver = image2Element.addEventListener("mouseover", function(event){
    event.target.src = "images/image2_2.jpg";
});
var mouseOver = image3Element.addEventListener("mouseover", function(event){
    event.target.src = "images/image3_2.jpg";
});
var mouseOver = image4Element.addEventListener("mouseover", function(event){
    event.target.src = "images/image4_2.jpg";
});
var mouseOver = image5Element.addEventListener("mouseover", function(event){
    event.target.src = "images/image5_2.jpg";
});



