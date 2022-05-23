// const characters = window.fetch("https://rickandmortyapi.com/api/character");

// characters.then((variableOne) => {
//     return variableOne.json();
// }).then((variableTwo) => {
//     variableTwo.results.forEach((value) => {
//         window.console.log(value.name);
//     });
// });

async function retrieveCharacters() {
    const characters = await window.fetch("https://rickandmortyapi.com/api/character");
    const charactersJson = await characters.json();
    return charactersJson;
}

async function representCharacters() {
    const container = window.document.querySelector("main.container");
    const characters = await retrieveCharacters();

    characters.results.forEach(function(character) {
        const paragraph = window.document.createElement("p");
        paragraph.innerText = character.name;

        container.appendChild(paragraph);
    });
}

window.addEventListener("load", representCharacters);