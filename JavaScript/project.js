// $(window).scroll(function(){
//     var top =$(".project-content").offset().top; //get a position of target
//     var position = top - $(window).height() + 100; //visible position when scroll down
//     var position_bottom = top+$(".project-content").height();//visible position when scroll up
//     if($(window).scrollTop() > position && $(window).scrollTop() < position_bottom){
//         $("project-content").addClass("animate")
//     }else{
//         $("project-content").removeClass("animate")
//     }
// })

// $(window).scroll(function(){
//     var top =$(".value-bar").offset().top; //get a position of target
//     var position = top - $(window).height() + 100; //visible position when scroll down
//     var position_bottom = top+$(".value-bar").height();//visible position when scroll up
//     if($(window).scrollTop() > position && $(window).scrollTop() < position_bottom){
//         $(".value-bar").css()
//     }
// })

// const showScroll = function(){
//     const element = document.querySelectorAll('.project-content'),
//     windowH = window.innerHeight;

//     let divisor = 1.2,
//     nowY,
//     elementY;

//     window.addEventListener('scroll', function(){
//         nowY = window.scrollY || window.pageYOffset;
//         let count = 0;
//         while(count < element.length){
//             (function(args){
//                 elementY = element[args].getBoundingClientRect().top + nowY;
//                 if(nowY > elementY - (windowH / divisor)){
//                     element[args].classList.add('show');
//                 }else{
//                     element[args].classList.remove('show');
//                 }
//             })(count);
//             count++;
//         }
//     }, false);
// };

// showScroll();

// window.addEventListener('load', function(){
//     viewSlide('.project-img');
// });
// function viewSlide(className, slideNo = -1)
// {
//     let imgArray = document.querySelectorAll(className);
//     if(slideNo >= 0){
//         imgArray[sideNo].style.opacity = 0;
//     }
//     slideNo++;
//     if(slideNo >= imgArray.length){
//         slideNo = 0;
//     }
//     imgArray[slideNo].style.opacity = 1;
//     let msec = document.getElementById('')
// }



// var slides = document.getElementsByClassName('project-img')[0].getElementsByTagName('img');

// viewSlide(1000);

// function viewSlide(msec, slide_no = -1){
//     if(slides[slide_no]){
//         slides[slide_no].style.display='none';
//     }

//     slide_no++;
//     if(slides[slide_no]){
//         slides[slide_no].style.display='block';
//     }else{
//         slides[0].style.display='block';
//         slide_no=0;
//     }
//     setTimeout(function(){viewSlide(msec, slide_no);},msec);
// };