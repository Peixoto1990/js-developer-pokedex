const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

const maxRecords = 151
const limit = 10
let offset = 0;
function pokemonDescription(pokemon) {
    return `
        <section id="modalPokemon" class="modal-pokemonDescription">
        <button onclick="excluiModal(event)" id="modalPokemonBtn">x</button>
        <div class="pokemonDescription ${pokemon.type}">
            <section class="pokemonDescription-presentation">
                <h2>${pokemon.name}</h2>
                <span class="order">#${pokemon.number}</span>
                <ol class="pokemonDescription-presentationTypes">
                   ${pokemon.types.map((type) => `<li class=${type}>${type}</li>`).join('')}
                </ol>
                <img src=${pokemon.photo} alt=${pokemon.name}>
            </section>
            <section class="pokemonDescription-content">
                <h2>About</h2>
                <table>
                    <tbody>
                        <tr>
                            <th>Species</th>
                            <td>${pokemon.type}</td>
                        </tr>
                        <tr>
                            <th>Height</th>
                            <td>${pokemon.height * 10}cm</td>
                        </tr>
                        <tr>
                            <th>Weight</th>
                            <td>${pokemon.weight / 10}kg</td>
                        </tr>
                        <tr>
                            <th>Abilities</th>
                            ${pokemon.abilities.map((abilitie) => `<td>${abilitie}</td>`).join('')}
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    </section>
    `
}

function convertPokemonToLi(pokemon) {
    return `
        <li data-pokemon=${JSON.stringify(pokemon)} onclick="((event) => {
                const pokemonData = JSON.parse(event.currentTarget.dataset.pokemon);
                const newModal = pokemonDescription(pokemonData);
                document.getElementById('modal').innerHTML = newModal;
                setTimeout(() => {document.getElementById('modalPokemon').classList.add('modal-pokemonDescription-active');}, 10)
            })(event)" class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>

                <img src="${pokemon.photo}"
                     alt="${pokemon.name}">
            </div>
        </li>
    `
}

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML += newHtml
    })
}

loadPokemonItens(offset, limit);

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordsWithNexPage = offset + limit

    if (qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }
})

function excluiModal(event) {
    document.getElementById("modalPokemon").classList.remove('modal-pokemonDescription-active');
    setTimeout(() => {document.getElementById("modalPokemon").remove();}, 300);
}