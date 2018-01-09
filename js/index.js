

function checkCookie() {
var user = Cookies.get('nombre');
if (user) {
alert('Hola de nuevo ' + user);
} else {
user = prompt('¿Cómo te llamas? ', '');
Cookies.set('nombre', user, {expires: 365});
  }
}

checkCookie();
