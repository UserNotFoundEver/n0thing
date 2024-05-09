document.addEventListener('DOMContentLoaded', function() {
    const wheel = document.getElementById('wheel');
    const spinButton = document.getElementById('spinButton');
    const result = document.getElementById('result');
    const additionalMessage = document.getElementById('additionalMessage');

    // No need to set display none, as the CSS already keeps the wheel visible without animation
    spinButton.addEventListener('click', function() {
        // Apply the spin animation when the button is clicked
        wheel.style.animation = 'spin 4s ease-out';

        let intervalId = setInterval(() => {
            result.textContent = Math.floor(Math.random() * 1000 + 1);
        }, 100);

        setTimeout(() => {
            clearInterval(intervalId);
            // After spinning stops, reset the animation so it can be triggered again
            wheel.style.animation = 'none';

            // Determine winning or losing with 10% chance of winning
            if (Math.random() < 0.1) {  // 10% chance of winning
                result.textContent = '🎉 Congratulations! You won 10 $BONSAI! 🎉';
                additionalMessage.innerHTML = 'Click below to claim your prize!';
                createClaimButton();
                result.style.animation = 'growSize 3s forwards';
            } else {
                result.textContent = '😭 NOTHING 😭';
                additionalMessage.textContent = 'Play again to win $BONSAI and other tokens. Do you have NOTHING yet, anon?';
                result.style.animation = 'growSize 3s forwards';
            }
        }, 4000);
    });

    function createClaimButton() {
        const claimButton = document.createElement('button');
        claimButton.textContent = 'Claim $BONSAI';
        claimButton.id = 'claimButton';
        claimButton.style.marginTop = '20px';
        claimButton.onclick = function() {
            window.location.href = 'https://bonsai.meme'; // Redirect to claim page
        };
        additionalMessage.appendChild(claimButton);
    }
});
