
//PROCEED BUTTON
const checkbox = document.getElementById('promise');
const nextButton = document.getElementsByClassName('square-btn');

checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
        nextButton.disabled = false;
    } else {
        nextButton.disabled = true;
    }
});

nextButton.addEventListener('click', function () {
    window.location.href = 'pagina2.html'; 
});
  



//RATE US BUTTON

const rateUsButton = document.getElementsByClassName('rate-us');

        rateUsButton.addEventListener('click', function () {
            window.location.href = 'pagina4.html'; 
        });