# Trilha JS Developer - Pokedex
## 🆕 Nova Funcionalidade: Modal de Pokémons

[Clique aqui](https://peixoto1990.github.io/js-developer-pokedex/) e veja a Pokedex

Implementei uma nova funcionalidade no projeto que permite exibir informações detalhadas de cada Pokémon por meio de uma **modal interativa e responsiva**.

### 🔍 Como funciona

- Adicionei um **evento de clique** a todos os cards de Pokémon.
- Cada card contém os dados do Pokémon armazenados em **data attributes**, no formato JSON.
- Ao clicar em um card, os dados são capturados e convertidos com `JSON.parse`, permitindo gerar dinamicamente o conteúdo da modal.
- A modal exibe informações básicas como:
  - Nome
  - Número
  - Tipos
  - Imagem
  - Espécie, altura, peso e habilidades

### ✨ Detalhes visuais

- A modal possui **animações suaves** de entrada e saída, proporcionando uma experiência mais fluida ao usuário.
- Também inclui um **botão de fechamento** com função embutida para remover a modal do DOM.
- A estrutura foi pensada para ser **totalmente responsiva**, garantindo boa visualização em diferentes dispositivos.

### 📱 Resultado

Essa funcionalidade transforma a navegação entre os Pokémons em uma experiência mais rica, intuitiva e visualmente agradável — como uma verdadeira Pokédex digital.
