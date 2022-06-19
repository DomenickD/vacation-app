const destination = document.getElementById('dest');
const days = document.getElementById('days');
const yes = document.getElementById('yes');
const no = document.getElementById('no');
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
    
});

function outfits(days){

}
