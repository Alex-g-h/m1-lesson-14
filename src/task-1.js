const body = document.querySelector('body');
body.innerHTML += "\
<form class=\"create-user-form\" >\
  <label>\
    Имя\
    <input type=\"text\" name=\"userName\" placeholder=\"Введите ваше имя\" />\
  </label>\
  <label>\
    Пароль\
    <input type=\"password\" name=\"password\" placeholder=\"Придумайте Пароль\" />\
  </label>\
  <button type=\"submit\">\
    Подтвердить\
  </button>\
</form>\
";

// create main form
const form = document.createElement('form');
form.className = 'create-user-form';

// craete first label for User
const labelUser = document.createElement('label');
labelUser.innerText = ' Имя ';
const userName = document.createElement('input');
userName.type = 'text';
userName.name = 'userName';
userName.placeholder = 'Введите ваше имя';
labelUser.append(userName);

// create second label for password
const labelPwd = document.createElement('label');
labelPwd.innerText = ' Пароль ';
const userPwd = document.createElement('input');
userPwd.type = 'password';
userPwd.name = 'password';
userPwd.placeholder = 'Придумайте Пароль';
labelPwd.append(userPwd);

// create submit button
const button = document.createElement('button');
button.type = 'submit';
button.innerText = 'Подтвердить';

// add created elements to form
form.append(labelUser);
form.append(labelPwd);
form.append(button);

// add form to body section of DOM
body.append(form);

console.log(body);