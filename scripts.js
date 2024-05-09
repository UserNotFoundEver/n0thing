document.addEventListener('DOMContentLoaded', function() {
    const wheel = document.getElementById('wheel');
    const spinButton = document.getElementById('spinButton');
    const result = document.getElementById('result');
    const additionalMessage = document.getElementById('additionalMessage');

    // Initially hide the wheel
    wheel.style.display = 'none';

    spinButton.addEventListener('click', function() {
        wheel.style.display = 'block';  // Show the wheel when the button is clicked
        wheel.style.animation = 'spin 4s ease-out';

        let intervalId = setInterval(() => {
            result.textContent = Math.floor(Math.random() * 1000 + 1);
        }, 100);

        setTimeout(() => {
            clearInterval(intervalId);
            wheel.style.display = 'none';  // Hide the wheel again after spinning
            result.textContent = '😭 NOTHING😭';
            additionalMessage.textContent = 'Play again to win $BONSAI and other tokens. Do you have NOTHING yet, anon?';
        }, 4000);
    });
});