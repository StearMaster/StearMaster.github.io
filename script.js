document.addEventListener('DOMContentLoaded', function () {
    // Get the elements
    const valentineImage = document.getElementById('valentine-image');
    const mainText = document.getElementById('main-text');
    const valentineText = document.getElementById('valentine-text');
    const yesButton = document.getElementById('yes-button');
    const noButton = document.getElementById('no-button');
    const valentineContainer = document.getElementById('valentine-container');

    // Event listener for the 'no' button
    noButton.addEventListener('click', function () {
        // Change the image
        valentineImage.src = 'img/catgun.jpg'; // replace 'newimage.jpg' with the new image source

        // Update the remaining paragraph text
        mainText.textContent = 'Przycisk nie jest tu tylko visualnie';

        // Remove 'no' button
        noButton.remove();
        valentineText.remove();

        const newNoButton = document.createElement('button');
        newNoButton.textContent = 'Nie';
        newNoButton.id = 'new-no-button';

        // Apply styles to the new 'no' button
        newNoButton.style.fontSize = '18px';
        newNoButton.style.cursor = 'pointer';
        newNoButton.style.borderRadius = '15px';
        newNoButton.style.fontFamily = "'Comic Sans MS', cursive, sans-serif";
        newNoButton.style.backgroundColor = '#ee5bd1';
        newNoButton.style.color = 'white';
        newNoButton.style.border = 'none';
        newNoButton.style.padding = '15px 25px';

        // Append new buttons to the container
        valentineContainer.appendChild(newNoButton);

        // Position the 'no' button within the visible screen
        function positionNoButton() {
            const buttonWidth = newNoButton.offsetWidth;
            const buttonHeight = newNoButton.offsetHeight;

            const maxX = window.innerWidth - buttonWidth;
            const maxY = window.innerHeight - buttonHeight - 30; // Adjusted for the padding

            const randomX = Math.floor(Math.random() * maxX);
            const randomY = Math.floor(Math.random() * maxY);

            newNoButton.style.position = 'absolute';
            newNoButton.style.left = `${randomX}px`;
            newNoButton.style.top = `${randomY}px`;
        }

        positionNoButton(); // Initial position

        // Event listener for the new 'no' button
        newNoButton.addEventListener('click', function () {
            newNoButton.remove(); // Remove the current 'no' button
            positionNoButton(); // Position a new 'no' button
            valentineContainer.appendChild(newNoButton); // Append the new 'no' button
        });
        yesButton.addEventListener('click', function () {
            // Remove all buttons
            yesButton.remove();
            noButton.remove();
            valentineText.remove();
            newNoButton.remove();

            // Change the image again
            valentineImage.src = 'img/happycat.gif'; // replace 'anotherimage.jpg' with the new image source

            // Change the text again
            mainText.textContent = 'SUPER! To widzimy sie 14-stego. Dodaj mnie tez na discordzie: stear';
        });
    });

    // Event listener for the 'yes' button
    yesButton.addEventListener('click', function () {
        // Remove all buttons
        yesButton.remove();
        noButton.remove();
        valentineText.remove();

        // Change the image again
        valentineImage.src = 'img/happycat.gif'; // replace 'anotherimage.jpg' with the new image source

        // Change the text again
        mainText.textContent = 'SUPER! To widzimy sie 14-stego. Dodaj mnie tez na discordzie: stear';
    });
});
