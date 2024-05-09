document.getElementById('spinButton').addEventListener('click', function() {
    let wheel = document.getElementById('wheel');
    let result = document.getElementById('result');
    let additionalMessage = document.getElementById('additionalMessage'); // Get the new paragraph

    result.textContent = '';
    result.style.animation = 'none';
    additionalMessage.textContent = ''; // Clear previous message

    wheel.style.display = 'flex';
    wheel.style.animation = 'spin 4s ease-out';

    let intervalId = setInterval(() => {
        result.textContent = Math.floor(Math.random() * 1000 + 1);
    }, 100);

    setTimeout(() => {
        clearInterval(intervalId);
        wheel.style.display = 'none';
        wheel.style.animation = '';
        result.textContent = '😭n0thing😭';
        setTimeout(() => {
            result.style.animation = 'growSize 3s forwards';
        }, 100);
        additionalMessage.textContent = "Play again to win $BONSAI and other tokens. Do you have NOTHING yet, anon?"; // Display the new message
    }, 4000);
});

document.getElementById('wheel').style.display = 'none';
