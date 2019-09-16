var image1Element = document.getElementById("image1");
var image2Element = document.getElementById("image2");
var image3Element = document.getElementById("image3");
var image4Element = document.getElementById("image4");
var image5Element = document.getElementById("image5");

var mouseOver = image1Element.addEventListener("mouseover", function(){
    event.target.src = "images/image1_2.jpg"
})
var mouseOut = image1Element.addEventListener("mouseout", function(){
    event.target.src = "images/image1.jpg"
})

var mouseOver = image2Element.addEventListener("mouseover", function(){
    event.target.src = "images/image2_2.jpg"
})
var mouseOut = image2Element.addEventListener("mouseout", function(){
    event.target.src = "images/image2.jpg"
})

var mouseOver = image3Element.addEventListener("mouseover", function(){
    event.target.src = "images/image3_2.jpg"
})
var mouseOut = image3Element.addEventListener("mouseout", function(){
    event.target.src = "images/image3.jpg"
})

var mouseOver = image4Element.addEventListener("mouseover", function(){
    event.target.src = "images/image4_2.jpg"
})
var mouseOut = image4Element.addEventListener("mouseout", function(){
    event.target.src = "images/image4.jpg"
})

var mouseOver = image5Element.addEventListener("mouseover", function(){
    event.target.src = "images/image5_2.jpg"
})
var mouseOut = image5Element.addEventListener("mouseout", function(){
    event.target.src = "images/image5.jpg"
})