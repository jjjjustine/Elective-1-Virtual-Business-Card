// Select all cards
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    // Add event listener to toggle flip on click, but not on links
    card.addEventListener('click', (event) => {
        // Check if the clicked element is a link
        if (event.target.tagName === 'A') {
            return; // Prevent flip if a link is clicked
        }
        card.classList.toggle('clicked'); // Toggle flip if it's not a link
    });
});

