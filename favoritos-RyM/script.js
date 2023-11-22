let favoriteCharacters = [];

const favoriteCharactersData = localStorage.getItem("favoriteCharacters");
console.log(favoriteCharactersData);

if (favoriteCharactersData.length || favoriteCharactersData) {
    favoriteCharacters = JSON.parse(favoriteCharactersData);
    console.log(favoriteCharacters);
}

async function getCharactersByName() {
    let idCharacters = "";
    favoriteCharacters.map((id) => {
        idCharacters = idCharacters + id + ","
    });
    idCharacters = idCharacters.slice(0, -1);
    console.log(idCharacters);
    const response = await fetch("https://rickandmortyapi.com/api/character/[" + idCharacters + "]");
    const characters = await response.json();
    return characters;
};

getCharactersByName().then((data) => {
    populateCards(data);
    console.log(data);
});

const favoriteCardContainer = document.querySelector(".contenedor-tarjetas");

function populateCards(characters) {
    characters.map((character) => {
        let favoriteCard = document.createElement("div");
        favoriteCard.setAttribute("class", "tarjetas");
        let favoriteImage = document.createElement("img");
        favoriteImage.setAttribute("src", character.image);
        favoriteImage.setAttribute("alt", character.name);
        favoriteCard.appendChild(favoriteImage);

        let infoContainer = document.createElement("div");
        infoContainer.setAttribute("class", "info-container");
        let characterName = document.createElement("span");
        characterName.setAttribute("class", "personaje-nombre");
        characterName.innerHTML = character.name;
        let characterInfo = document.createElement("p");
        characterInfo.setAttribute("class", "info-personaje");
        characterInfo.innerHTML = character.status + " - " + character.species;
        infoContainer.appendChild(characterName);
        infoContainer.appendChild(characterInfo);
        favoriteCard.appendChild(infoContainer);

        let favoriteHeart = document.createElement("i");
        favoriteHeart.setAttribute("class", "fa-solid fa-heart");
        favoriteHeart.setAttribute("id", "favorito-corazon");
        favoriteCard.appendChild(favoriteHeart);
        let favoriteCircle = document.createElement("span");
        favoriteCircle.setAttribute("class", "circulo");
        favoriteCard.appendChild(favoriteCircle);

        favoriteCardContainer.appendChild(favoriteCard);
    });

};