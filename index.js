const uuid = require("uuid");
const http = require("http");
const option = {
  "content-type": "application/json",
  "Access-Control-Allow-Origin": "*",
};

const app = http.createServer((req, res) => {
  const reqID = req.url.split("/").pop();
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
