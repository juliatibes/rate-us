// document.getElementById('submit').onclick = function(){
//     var value = document.getElementsByName('rating');
//     for (var radio of value){
//     if (radio.checked) {    
//     console.log(radio.value);
//     }}}

    




// let radioBtn = document.querySelectorAll('input[name="rating"]');
// let selectedRadio = document.getElementById('selectedRadio')
let btnSubmit = document.querySelector('button');
let result = document.querySelector('span');


btnSubmit.addEventListener('click', () => {
    let selected = document.querySelector('input[type="radio"]:checked');
    result.innerText = selected.value
    console.log(selected.value)
});

// radioBtn.array.forEach(radioBtn => {
//     radioBtn.addEventListener('focus', findSelected);
// });


// function radioSelected () {
//     const radio = document.getElementsByClassName('.rating');
//     let value = radio.input[radio.checked].value;
//     console.log(value)
// }


// function radioSelected(){
//     const radio = document.getElementById('#rating');
//     const value = radio.value;
//     console.log(value);
// };


// const btn = document.querySelector('#submit');

// btn.addEventListener('click', function(){
//     const radio = document.querySelector('#rating')
//     const value = radio.value;
//     console.log(value)
// });



