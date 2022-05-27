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
          exercisesFinished: false
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
          exercisesFinished: true
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
          exercisesFinished: true
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
console.log("Stack de cada Explorer:")
explorers.forEach(explorer => {
    console.log(explorer.name)
    console.log(explorer.stack)
});

//Crea una nueva lista con las listas de stacks de cada explorer, usa MAP
console.log("Stack de los Explorers:")
const stackExplorers = explorers.map(explorer => {
    return explorer.stack
});
console.log(stackExplorers)

//Obtén la lista de explorers que tengan en su stack "js", 
//usa FILTER (para validar un elemento en un lista se usa el método includes)
console.log("Stack de los Explorers con JS:")
const stackExplorersJS = explorers.filter((explorers) =>
    explorers.stack.includes('js')
);
const nameExplorersJS = stackExplorersJS.map(explorer => {
  return explorer.name
});
console.log(nameExplorersJS)

//Busca el primer explorer que sea de la CDMX, usa FIND
const CDMX = explorers.find((cities) => cities.city == 'CDMX')
console.log("Explorer en CDMX: \n"+ CDMX.name)

//Obtén la suma de todos los exercises_completed, usa REDUCE = 22
const exercisesExplorers = explorers.map(explorer => {
  return explorer.exercises_completed
});
//console.log(exercisesExplorers)
const sum_exercises = exercisesExplorers.reduce((acc, element) => acc + element, 0)
console.log("Suma de ejercicios realizados por los explorers: " + sum_exercises)

//Obtén la validación si al menos uno de los 
//explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME
const exercisesFinishedExplorers = explorers.map(explorer => {
  return explorer.missions.frontend.exercisesFinished
});
//console.log(exercisesFinishedExplorers)
const finishedFrontend = exercisesFinishedExplorers.some((b) =>  b === true)
console.log("Uno de los explorers completo los ejercicos de Frontend: " + finishedFrontend)

//Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.
const onBoardingFinished = explorers.map(explorer => {
  return explorer.missions.onboarding.isFinished
});
//console.log(onBoardingFinished)
const onBoardingFinish = onBoardingFinished.every((b) =>  b === true)
console.log("Todos los explorers completaron OnBoarding: " + onBoardingFinish)

//COMPLETADO