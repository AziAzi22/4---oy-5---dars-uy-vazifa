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
      const foundedAnimal = animals.find((animal) => animal.id === reqID);
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
      const foundedCar = cars.find((car) => car.id === reqID);
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
      const foundedFIlm = films.find((film) => film.id === reqID);
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
      const foundedFood = foods.find((food) => food.id === reqID);
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
      const foundedClub = footballclubs.find((club) => club.id === reqID);
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
      const foundedFruit = fruits.find((fruit) => fruit.id === reqID);
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
      const foundedGame = games.find((game) => game.id === reqID);
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
      const foundedMusic = musics.find((music) => music.id === reqID);
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
          country,
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

  /// food

  if (req.method === "POST" && req.url === "/add_food") {
    try {
      req.on("data", (chunk) => {
        const data = JSON.parse(chunk);
        const dataFile = read_file("food.json");
        const { name, type, country } = data;

        dataFile.push({
          id: uuid.v4(),
          name,
          type,
          country,
        });
        write_file("food.json", dataFile);
        res.writeHead(201, option);
        res.end(
          JSON.stringify({
            message: "Added new Food",
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
  // footballclub

  if (req.method === "POST" && req.url === "/add_footballclub") {
    try {
      req.on("data", (chunk) => {
        const data = JSON.parse(chunk);
        const dataFile = read_file("footballclub.json");
        const { name, stadium, country } = data;

        dataFile.push({
          id: uuid.v4(),
          name,
          stadium,
          country,
        });
        write_file("footballclub.json", dataFile);
        res.writeHead(201, option);
        res.end(
          JSON.stringify({
            message: "Added new Football Club",
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
  /// fruit

  if (req.method === "POST" && req.url === "/add_fruit") {
    try {
      req.on("data", (chunk) => {
        const data = JSON.parse(chunk);
        const dataFile = read_file("fruit.json");
        const { name, color, country } = data;

        dataFile.push({
          id: uuid.v4(),
          name,
          color,
          country,
        });
        write_file("fruit.json", dataFile);
        res.writeHead(201, option);
        res.end(
          JSON.stringify({
            message: "Added new Fruit",
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

  /// game

  if (req.method === "POST" && req.url === "/add_game") {
    try {
      req.on("data", (chunk) => {
        const data = JSON.parse(chunk);
        const dataFile = read_file("game.json");
        const { name, release, type } = data;

        dataFile.push({
          id: uuid.v4(),
          name,
          release,
          type,
        });
        write_file("game.json", dataFile);
        res.writeHead(201, option);
        res.end(
          JSON.stringify({
            message: "Added new Game",
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

  /// music

  if (req.method === "POST" && req.url === "/add_music") {
    try {
      req.on("data", (chunk) => {
        const data = JSON.parse(chunk);
        const dataFile = read_file("music.json");
        const { name, release, singer } = data;

        dataFile.push({
          id: uuid.v4(),
          name,
          release,
          singer,
        });
        write_file("music.json", dataFile);
        res.writeHead(201, option);
        res.end(
          JSON.stringify({
            message: "Added new Music",
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

  /// PUT

  /// animal

  if (req.method === "PUT" && req.url === "/update_animal/" + reqID) {
    try {
      req.on("data", (chunk) => {
        const data = JSON.parse(chunk);
        const dataFile = read_file("animal.json");
        const { name, type, habitat } = data;
        const foundedAnimal = dataFile.find((animal) => animal.id === reqID);

        if (!foundedAnimal) {
          res.writeHead(404, option);
          return res.end(
            JSON.stringify({
              message: "Animal not found",
            })
          );
        }
        dataFile.forEach((animal) => {
          if (animal.id === reqID) {
            animal.name = name ? name : animal.name;
            animal.type = type ? type : animal.type;
            animal.habitat = habitat ? habitat : animal.habitat;
          }
        });

        write_file("animal.json", dataFile);
        res.writeHead(200, option);
        res.end(
          JSON.stringify({
            message: "Animal updated",
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

  if (req.method === "PUT" && req.url === "/update_car/" + reqID) {
    try {
      req.on("data", (chunk) => {
        const data = JSON.parse(chunk);
        const dataFile = read_file("car.json");
        const { name, type, made_in } = data;
        const foundedCar = dataFile.find((car) => car.id === reqID);

        if (!foundedCar) {
          res.writeHead(404, option);
          return res.end(
            JSON.stringify({
              message: "car not found",
            })
          );
        }
        dataFile.forEach((car) => {
          if (car.id === reqID) {
            car.name = name ? name : car.name;
            car.type = type ? type : car.type;
            car.made_in = made_in ? made_in : car.made_in;
          }
        });

        write_file("car.json", dataFile);
        res.writeHead(200, option);
        res.end(
          JSON.stringify({
            message: "car updated",
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

  // film

  if (req.method === "PUT" && req.url === "/update_film/" + reqID) {
    try {
      req.on("data", (chunk) => {
        const data = JSON.parse(chunk);
        const dataFile = read_file("film.json");
        const { name, release, country } = data;
        const foundedFilm = dataFile.find((film) => film.id === reqID);

        if (!foundedFilm) {
          res.writeHead(404, option);
          return res.end(
            JSON.stringify({
              message: "Film not found",
            })
          );
        }
        dataFile.forEach((film) => {
          if (film.id === reqID) {
            film.name = name ? name : film.name;
            film.release = release ? release : film.release;
            film.country = country ? country : film.country;
          }
        });

        write_file("film.json", dataFile);
        res.writeHead(200, option);
        res.end(
          JSON.stringify({
            message: "Film updated",
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

  // food

  if (req.method === "PUT" && req.url === "/update_food/" + reqID) {
    try {
      req.on("data", (chunk) => {
        const data = JSON.parse(chunk);
        const dataFile = read_file("food.json");
        const { name, type, country } = data;
        const foundedFood = dataFile.find((Food) => Food.id === reqID);

        if (!foundedFood) {
          res.writeHead(404, option);
          return res.end(
            JSON.stringify({
              message: "Food not found",
            })
          );
        }
        dataFile.forEach((food) => {
          if (food.id === reqID) {
            food.name = name ? name : food.name;
            food.type = type ? type : food.type;
            food.country = country ? country : food.country;
          }
        });

        write_file("food.json", dataFile);
        res.writeHead(200, option);
        res.end(
          JSON.stringify({
            message: "Food updated",
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

  // footballclub

  if (req.method === "PUT" && req.url === "/update_footballclub/" + reqID) {
    try {
      req.on("data", (chunk) => {
        const data = JSON.parse(chunk);
        const dataFile = read_file("footballclub.json");
        const { name, stadium, country } = data;
        const foundedFoodballClub = dataFile.find((club) => club.id === reqID);

        if (!foundedFoodballClub) {
          res.writeHead(404, option);
          return res.end(
            JSON.stringify({
              message: "Football Club not found",
            })
          );
        }
        dataFile.forEach((footballclub) => {
          if (footballclub.id === reqID) {
            footballclub.name = name ? name : footballclub.name;
            footballclub.stadium = stadium ? stadium : footballclub.stadium;
            footballclub.country = country ? country : footballclub.country;
          }
        });

        write_file("footballclub.json", dataFile);
        res.writeHead(200, option);
        res.end(
          JSON.stringify({
            message: "Football Club updated",
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

  //// fruit

  if (req.method === "PUT" && req.url === "/update_fruit/" + reqID) {
    try {
      req.on("data", (chunk) => {
        const data = JSON.parse(chunk);
        const dataFile = read_file("fruit.json");
        const { name, color, country } = data;
        const foundedFruit = dataFile.find((fruit) => fruit.id === reqID);

        if (!foundedFruit) {
          res.writeHead(404, option);
          return res.end(
            JSON.stringify({
              message: "Fruit not found",
            })
          );
        }
        dataFile.forEach((fruit) => {
          if (fruit.id === reqID) {
            fruit.name = name ? name : fruit.name;
            fruit.color = color ? color : fruit.color;
            fruit.country = country ? country : fruit.country;
          }
        });

        write_file("fruit.json", dataFile);
        res.writeHead(200, option);
        res.end(
          JSON.stringify({
            message: "Fruit updated",
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

  // game

  if (req.method === "PUT" && req.url === "/update_game/" + reqID) {
    try {
      req.on("data", (chunk) => {
        const data = JSON.parse(chunk);
        const dataFile = read_file("game.json");
        const { name, release, type } = data;
        const foundedgame = dataFile.find((game) => game.id === reqID);

        if (!foundedgame) {
          res.writeHead(404, option);
          return res.end(
            JSON.stringify({
              message: "game not found",
            })
          );
        }
        dataFile.forEach((game) => {
          if (game.id === reqID) {
            game.name = name ? name : game.name;
            game.release = release ? release : game.release;
            game.type = type ? type : game.type;
          }
        });

        write_file("game.json", dataFile);
        res.writeHead(200, option);
        res.end(
          JSON.stringify({
            message: "game updated",
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

  /// music

  if (req.method === "PUT" && req.url === "/update_music/" + reqID) {
    try {
      req.on("data", (chunk) => {
        const data = JSON.parse(chunk);
        const dataFile = read_file("music.json");
        const { name, release, singer } = data;
        const foundedmusic = dataFile.find((music) => music.id === reqID);

        if (!foundedmusic) {
          res.writeHead(404, option);
          return res.end(
            JSON.stringify({
              message: "music not found",
            })
          );
        }
        dataFile.forEach((music) => {
          if (music.id === reqID) {
            music.name = name ? name : music.name;
            music.release = release ? release : music.release;
            music.singer = singer ? singer : music.singer;
          }
        });

        write_file("music.json", dataFile);
        res.writeHead(200, option);
        res.end(
          JSON.stringify({
            message: "music updated",
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

  // DELETE

  // animal

  if (req.method === "DELETE" && req.url === "/delete_animal/" + reqID) {
    try {
      const dataFile = read_file("animal.json");
      const foundedAnimal = dataFile.find((animal) => animal.id === reqID);
      if (!foundedAnimal) {
        res.writeHead(404, option);
        return res.end(
          JSON.stringify({
            message: "Animal not found",
          })
        );
      }
      dataFile.forEach((item, index) => {
        if (item.id === reqID) {
          dataFile.splice(index, 1);
        }
      });
      write_file("animal.json", dataFile);
      res.writeHead(200, option);
      res.end(
        JSON.stringify({
          message: "Animal deleted",
        })
      );
    } catch (error) {
      res.writeHead(500, option);
      res.end(
        JSON.stringify({
          message: error.message,
        })
      );
    }
  }

  /// car

  if (req.method === "DELETE" && req.url === "/delete_car/" + reqID) {
    try {
      const dataFile = read_file("car.json");
      const foundedCar = dataFile.find((car) => car.id === reqID);
      if (!foundedCar) {
        res.writeHead(404, option);
        return res.end(
          JSON.stringify({
            message: "car not found",
          })
        );
      }
      dataFile.forEach((item, index) => {
        if (item.id === reqID) {
          dataFile.splice(index, 1);
        }
      });
      write_file("car.json", dataFile);
      res.writeHead(200, option);
      res.end(
        JSON.stringify({
          message: "car deleted",
        })
      );
    } catch (error) {
      res.writeHead(500, option);
      res.end(
        JSON.stringify({
          message: error.message,
        })
      );
    }
  }

  // film

  if (req.method === "DELETE" && req.url === "/delete_film/" + reqID) {
    try {
      const dataFile = read_file("film.json");
      const foundedfilm = dataFile.find((film) => film.id === reqID);
      if (!foundedfilm) {
        res.writeHead(404, option);
        return res.end(
          JSON.stringify({
            message: "film not found",
          })
        );
      }
      dataFile.forEach((item, index) => {
        if (item.id === reqID) {
          dataFile.splice(index, 1);
        }
      });
      write_file("film.json", dataFile);
      res.writeHead(200, option);
      res.end(
        JSON.stringify({
          message: "film deleted",
        })
      );
    } catch (error) {
      res.writeHead(500, option);
      res.end(
        JSON.stringify({
          message: error.message,
        })
      );
    }
  }

  // food

  if (req.method === "DELETE" && req.url === "/delete_food/" + reqID) {
    try {
      const dataFile = read_file("food.json");
      const foundedfood = dataFile.find((food) => food.id === reqID);
      if (!foundedfood) {
        res.writeHead(404, option);
        return res.end(
          JSON.stringify({
            message: "food not found",
          })
        );
      }
      dataFile.forEach((item, index) => {
        if (item.id === reqID) {
          dataFile.splice(index, 1);
        }
      });
      write_file("food.json", dataFile);
      res.writeHead(200, option);
      res.end(
        JSON.stringify({
          message: "food deleted",
        })
      );
    } catch (error) {
      res.writeHead(500, option);
      res.end(
        JSON.stringify({
          message: error.message,
        })
      );
    }
  }

  // footballclub

  if (req.method === "DELETE" && req.url === "/delete_footballclub/" + reqID) {
    try {
      const dataFile = read_file("footballclub.json");
      const foundedfootballclub = dataFile.find(
        (footballclub) => footballclub.id === reqID
      );
      if (!foundedfootballclub) {
        res.writeHead(404, option);
        return res.end(
          JSON.stringify({
            message: "footballclub not found",
          })
        );
      }
      dataFile.forEach((item, index) => {
        if (item.id === reqID) {
          dataFile.splice(index, 1);
        }
      });
      write_file("footballclub.json", dataFile);
      res.writeHead(200, option);
      res.end(
        JSON.stringify({
          message: "footballclub deleted",
        })
      );
    } catch (error) {
      res.writeHead(500, option);
      res.end(
        JSON.stringify({
          message: error.message,
        })
      );
    }
  }

  // fruit

  if (req.method === "DELETE" && req.url === "/delete_fruit/" + reqID) {
    try {
      const dataFile = read_file("fruit.json");
      const foundedfruit = dataFile.find((fruit) => fruit.id === reqID);
      if (!foundedfruit) {
        res.writeHead(404, option);
        return res.end(
          JSON.stringify({
            message: "fruit not found",
          })
        );
      }
      dataFile.forEach((item, index) => {
        if (item.id === reqID) {
          dataFile.splice(index, 1);
        }
      });
      write_file("fruit.json", dataFile);
      res.writeHead(200, option);
      res.end(
        JSON.stringify({
          message: "fruit deleted",
        })
      );
    } catch (error) {
      res.writeHead(500, option);
      res.end(
        JSON.stringify({
          message: error.message,
        })
      );
    }
  }

  // game

  if (req.method === "DELETE" && req.url === "/delete_game/" + reqID) {
    try {
      const dataFile = read_file("game.json");
      const foundedgame = dataFile.find((game) => game.id === reqID);
      if (!foundedgame) {
        res.writeHead(404, option);
        return res.end(
          JSON.stringify({
            message: "game not found",
          })
        );
      }
      dataFile.forEach((item, index) => {
        if (item.id === reqID) {
          dataFile.splice(index, 1);
        }
      });
      write_file("game.json", dataFile);
      res.writeHead(200, option);
      res.end(
        JSON.stringify({
          message: "game deleted",
        })
      );
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

  if (req.method === "DELETE" && req.url === "/delete_music/" + reqID) {
    try {
      const dataFile = read_file("music.json");
      const foundedmusic = dataFile.find((music) => music.id === reqID);
      if (!foundedmusic) {
        res.writeHead(404, option);
        return res.end(
          JSON.stringify({
            message: "music not found",
          })
        );
      }
      dataFile.forEach((item, index) => {
        if (item.id === reqID) {
          dataFile.splice(index, 1);
        }
      });
      write_file("music.json", dataFile);
      res.writeHead(200, option);
      res.end(
        JSON.stringify({
          message: "music deleted",
        })
      );
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
