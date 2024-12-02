const menuBox = document.querySelector('.menuBox');
const hamburgIcone = document.querySelector('.hamburg');

hamburgIcone.firstElementChild.addEventListener('click', () => {
    menuBox.classList.add('menu');
    hamburgIcone.classList.remove('hamburg-icone');
});

menuBox.firstElementChild.addEventListener('click',() => {
    menuBox.classList.remove('menu');
    hamburgIcone.classList.add('hamburg-icone');
});