const fNameSpan = document.querySelector('#fName');
const lNameSpan = document.querySelector('#lName');
const ageSpan = document.querySelector('#age');
const emailSpan = document.querySelector('#email');

// const person = {
//     fName: 'Gerda',
//     lName: 'Ninn',
//     age: 21, 
//     email: 'gerda.ninn@tktk.ee'
// }

window.onload = () => {

    fetch('person.json')
    .then(response => response.json())
    .then(data => {
        fNameSpan.textContent = data.fName;
        lNameSpan.textContent = data.lName;
        ageSpan.textContent = data.age;
        emailSpan.textContent = data.email
    })

    // fNameSpan.textContent = person.fName;
    // lNameSpan.textContent = person.lName;
    // ageSpan.textContent = person.age;
    // emailSpan.textContent = person.email


}