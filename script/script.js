
// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//  var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("navbar").style.top = "0";
//   } else {
//     document.getElementById("navbar").style.top = "-350px";
//   }
//   prevScrollpos = currentScrollPos;
// }



// document.getElementById("html").addEventListener("click",function(){
//   location.href='https://freecodecamp.org/certification/sp48840/responsive-web-design';
//   // console.log('hii');
// });
// document.getElementById("search").addEventListener("mouseover",function(){
//   prompt('Search here');
// });



burger=document.querySelector('.burger');
navlist=document.querySelector('.nav_list');
searchbox=document.querySelector('.search_box');
navbar=document.querySelector('.backgroundb');
burger.addEventListener("click",function(){
  navlist.classList.toggle('v-resp');
  searchbox.classList.toggle('v-resp');
  navbar.classList.toggle('h-nav-resp');
})


let html_btn=document.getElementById('html');
html_btn.addEventListener('click', getcertificate);

function getcertificate(){
  const xhr= new XMLHttpRequest();

  xhr.open('GET','./image/suraj.txt', true);
 xhr.send();
  xhr.onload=function(){
  let img_box=document.getElementById('certificate-1');
  console.log(img_box);
  img_box.innerHTML=`${this.responseText}`;
  }
 
}