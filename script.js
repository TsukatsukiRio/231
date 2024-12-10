const boxes = document.querySelectorAll('.box');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
let currentIndex = 0;

function showBox(index) {
    boxes.forEach((box, i) => {
        if (i === index) {
            box.style.display = 'block';
        } else {
            box.style.display = 'none';
        }
    });
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + boxes.length) % boxes.length;
    showBox(currentIndex);
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % boxes.length;
    showBox(currentIndex);
});