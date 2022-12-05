let form = document.getElementById('my-form')
let name = document.getElementById('name');
let email = document.getElementById('email');
let users = document.getElementById('users');


for(let i=0; i<localStorage.length; i++){
    let li = document.createElement('li');
    let user = JSON.parse(localStorage.getItem(localStorage.key(i)));
    li.appendChild(document.createTextNode(`${user.name} : ${user.email}`));
    users.appendChild(li);
}

console.log(users);

form.addEventListener('submit', submitFn);

function submitFn(e){
    e.preventDefault();

    let user = {
        name: name.value,
        email: email.value
    };
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(`${name.value} : ${email.value}`));
    users.appendChild(li);

    let user_ser = JSON.stringify(user);
    let key = `${email.value}`;
    localStorage.setItem(key, user_ser);
    name.value = '';
    email.value = '';
}