document.addEventListener("DOMContentLoaded", function() {
    const logos = document.querySelectorAll(".logo");
    logos.forEach(logo => {
        const randomSpeed = Math.random() * 3 + 1; // Random speed between 1 and 4
        const randomDirection = Math.random() < 0.5 ? -1 : 1; // Random direction, -1 or 1
        const randomX = Math.random() * (window.innerWidth - logo.offsetWidth);
        const randomY = Math.random() * (window.innerHeight - logo.offsetHeight);
        logo.style.animation = `spin ${randomSpeed}s linear infinite`;
        logo.style.animationDirection = randomDirection === -1 ? "reverse" : "normal";
        logo.style.top = randomY + "px";
        logo.style.left = randomX + "px";
    });
});
