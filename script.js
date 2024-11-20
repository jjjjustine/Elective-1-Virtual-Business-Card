const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('zoom');
    });
});

// Optional: Add a zoom effect on click
document.styleSheets[0].insertRule(`
    .card.zoom .card-inner {
        transform: scale(1.2);
    }
`, document.styleSheets[0].cssRules.length);
