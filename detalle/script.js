document.addEventListener("DOMContentLoaded", function () {
    const characterList = document.getElementById("character-list");
  
    const apiUrl = "https://rickandmortyapi.com/api/character/";
  
    // Función para cargar un personaje al azar
    function loadRandomCharacter() {
      fetch(apiUrl + Math.floor(Math.random() * 671))
        .then((response) => response.json())
        .then((data) => {
          displayCharacter(data);
        })
        .catch((error) => {
          console.error("Error al obtener el personaje:", error);
        });
    }
  
    // Función para mostrar la tarjeta de personaje
    function displayCharacter(character) {
      const characterCard = document.createElement("div");
      characterCard.className = "character-card";
      characterCard.innerHTML = `
        <h2>${character.name}</h2>
        <img src="${character.image}" alt="${character.name}">
        <p><strong>Especie:</strong> ${character.species}</p>
        <p><strong>Género:</strong> ${character.gender}</p>
        <p><strong>Origen:</strong> ${character.origin.name}</p>
      `;
      characterList.appendChild(characterCard);
    }
  
    // Cargar un personaje al azar cuando se carga la página
    loadRandomCharacter();
  });
  