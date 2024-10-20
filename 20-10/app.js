document.addEventListener("DOMContentLoaded", function() {
    const noButton = document.getElementById("no");
    const yesButton = document.getElementById("yes");
    const mailBox = document.querySelector('.mail');

    // Moving "không thèm" button randomly when hovered
    noButton.addEventListener("mouseenter", function() {
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        const randomX = Math.random() * (viewportWidth - noButton.offsetWidth);
        const randomY = Math.random() * (viewportHeight - noButton.offsetHeight);

        noButton.style.position = "absolute";
        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
    });

    // Show the letter when "Nhận thư <33" is clicked
    yesButton.addEventListener("click", function() {
        mailBox.classList.add('active');
    });
});
