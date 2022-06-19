const answer1 = document.getElementById('answer-1');
const answer2 = document.getElementById('answer-2');
const answer3 = document.getElementById('answer-3');
const answer4 = document.getElementById('answer-4');
const sumbitButton = document.getElementById('submit');

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
          renderStudents(response); 
        });
    
})
