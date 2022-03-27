let link_s=document.querySelectorAll('.link');

link_s[0].addEventListener('click',()=>{
    let first=document.getElementById('first_s');
    first.classList.remove('hide');
    let second=document.getElementById('second_s');
    let third=document.getElementById('third_s');
    second.classList.add('hide')
    third.classList.add('hide')
    setTimeout(() => {
        first.innerHTML=`<div class="fir"><img src="/image/p1.jpg" alt="null"></div>
                     <div class="fir"><img src="/image/p2.jpg" alt="null"></div>
                     <div class="fir"><img src="/image/p4.jpg" alt="null"></div>
                     <div class="fir"><img src="/image/p5.jpg" alt="null"></div>
                     <div class="fir"><img src="/image/p6.jpg" alt="null"></div>
                     <div class="fir"><img src="/image/p3.jpg" alt="null"></div>
                     <div class="fir"><img src="/image/p7.jpg" alt="null"></div>
                     <div class="fir"><img src="/image/p8.jpg" alt="null"></div> `
    }, 300 );
   
})
link_s[1].addEventListener('click',()=>{
    let second=document.getElementById('second_s');
    second.classList.remove('hide');
    let first=document.getElementById('first_s');
    let third=document.getElementById('third_s');
    first.classList.add('hide')
    third.classList.add('hide')
    setTimeout(() => {
        second.innerHTML=`<div class="sec"><img src="/image/news.jpg" alt="null"></div>
        <div class="sec"><img src="/image/news.jpg" alt="null"></div>
        <div class="sec"><img src="/image/news.jpg" alt="null"></div> `
    }, 300 );
   
})
link_s[2].addEventListener('click',()=>{
    let second=document.getElementById('second_s');
    second.classList.remove('hide');
    let first=document.getElementById('first_s');
    let third=document.getElementById('third_s');
    first.classList.add('hide')
    third.classList.add('hide')
    setTimeout(() => {
        second.innerHTML=`<div class="sec"><img src="/image/friends.jpg" alt="null"></div>
        <div class="sec"><img src="/image/friend2.jpg" alt="null"></div>
        <div class="sec"><img src="/image/news.jpg" alt="null"></div> `
    }, 300 );
   
})
link_s[3].addEventListener('click',()=>{
    let third=document.getElementById('third_s');
    third.classList.remove('hide');
    let second=document.getElementById('second_s');
    second.classList.add('hide');
    let first=document.getElementById('first_s');
    first.classList.add('hide')

    setTimeout(() => {
        third.innerHTML=` <div class="fir"><img src="/image/bg.jpg" alt="null"></div>
        <div class="fir"><img src="/image/bg.jpg" alt="null"></div>
        <div class="fir"><img src="/image/bg.jpg" alt="null"></div>
        <div class="fir"><img src="/image/bg.jpg" alt="null"></div> `
    }, 300 );
   
})


