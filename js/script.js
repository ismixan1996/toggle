// let button= document.querySelector('button')



// button.addEventListener('mouseout', function(){
//     console.log('event isledi')
// })






// let input= document.querySelector('input')


// input.addEventListener('focus' ,function(){
//     console.log('event worked')
// })


// input.addEventListener('blur' ,function(){
//     console.log('event worked')
// })


// input.addEventListener('keyup' ,function(){
//     console.log('event worked')
// })

// input.addEventListener('change' ,function(){
//     console.log('event worked')
// })


// input.addEventListener('input' ,function(){
//     console.log('event worked')
// })



let icon = document.querySelector('.icon');
let responsiveList = document.querySelector('.responsive-list');


icon.addEventListener('click', function () { 
    responsiveList.classList.toggle('responsive-height')
});
