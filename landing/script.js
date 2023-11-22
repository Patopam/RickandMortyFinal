// JavaScript

const apiUrl = 'https://rickandmortyapi.com/api/character'; // URL de la API de Rick and Morty

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // data contiene la información de los personajes de Rick and Morty
    const characters = data.results;

    // Lógica para crear el carrusel de imágenes
    const carousel = document.getElementById('carousel');

    characters.forEach(character => {
      const img = document.createElement('img');
      img.src = character.image;
      img.alt = character.name;
      carousel.appendChild(img);
    });
  })
  .catch(error => console.error('Error al cargar datos de la API:', error));
