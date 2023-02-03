let radioBtn = document.querySelectorAll('input[name="rating"]');
let selectedRadio = document.getElementById('selectedRadio')

let findSelected = () => {
    let selected = document.querySelector('input[name=rating]:checked').value
    console.log(selected)
}

radioBtn.array.forEach(radioBtn => {
    radioBtn.addEventListener('checked', findSelected);
});


// function radioSelected () {
//     const radio = document.getElementsById('#rating');
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



