document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelector('.nav-links');
    const toggleButton = document.createElement('button');
    toggleButton.innerText = 'Menu';
    toggleButton.classList.add('toggle-button');

    document.querySelector('.navbar').insertBefore(toggleButton, navLinks);

    toggleButton.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    const popup = document.getElementById('popup');
    const emailForm = document.getElementById('emailForm');
    const actionType = document.getElementById('actionType');
    const carId = document.getElementById('carId');

    window.openPopup = function(action, car) {
        actionType.value = action;
        carId.value = car;
        popup.style.display = 'block';
    }

    emailForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('userEmail').value;
        const action = actionType.value;
        const car = carId.value;

        // Envoyer les données au serveur via une requête AJAX (utilisez fetch pour moderniser)
        fetch('like_dislike.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                action: action,
                car: car
            })
        }).then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Votre action a été enregistrée. Merci !');
            } else {
                alert('Il y a eu un problème. Veuillez réessayer.');
            }
            popup.style.display = 'none';
        }).catch(error => {
            console.error('Erreur:', error);
            popup.style.display = 'none';
        });
    });
});
