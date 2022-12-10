const buyTicketBtns = document.querySelectorAll(".tour__ticket-link");
const modalPart = document.querySelector('.modal-container');
const closeModalBtns = document.querySelectorAll('.modal__header-close, .modal__body-close-btn');


function openModal() {
    modalPart.classList.add('modal--open');
}

function closeModal() {
    modalPart.classList.remove('modal--open');
}

for (const buyTicketBtn of buyTicketBtns) {
    buyTicketBtn.addEventListener('click', openModal);
}

for (const closeModalBtn of closeModalBtns) {
    console.log(closeModalBtn);
    closeModalBtn.addEventListener('click', closeModal);
}

