const bar = document.getElementById('bar');
const shut = document.getElementById('shut')
const navbar = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        navbar.classList.add('active');
    })
}

if (shut) {
    shut.addEventListener('click', () => {
        navbar.classList.remove('active');
    })
}

