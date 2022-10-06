const divElement = document.createElement('div');
const bodyElement = document.querySelector('body');

const divElementHello = document.querySelector('[data-hello]');

// divElementHello.appendChild(divElement);
divElementHello.insertAdjacentElement('beforebegin', aElement);
