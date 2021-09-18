// modal popup

let buttonElement = document.querySelector(".contact");
let modal = document.querySelector('#modal');
buttonElement.addEventListener('click', () => {
    if (modal.classList.contains('show')) {
        return;
    } else {
        modal.classList.add('show');
    }

});

let iconCloseModal = document.querySelector('.close-modal');
iconCloseModal.addEventListener('click', () => {
    if (modal.classList.contains('show')) {
        modal.classList.remove('show');
    } else {
        return;
    }
});