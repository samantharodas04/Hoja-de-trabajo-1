async function fetchCharacterInfo() {
    try {
        const characterNumber = document.getElementById('characterNumber').value;
        const apiUrl = `https://swapi.dev/api/people/${characterNumber}/`;
        
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }

        const data = await response.json();
        displayCharacterInfo(data);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        displayCharacterInfoError();
    }
}

function displayCharacterInfo(character) {
    const characterInfoContainer = document.getElementById('characterInfo');
    characterInfoContainer.innerHTML = `
        <h2>${character.name}</h2>
        <p><strong>Altura:</strong> ${character.height} cm</p>
        <p><strong>Masa:</strong> ${character.mass} kg</p>
        <p><strong>Color de Pelo:</strong> ${character.hair_color}</p>
        <p><strong>Color de Piel:</strong> ${character.skin_color}</p>
        <p><strong>Color de Ojos:</strong> ${character.eye_color}</p>
        
    `;
}

function displayCharacterInfoError() {
    const characterInfoContainer = document.getElementById('characterInfo');
    characterInfoContainer.innerHTML = '<p>Error al obtener la información del personaje. Inténtalo nuevamente.</p>';
}

// Agregar el evento click al botón
document.getElementById('consultButton').addEventListener('click', function() {
    fetchCharacterInfo();
});
