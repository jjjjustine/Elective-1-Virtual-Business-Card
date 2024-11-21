const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        // Toggle zoom effect on click
        card.classList.toggle('zoom');
    });
});
