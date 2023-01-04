const userName = prompt('Введите пароль').trim()

if(userName.length>=3 && userName.length<=30 && (/[0-9]/.test(userName))&& (/[A-Z]/.test(userName))){
 alert('Пароль валидный') 
} else {
  alert ('Пароль не удовлетворяет условиям! Перезагрузите страницу')}

