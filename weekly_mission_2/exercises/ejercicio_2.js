const explorers = [
    {
      name: "Roberto",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Juan",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Dulce",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ];
//Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH
console.log("Nombre de los Explorers a continuacion:")
explorers.forEach(explorer => {
    console.log(explorer.name)
});

//Imprime el stack de cada explorer, usa FOR EACH
console.log("Stack de los Explorers a continuacion:")
explorers.forEach(explorer => {
    console.log(explorer.stack)
});

//Crea una nueva lista con las listas de stacks de cada explorer, usa MAP
//explorers.stack.map(stk => )