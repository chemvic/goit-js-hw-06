const formEl =document.querySelector(".login-form")
const inputEmailEl = document.querySelector(".email");
const inputPasswordEl = document.querySelector(".password");




formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
// console.log(event.currentTarget.elements.email.value);
//     console.log(event.currentTarget.elements.password.value);
    
    const formElements = event.currentTarget.elements;

    const email = formElements.email.value;
    const password = formElements.password.value;

    if (!formElements.email.value||formElements.password.value === '') {
        alert('Все поля должны быть заполнены');  
        return;     
    }


    const loginForm = {
        email,
        password,
    }
    console.log(loginForm);

    formEl.reset();

    // const formData = new FormData(event.currentTarget);

}
// inputEmailEl.addEventListener('input', onInputEmail);

// function onInputEmail(event) {
//     if (event.currentTarget.value === '') {
//         alert('Все поля должны быть заполнены');  
//     }
//     console.log(event.currentTarget.value);
// }
// inputPasswordEl.addEventListener('input', onInputPassword);

// function onInputPassword(event) {
//      if (event.currentTarget.value === '') {
//         alert('Все поля должны быть заполнены');  
//     }
//     console.log(event.currentTarget.value);
// }