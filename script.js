document.addEventListener('DOMContentLoaded', function () {
    // Get the elements
    const valentineImage = document.getElementById('valentine-image');
    const mainText = document.getElementById('main-text');
    const valentineText = document.getElementById('valentine-text');
    const yesButton = document.getElementById('yes-button');
    const noButton = document.getElementById('no-button');
    const valentineContainer = document.getElementById('valentine-container');

    noButton.addEventListener('click', function () {
        valentineImage.src = 'img/catgun.jpg';

        mainText.textContent = 'Przycisk nie jest tu tylko wizualnie.';

        noButton.remove();
        valentineText.remove();

        const newNoButton = document.createElement('button');
        newNoButton.textContent = 'Nie';
        newNoButton.id = 'new-no-button';

        newNoButton.style.fontSize = '18px';
        newNoButton.style.cursor = 'pointer';
        newNoButton.style.borderRadius = '15px';
        newNoButton.style.fontFamily = "'Comic Sans MS', cursive, sans-serif";
        newNoButton.style.backgroundColor = '#ee5bd1';
        newNoButton.style.color = 'white';
        newNoButton.style.border = 'none';
        newNoButton.style.padding = '15px 25px';

        valentineContainer.appendChild(newNoButton);

        function positionNoButton() {
            const buttonWidth = newNoButton.offsetWidth;
            const buttonHeight = newNoButton.offsetHeight;

            const maxX = window.innerWidth - buttonWidth;
            const maxY = window.innerHeight - buttonHeight - 30;

            const randomX = Math.floor(Math.random() * maxX);
            const randomY = Math.floor(Math.random() * maxY);

            newNoButton.style.position = 'absolute';
            newNoButton.style.left = `${randomX}px`;
            newNoButton.style.top = `${randomY}px`;
        }

        positionNoButton();

        newNoButton.addEventListener('click', function () {
            newNoButton.remove();
            positionNoButton();
            valentineContainer.appendChild(newNoButton);
        });
        yesButton.addEventListener('click', function () {
            yesButton.remove();
            noButton.remove();
            valentineText.remove();
            newNoButton.remove();

            valentineImage.src = 'img/happycat.gif';

            mainText.textContent = 'SUPER! To widzimy się 14-stego. Dodaj mnie też na Discordzie: stear';
        });
    });

    yesButton.addEventListener('click', function () {
        yesButton.remove();
        noButton.remove();
        valentineText.remove();

        valentineImage.src = 'img/happycat.gif';

        mainText.textContent = 'SUPER! To widzimy sie 14-stego. Dodaj mnie tez na discordzie: stear';
    });
});
