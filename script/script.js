





const burger=document.querySelector('.burger');
let container=document.querySelector('.container')
// console.log(burger);

burger.addEventListener('click',()=>{
  container.classList.toggle('active');
})


// document.getElementById("html").addEventListener("click",function(){
//   location.href='https://freecodecamp.org/certification/sp48840/responsive-web-design';
//   // console.log('hii');
// });
// document.getElementById("search").addEventListener("mouseover",function(){
//   prompt('Search here');
// });



// about hide text//

const hide__text=document.querySelector('.hide__text');
let abt__btn=document.getElementById('btn__abt');
abt__btn.addEventListener('click',()=>{
  hide__text.classList.toggle('hide');


})


  

