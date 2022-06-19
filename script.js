const destination = document.getElementById('dest');
const days = document.getElementById('days');
const yes = document.getElementById('yes');
const no = document.getElementById('no');
const sumbitButton = document.getElementById('submit');
const container = document.getElementById('container');

const printOutput = () => {
    container.innerHTML = "<p>Testing here</p>"
}

const renderSuggestions = (response) => {
    response.forEach(suggestion => {
        const newSuggestion = document.createElement('div');
        newSuggestion.className = 'suggestion';
        newSuggestion.innerHTML = `<div class="largeBag">${suggestions.largeBag}</div>
            <div class="shirts">- ${suggestions.shirts}</div>
            <div class="pants">- ${suggestions.pants}</div>`;
        container.appendChild(newSuggestion);
    })
}

sumbitButton.addEventListener('click', () => {
    console.log('Submit button works!')
    fetch('/suggestions')
    .then(response => {
        if (response.ok) {
            return response.json();
          } else {
            //renderError(response);
          }
        })
        .then(response => {
            renderSuggestions(response); 
        });
    
});

// function outfits(days){

// }

printOutput();
