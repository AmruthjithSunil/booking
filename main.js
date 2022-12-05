let form = document.getElementById('my-form')
let name = document.getElementById('name');
let email = document.getElementById('email');
let users = document.getElementById('users');


for(let i=0; i<localStorage.length; i++){
    let li = document.createElement('li');
    let user = JSON.parse(localStorage.getItem(localStorage.key(i)));
    li.appendChild(document.createTextNode(`${user.name} : ${user.email}`));
    let delBtn = document.createElement('button');
    delBtn.textContent = 'X';
    delBtn.classList.add('del');
    li.appendChild(delBtn);
    let editBtn = document.createElement('button');
    editBtn.textContent = 'edit';
    editBtn.classList.add('edit');
    li.appendChild(editBtn);
    users.appendChild(li);
}

let delBtn = document.getElementsByClassName('del');
let editBtn = document.getElementsByClassName('edit');
//console.log(delBtn[0]);
for(let i=0; i<delBtn.length; i++){
    delBtn[i].addEventListener('click', deleteLi);
    editBtn[i].addEventListener('click', editLi);
}
form.addEventListener('submit', submitFn);

function deleteLi(e) {
    let key = e.path[1].textContent.slice(0, -5).split(" : ")[1];
    localStorage.removeItem(key);
    e.path[1].remove();
}

function editLi(e) {
    let key = e.path[1].textContent.slice(0, -5).split(" : ")[1];
    let value = e.path[1].textContent.slice(0, -5).split(" : ")[0];
    localStorage.removeItem(key);
    name.value = value;
    email.value = key;
    e.path[1].remove();
}

function submitFn(e){
    e.preventDefault();
    let user = {
        name: name.value,
        email: email.value
    };
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(`${name.value} : ${email.value}`));
    let delBtn = document.createElement('button');
    delBtn.textContent = 'X';
    delBtn.classList.add('del');
    li.appendChild(delBtn);
    delBtn.addEventListener('click', deleteLi);
    let editBtn = document.createElement('button');
    editBtn.textContent = 'edit';
    editBtn.classList.add('edit');
    li.appendChild(editBtn);
    editBtn.addEventListener('click', editLi);
    users.appendChild(li);

    let user_ser = JSON.stringify(user);
    let key = `${email.value}`;
    localStorage.setItem(key, user_ser);
    name.value = '';
    email.value = '';
}