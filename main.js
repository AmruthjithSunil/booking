let form = document.getElementById('my-form')
let name = document.getElementById('name');
let email = document.getElementById('email');

form.addEventListener('submit', submitFn);

function submitFn(e){
    e.preventDefault();
    let user = {
        name: name.value,
        email: email.value
    };
    let user_ser = JSON.stringify(user);
    localStorage.setItem('user', user_ser);
    name.value = '';
    email.value = '';
}