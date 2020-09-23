const roads = [
  "Дом Алисы-Дом Боба",
  "Дом Алисы-Почта",
  "Дом Дарии-Дом Эрни",
  "Дом Эрни-дом Греты",
  "Дом Греты-Магазин",
  "Рынок-Почта",
  "Рынок-Ратуша",
  "Дом Алисы-Склад",
  "Дом Боба-Ратуша",
  "Дом Дарии-Ратуша",
  "Дом Греты-Ферма",
  "Рынок-Ферма",
  "Рынок-Магазин",
  "Магазин-Ратуша",
];

function buildGraph(edges) {
  let graph = Object.create(null);

  function addEdge(from, to) {
    if (graph[from] == null) {
      graph[from] = [to];
    } else {
      graph[from].push(to);
    }
  }
  for (let [from, to] of edges.map((r) => r.split("-"))) {
    addEdge(from, to);
    addEdge(to, from);
  }
  return graph;
}
const roadGraph = buildGraph(roads);

class VillageState {
  constructor(place, parcels) {
    this.place = place;
    this.parcels = parcels;
  }

  move(destantion) {
    if (!roadGraph[this.place].includes(destantion)) {
      return this;
    } else {
      let parcels = this.parcels
        .map((p) => {
          if (p.place != this.place) return p;
          return { place: destantion, adress: p.adress };
        })
        .filter((p) => p.place != p.adress);
      return new VillageState(destantion, parcels);
    }
  }
}

function runRobot(state, robot, memory) {
  for (let turn = 0; ; turn++) {
    if (state.parcels.length == 0) {
      console.log(`Выполнено за ${turn} Ходов`);
      break;
    }
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
    console.log(`Переход в направлении ${action.direction}`);
  }
}

function randomPick(array) {
  let choice = Math.floor(Math.random() * array.length);
  return array[choice];
}

function randomRobot(state) {
  return { direction: randomPick(roadGraph[state.place]) };
}
