document.getElementById('spinButton').addEventListener('click', function() {
    let wheel = document.getElementById('wheel');
    let result = document.getElementById('result');
    let additionalMessage = document.getElementById('additionalMessage');

    result.textContent = '';
    result.style.animation = 'none';
    additionalMessage.textContent = ''; // Clear previous messages

    wheel.style.display = 'flex';
    wheel.style.animation = 'spin 4s ease-out';

    let intervalId = setInterval(() => {
        result.textContent = Math.floor(Math.random() * 1000 + 1);
    }, 100);

    setTimeout(() => {
        clearInterval(intervalId);
        wheel.style.display = 'none';
        wheel.style.animation = '';

        // Determine winning or losing
        if (Math.random() < 0.1) {  // 10% chance of winning
            result.textContent = '🎉 Congratulations! You won 10 $BONSAI! 🎉';
            additionalMessage.innerHTML = 'Claim your prize at <a href="https://bonsai.meme" class="link-bonsai">$BONSAI</a>!';
        } else {
            result.textContent = '😭 Nothing😭';
            additionalMessage.textContent = 'Play again to win $BONSAI and other tokens. Do you have NOTHING yet, anon?';
        }

        setTimeout(() => {
            result.style.animation = 'growSize 3s forwards';
        }, 100);
    }, 4000);
});

document.getElementById('wheel').style.display = 'none';
