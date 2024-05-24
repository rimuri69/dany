// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const cursorImage = document.getElementById('cursor-image');
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    const delay = 0.1;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.pageX;
        mouseY = e.pageY;
    });

    function animate() {
        cursorX += (mouseX - cursorX) * delay;
        cursorY += (mouseY - cursorY) * delay;
        cursorImage.style.left = cursorX + 'px';
        cursorImage.style.top = cursorY + 'px';
        requestAnimationFrame(animate);
    }

    animate();
});
