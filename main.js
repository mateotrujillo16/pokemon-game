const inquirer = require("inquirer");
const playGame = () => {
  inquirer
    .prompt([{   // pass all the questions in here
      type: "input",
      message: "What is your trainer name?",
      name: "trainerName",
    },
    {
      type: "password",
      message: "Set your password.",
      name: "password"
    },
    {
      type: "list",
      message: "Choose your starting Pokemon!",
      choices: ["Bulbasaur", "Squirtle", "Charmander", "Pikachu"],
      name: "pokemon"
    }
    ])

    .then(res => {
      inquirer
        .prompt([{
          type: "input",
          message: `What would you like to name your ${res.pokemon}`,
          name: "pokemonName"
        }]).then(inqRes => {
          let trainerName = res.trainerName;
          let pokemonType = res.pokemon;
          let pokemonName = inqRes.pokemonName;
          let pokemon_hp = 50;
          let cat_hp = 30;

          console.log(`Welcome ${trainerName}`);
          console.log(`Your ${pokemonType}, ${pokemonName} is ready to fight`)
          console.log(`A wild Caterpie appeared`);
          console.log(`${trainerName}, called ${pokemonName}`);

          battleSequence = (pokemon_hp, cat_hp, pokemonName) => {

            inquirer
              .prompt([{
                type: "list",
                message: "Which move will you attact with?",
                choices: ["Tackle", "Sand Attack", "Glare"],
                name: "attack"
              }])
              .then(res => {
                pokemon_hp -= Math.floor(Math.random() * 10);
                cat_hp -= Math.floor(Math.random() * 10);

                console.log(`${pokemonName}, used ${res.attack}`);
                console.log(`Caterpie has ${cat_hp} health points remaining`);
                console.log(`Caterpie used Tackle`);
                console.log(`${pokemonName}, has ${pokemon_hp} health points remaining`);

                if (pokemon_hp <= 0) {
                  console.log(`${pokemonName} has fainted, you blackout`)
                } else if (cat_hp <= 0) {
                  console.log(`Caterpie fainted. You Won!`);
                } else {
                  battleSequence(pokemon_hp, cat_hp, pokemonName);
                }
              })
          };

          battleSequence(pokemon_hp, cat_hp, pokemonName);
        })
    })
}

playGame();