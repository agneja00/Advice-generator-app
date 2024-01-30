const adviceNumber = document.querySelector('.advice-number');
const adviceQuote = document.querySelector('.quote');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    fetch('https://api.adviceslip.com/advice')
        .then((res) => res.json())
        .then((data) => {
            adviceNumber.textContent = '#' + data.slip.id;
            adviceQuote.textContent = '"' + data.slip.advice + '"';
        })
        .catch((err) => console.error(err));
})