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
    res.writeHead(200, option)
    res.end(JSON.stringify(data))
  } catch (error) {
    res.writeHead(500, option);
    res.end(
      JSON.stringify({
        message: error.message,
      })
    )
  }
}

/// film 

if (req.method === "GET" && req.url === "/get_all_films") {
  try {
    const films = read_file("film.json");
    res.writeHead(200, option)
    res.end(JSON.stringify(films))
  } catch (error) {
    res.writeHead(500, option);
    res.end(
      JSON.stringify({
        message: error.message,
      })
    )
  }
}

/// footballclub

if (req.method === "GET" && req.url === "/get_all_footballclubs") {
  try {
    const footballclubs = read_file("footballclub.json");
    res.writeHead(200, option)
    res.end(JSON.stringify(footballclubs))
  } catch (error) {
    res.writeHead(500, option);
    res.end(
      JSON.stringify({
        message: error.message,
      })
    )
  }
}

///  game

if (req.method === "GET" && req.url === "/get_all_games") {
  try {
    const game = read_file("game.json");
    res.writeHead(200, option)
    res.end(JSON.stringify(game))
  } catch (error) {
    res.writeHead(500, option);
    res.end(
      JSON.stringify({
        message: error.message,
      })
    )
  }
}

/// fruit

if (req.method === "GET" && req.url === "/get_all_fruits") {
  try {
    const fruit = read_file("fruit.json");
    res.writeHead(200, option)
    res.end(JSON.stringify(fruit))
  } catch (error) {
    res.writeHead(500, option);
    res.end(
      JSON.stringify({
        message: error.message,
      })
    )
  }
}

/// food

if (req.method === "GET" && req.url === "/get_all_foods") {
  try {
    const food = read_file("food.json");
    res.writeHead(200, option)
    res.end(JSON.stringify(food))
  } catch (error) {
    res.writeHead(500, option);
    res.end(
      JSON.stringify({
        message: error.message,
      })
    )
  }
}


});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
