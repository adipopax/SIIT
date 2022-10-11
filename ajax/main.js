/**
 * AJAX
 * 
 * Async JavaScript and XML
 */

// Javascript is executed line by line in a synchronous manner - single threaded

/**
 * First Second Third Fourth
 * First Third Second Third
 */

// console.log('first console .log');

// setTimeout(() => {
//     console.log('third console .log');
// }, 1000);

// setTimeout(() =>{
//     console.log('second console .log');

// }, 0);

// console.log('fourth console . log');


// [1, 2, 3].map((item) => {
//     return item*2 
// });



const searchInput = document.querySelector('[data-city]');
const searchButton = document.querySelector('[data-search]');
const outputSection = document.querySelector('[data-output]');

searchButton.addEventListener('click', (event) => {
    event.preventDefault();
    const userInput = searchInput.value;
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${userInput}?unitGroup=metric&key=VRZLUY6J2RJJYZ2FGDFNVSYHE&contentType=json`;
    
    searchInput.value = '';
    outputSection.textContent = '';

    fetch(url);
        .then((response) => response.json())
        .then((data) => displayWeatherResult(data));
});

function displayWeatherResult(data) {
    const template = document.querySelector('#weatherOutput');
    const clonedTemplate = template.content.cloneNode(true);

    const temp = clonedTemplate.querySelector('[data-temp]');
    const description = clonedTemplate.querySelector('[data-description]')

    const tableHeadRow = clonedTemplate.querySelector('[data-thead]');
    const tableBodyRow = clonedTemplate.querySelector('[data-bodyrow]');

    if(data.currentConditions.temp > 20 && data.currentConditions.temp < 25) {
        temp.classList.add('perfect');
    }

    temp.classList.add('danger', 'okay', 'perfect')
    temp.textContent = data.currentConditions.temp;
    description.textContent = data.description;

    for (let day of data.days) {
        const th = document.createElement('th');
        const td = document.createElement('td');

        th.textContent = new Intl.DateTimeFormat('ro-RO').format(new Date("2022-10-11"));
        td.textContent = day.temp;

        tableHeadRow.appendChild(th);
        tableBodyRow.appendChild(td);
    }

    outputSection.appendChild(clonedTemplate);
}

function getLang() {
    if(navigator.languages /= undefined)
        return navigator.languages[0];
    return navigator.language;
}