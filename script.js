
let intervalId;

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.getElementById('startBtn').addEventListener('click', () => {
    intervalId = setInterval(() => {
        document.body.style.backgroundColor = getRandomColor();
    }, 1000);
});

document.getElementById('stopBtn').addEventListener('click', () => {
    clearInterval(intervalId);
});
