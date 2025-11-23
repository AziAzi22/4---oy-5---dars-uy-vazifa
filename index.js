const uuid = require("uuid");
const http = require("http");
const option = {
  "content-type": "application/json",
  "Access-Control-Allow-Origin": "*",
};
const { read_file, write_file } = require("./file_manager/file_manager.js");

const app = http.createServer((req, res) => {
  const reqID = req.url.split("/").pop();

  ///// GET
  // animal

  if (req.method === "GET" && req.url === "/get_all_animals") {
    try {
      const data = read_file("animal.json");
      res.writeHead(200, option);
      res.end(JSON.stringify(data));
    } catch (error) {
      res.writeHead(500, option);
      res.end(
        JSON.stringify({
          message: error.message,
        })
      );
    }
  }

  //// car

  if (req.method === "GET" && req.url === "/get_all_cars") {
    try {
      const data = read_file("car.json");
      res.writeHead(200, option);
      res.end(JSON.stringify(data));
    } catch (error) {
      res.writeHead(500, option);
      res.end(
        JSON.stringify({
          message: error.message,
        })
      );
    }
  }

  /// film

  if (req.method === "GET" && req.url === "/get_all_films") {
    try {
      const films = read_file("film.json");
      res.writeHead(200, option);
      res.end(JSON.stringify(films));
    } catch (error) {
      res.writeHead(500, option);
      res.end(
        JSON.stringify({
          message: error.message,
        })
      );
    }
  }

  /// footballclub

  if (req.method === "GET" && req.url === "/get_all_footballclubs") {
    try {
      const footballclubs = read_file("footballclub.json");
      res.writeHead(200, option);
      res.end(JSON.stringify(footballclubs));
    } catch (error) {
      res.writeHead(500, option);
      res.end(
        JSON.stringify({
          message: error.message,
        })
      );
    }
  }

  ///  game

  if (req.method === "GET" && req.url === "/get_all_games") {
    try {
      const game = read_file("game.json");
      res.writeHead(200, option);
      res.end(JSON.stringify(game));
    } catch (error) {
      res.writeHead(500, option);
      res.end(
        JSON.stringify({
          message: error.message,
        })
      );
    }
  }

  /// fruit

  if (req.method === "GET" && req.url === "/get_all_fruits") {
    try {
      const fruit = read_file("fruit.json");
      res.writeHead(200, option);
      res.end(JSON.stringify(fruit));
    } catch (error) {
      res.writeHead(500, option);
      res.end(
        JSON.stringify({
          message: error.message,
        })
      );
    }
  }

  /// food

  if (req.method === "GET" && req.url === "/get_all_foods") {
    try {
      const food = read_file("food.json");
      res.writeHead(200, option);
      res.end(JSON.stringify(food));
    } catch (error) {
      res.writeHead(500, option);
      res.end(
        JSON.stringify({
          message: error.message,
        })
      );
    }
  }

  /// music

  if (req.method === "GET" && req.url === "/get_all_musics") {
    try {
      const music = read_file("music.json");
      res.writeHead(200, option);
      res.end(JSON.stringify(music));
    } catch (error) {
      res.writeHead(500, option);
      res.end(
        JSON.stringify({
          message: error.message,
        })
      );
    }
  }

  /// GET ONE
  /// animal

  if (req.method === "GET" && req.url === "/get_one_animal/" + reqID) {
    try {
      const animals = read_file("animal.json");
      const foundedAnimal = animals.find((animal) => animal.ID === reqID);
      if (!foundedAnimal) {
        res.writeHead(404, option);
        return res.end(
          JSON.stringify({
            message: "Animal not found",
          })
        );
      }
      res.writeHead(200, option);
      res.end(JSON.stringify(foundedAnimal));
    } catch (error) {
      res.writeHead(500, option);
      res.end(
        JSON.stringify({
          message: error.message,
        })
      );
    }
  }

  // car

  if (req.method === "GET" && req.url === "/get_one_car/" + reqID) {
    try {
      const cars = read_file("car.json");
      const foundedCar = cars.find((car) => car.ID === reqID);
      if (!foundedCar) {
        res.writeHead(404, option);
        return res.end(
          JSON.stringify({
            message: "Car not found",
          })
        );
      }
      res.writeHead(200, option);
      res.end(JSON.stringify(foundedCar));
    } catch (error) {
      res.writeHead(500, option);
      res.end(
        JSON.stringify({
          message: error.message,
        })
      );
    }
  }

  //// film

  if (req.method === "GET" && req.url === "/get_one_film/" + reqID) {
    try {
      const films = read_file("film.json");
      const foundedFIlm = films.find((film) => film.ID === reqID);
      if (!foundedFIlm) {
        res.writeHead(404, option);
        return res.end(
          JSON.stringify({
            message: "Film not found",
          })
        );
      }
      res.writeHead(200, option);
      res.end(JSON.stringify(foundedFIlm));
    } catch (error) {
      res.writeHead(500, option);
      res.end(
        JSON.stringify({
          message: error.message,
        })
      );
    }
  }

  //// food

  if (req.method === "GET" && req.url === "/get_one_food/" + reqID) {
    try {
      const foods = read_file("food.json");
      const foundedFood = foods.find((food) => food.ID === reqID);
      if (!foundedFood) {
        res.writeHead(404, option);
        return res.end(
          JSON.stringify({
            message: "Food not found",
          })
        );
      }
      res.writeHead(200, option);
      res.end(JSON.stringify(foundedFood));
    } catch (error) {
      res.writeHead(500, option);
      res.end(
        JSON.stringify({
          message: error.message,
        })
      );
    }
  }

  ///// footballclub

  if (req.method === "GET" && req.url === "/get_one_footballclub/" + reqID) {
    try {
      const footballclubs = read_file("footballclub.json");
      const foundedClub = footballclubs.find((club) => club.ID === reqID);
      if (!foundedClub) {
        res.writeHead(404, option);
        return res.end(
          JSON.stringify({
            message: "Football Club not found",
          })
        );
      }
      res.writeHead(200, option);
      res.end(JSON.stringify(foundedClub));
    } catch (error) {
      res.writeHead(500, option);
      res.end(
        JSON.stringify({
          message: error.message,
        })
      );
    }
  }

  /// fruit

  if (req.method === "GET" && req.url === "/get_one_fruit/" + reqID) {
    try {
      const fruits = read_file("fruit.json");
      const foundedFruit = fruits.find((fruit) => fruit.ID === reqID);
      if (!foundedFruit) {
        res.writeHead(404, option);
        return res.end(
          JSON.stringify({
            message: "Fruit not found",
          })
        );
      }
      res.writeHead(200, option);
      res.end(JSON.stringify(foundedFruit));
    } catch (error) {
      res.writeHead(500, option);
      res.end(
        JSON.stringify({
          message: error.message,
        })
      );
    }
  }

  //// game

  if (req.method === "GET" && req.url === "/get_one_game/" + reqID) {
    try {
      const games = read_file("game.json");
      const foundedGame = games.find((game) => game.ID === reqID);
      if (!foundedGame) {
        res.writeHead(404, option);
        return res.end(
          JSON.stringify({
            message: "Game not found",
          })
        );
      }
      res.writeHead(200, option);
      res.end(JSON.stringify(foundedGame));
    } catch (error) {
      res.writeHead(500, option);
      res.end(
        JSON.stringify({
          message: error.message,
        })
      );
    }
  }

  // music

  if (req.method === "GET" && req.url === "/get_one_music/" + reqID) {
    try {
      const musics = read_file("music.json");
      const foundedMusic = musics.find((music) => music.ID === reqID);
      if (!foundedMusic) {
        res.writeHead(404, option);
        return res.end(
          JSON.stringify({
            message: "Music not found",
          })
        );
      }
      res.writeHead(200, option);
      res.end(JSON.stringify(foundedMusic));
    } catch (error) {
      res.writeHead(500, option);
      res.end(
        JSON.stringify({
          message: error.message,
        })
      );
    }
  }

  /// POST

  // animal

  if (req.method === "POST" && req.url === "/add_animal") {
    try {
      req.on("data", (chunk) => {
        const data = JSON.parse(chunk);
        const dataFile = read_file("animal.json");
        const { name, type, habitat } = data;

        dataFile.push({
          id: uuid.v4(),
          name,
          type,
          habitat,
        });
        write_file("animal.json", dataFile);
        res.writeHead(201, option);
        res.end(
          JSON.stringify({
            message: "Added new Animal",
          })
        );
      });
    } catch (error) {
      res.writeHead(500, option);
      res.end(
        JSON.stringify({
          message: error.message,
        })
      );
    }
  }

// car 

  if (req.method === "POST" && req.url === "/add_car") {
    try {
      req.on("data", (chunk) => {
        const data = JSON.parse(chunk);
        const dataFile = read_file("car.json");
        const { name, type, made_in } = data;

        dataFile.push({
          id: uuid.v4(),
          name,
          type,
          made_in,
        });
        write_file("car.json", dataFile);
        res.writeHead(201, option);
        res.end(
          JSON.stringify({
            message: "Added new Car",
          })
        );
      });
    } catch (error) {
      res.writeHead(500, option);
      res.end(
        JSON.stringify({
          message: error.message,
        })
      );
    }
  }

  /// film

    if (req.method === "POST" && req.url === "/add_film") {
    try {
      req.on("data", (chunk) => {
        const data = JSON.parse(chunk);
        const dataFile = read_file("film.json");
        const { name, release, country } = data;

        dataFile.push({
          id: uuid.v4(),
          name,
          release,
          country
        });
        write_file("film.json", dataFile);
        res.writeHead(201, option);
        res.end(
          JSON.stringify({
            message: "Added new Film",
          })
        );
      });
    } catch (error) {
      res.writeHead(500, option);
      res.end(
        JSON.stringify({
          message: error.message,
        })
      );
    }
  }







});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
