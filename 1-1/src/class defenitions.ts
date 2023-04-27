class RaceCar {
  name: string;
  orderInGame: number;
  position: number;

  constructor(name: string, orderInGame = 0) {
    this.name = name;
    this.orderInGame = orderInGame;
    this.position = -1;
  }
}

class Game {
  carCount: number;
  cars: RaceCar[];

  constructor() {
    this.carCount = 0;
    this.cars = [];
  }

  generateRandom(min = 0, max = 10): number {
    const difference = max - min;
    let rand = Math.random();
    rand = Math.floor(rand * difference);
    rand = rand + min;
    return rand;
  }

  makeGameRules(): void {
    const carCountFromClient=prompt("How many cars do you want?");
    if(!!carCountFromClient) this.carCount = +carCountFromClient
    //Create random order for cars and assign it to cars
    let orders = [...Array(this.carCount).keys()].sort((a, b) => 0.5 - Math.random());
    for (let i = 0; i < this.carCount; i++) {
      let carName = prompt(`Enter car${i + 1} name:`);
      if(!!carName) this.cars.push(new RaceCar(carName, orders[i] + 1));
    }
    //Sorting cars by their orders
    this.cars = this.cars.sort((a, b) => a.orderInGame - b.orderInGame);
  }

  mapSimulator(): void {
    let carCount = this.carCount;
    let cars = this.cars;

    let road = [...Array(300).fill("_"), ...Array(15).fill("x")];
    let ranks: string[] = [];

    while (carCount !== 0) {
      //Dice simulate for each car
      let dices = [];
      for (let i = 0; i < carCount; i++) {
        dices.push(this.generateRandom());
      }
      console.log("Dice:", dices);

      //Moving cars
      let carNumber = 0;
      for (const car of cars) {
        road[car.position] = "_";
        let nextPosition = car.position + dices[carNumber];
        if (nextPosition >= 300) {
          ranks.push(car.name);
          carCount--;
          cars = cars.filter((item) => item.name !== car.name);
          continue;
        }
        if (road[nextPosition] === "_") {
          car.position = nextPosition;
          road[nextPosition] = car.name;
        } else {
          let unluckyCar = road[nextPosition];
          car.position = nextPosition;
          road[nextPosition] = car.name;
          cars.forEach((car) => {
            if (car.name === unluckyCar) car.position = -1;
          });
        }
        carNumber++;
      }
      console.log(road.filter((char) => char != "x").join(""));
    }

    //Mapping Ranks in Friendly look
    ranks = ranks.map(
      (rank, index) =>
        `Rank ${index + 1}: ${rank} ${index === 0 ? "(Winner!!!)" : ""}\n`
    );

    //Displaying new ranks
    for (const rank of ranks) {
      document.getElementById("result")!.innerHTML += `<p>${rank}</p>`;
    }
  }

  play(): void {
    //Clearing result div
    document.getElementById("result")!.innerHTML = "";
    //Generate random rules
    this.makeGameRules();
    //Simulate Game
    this.mapSimulator();
  }
}
