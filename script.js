const subscribeModule = document.getElementById("subscribe");
const subscribeButton = document.getElementById("subscribeButton");
const closeSubscribeButton = document.getElementById("xSubscribe");
const closeSideBarButton = document.getElementById("closeSideBar");
const rightBarItemButton = document.getElementById("rightBarItem");
const toSubscribeLink = document.getElementById("toSubscribe");
const myOverlay = document.getElementById("myOverlay");
const subscribeButtonTwo = document.getElementById("subscribeButtonDown");

function closeSubscribe () {
  subscribeModule.style.display = "none";
} 

function toSubscribe () {
  subscribeModule.style.display = "block";
} 

function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}

subscribeButton.addEventListener("click", closeSubscribe)
closeSubscribeButton.addEventListener("click", closeSubscribe)
closeSideBarButton.addEventListener("click", w3_close)
myOverlay.addEventListener("click", w3_close)
rightBarItemButton.addEventListener("click", w3_open)
toSubscribeLink.addEventListener("click", toSubscribe)
subscribeButtonTwo.addEventListener("click", toSubscribe)

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " w3-opacity-off";
}