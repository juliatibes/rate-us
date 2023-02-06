const path = window.location.href;
const rate = path.slice(-1);

let result = document.querySelector('span');
result.innerText = `You selected out ${rate} of 5`

