document.getElementById('spinButton').addEventListener('click', function() {
    let wheel = document.getElementById('wheel');
    let result = document.getElementById('result');

    // Reset the result text
    result.textContent = '';
    result.style.animation = 'none';  

    // Display the wheel and start the spin animation
    wheel.style.display = 'flex';
    wheel.style.animation = 'spin 4s ease-out, flash 2s linear infinite';

    // Show random numbers during the spin as potential winnings
    let intervalId = setInterval(() => {
        result.textContent = Math.floor(Math.random() * 1000 + 1);
    }, 100); // Updates every 100 milliseconds

    // End the spin and display final result
    setTimeout(() => {
        clearInterval(intervalId); // Stop the number updates
        wheel.style.display = 'none'; // Hide the wheel
        wheel.style.animation = ''; // Clear wheel animation to prevent re-trigger
        result.textContent = '😭n0thing😭'; // Set final result
        result.style.animation = ''; // Ensure no animation is applied before growing
        setTimeout(() => {
            result.style.animation = 'growSize 3s forwards'; // Apply growing animation
        }, 100); // Delay slightly to ensure the animation restarts properly
    }, 4000); // Matches the duration of the spin animation
});

// Ensure the wheel is initially hidden when the page loads
document.getElementById('wheel').style.display = 'none';
