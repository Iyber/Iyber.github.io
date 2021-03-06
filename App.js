let temp = 0;
let small_vp=false
$(document).ready(function(){
  if($(window).width() >= 500){
    $(window).on('scroll',function(){
      $('.nav').toggleClass('hide', $(window).scrollTop() > temp);
      temp = $(window).scrollTop();
    })
  }
})

var animateHTML = function() {
var elems;
var windowHeight;

function init() {

elems = document.querySelectorAll('.hidden');
windowHeight = window.innerHeight;
addEventHandlers();
checkPosition();
}

function addEventHandlers() {
window.addEventListener('scroll', checkPosition);
window.addEventListener('resize', init);
}

function checkPosition() {
for (var i = 0; i < elems.length; i++) {
var positionFromTop = elems[i].getBoundingClientRect().top;
if (positionFromTop - windowHeight <= 0) {
elems[i].className = elems[i].className.replace(
'hidden',
'fade-in-element'
);
}

if ((positionFromTop - windowHeight > 1) || (positionFromTop < 0)) {
elems[i].className = elems[i].className.replace(
'fade-in-element',
'hidden'
);
}
}
}

return {
init: init
};
};

document.body.addEventListener('load',animateHTML().init());

if($(window).width() < 768){
  document.querySelectorAll('a').forEach(item => {
    item.addEventListener('click', event => {
      document.querySelector(".nav-bar").style.display="none";
    })
  })
}
document.querySelector(".menu").addEventListener('click',function(){
  if(document.querySelector(".nav-bar").style.display=="block")
    document.querySelector(".nav-bar").style.display="none";
  else
    document.querySelector(".nav-bar").style.display="block";
});
Array.from(document.querySelectorAll('li')).forEach(li=>{
  li.addEventListener('click',()=>{
    document.getElementById(li.dataset.id).scrollIntoView();
  })
});
