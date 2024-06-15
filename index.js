document.addEventListener("DOMContentLoaded", function () {
    const image = document.querySelector('.bouncing-image');
    let containerWidth = window.innerWidth;
    let containerHeight = window.innerHeight;
    let x = Math.random() * (containerWidth - image.width);
    let y = Math.random() * (containerHeight - image.height);
    let dx = 2; // Horizontal speed
    let dy = 2; // Vertical speed

    function animate() {
        x += dx;
        y += dy;

        // Check for collision with container boundaries
        if (x + image.width >= containerWidth || x <= 0) {
            dx *= -1; // Reverse horizontal direction
        }
        if (y + image.height >= containerHeight || y <= 0) {
            dy *= -1; // Reverse vertical direction
        }

        image.style.left = x + 'px';
        image.style.top = y + 'px';

        requestAnimationFrame(animate);
    }

    animate();

    // Update container dimensions on window resize
    window.addEventListener('resize', () => {
        containerWidth = window.innerWidth;
        containerHeight = window.innerHeight;
    });
});