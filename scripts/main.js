

/*document.querySelector('HTML').onclick = function() {
    alert('ΜΗΝ ΠΑΤΑΣ ΡΕ');
}*/

/*const button = document.querySelector('button');

button.addEventListener('click', event => {
  button.innerHTML = `Click count: ${event.detail}`;
});*/

const card = document.querySelector('aside');

card.addEventListener('dblclick', function (e) {
  card.classList.toggle('large');
});
