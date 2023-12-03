const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButton = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget) 
        openModal(modal);
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('modal--active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})

closeModalButton.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.closest('.modal');
        closeModal(modal);
    });
});

function openModal(modal) {
    if (modal == null) return
    modal.classList.add("modal--active");
    overlay.classList.add('overlay--active');
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('modal--active')
    overlay.classList.remove('overlay--active')
}