const http = require("http");
const static = require("node-static");
const querystring = require("node:querystring");

const port = process.env.PORT || 5002;

const file = new static.Server("./exercise");

const server = http.createServer((req, res) => {
  // main route
  if (req.method === "GET" && req.url === "/") {
    file.serveFile("/welcome.html", 200, {}, req, res);
  }
  // form route
  //old: else if (req.method === 'GET' && req.url === '') {
  else if (req.method === "GET" && req.url === "/form") {
    // fill out this route
    file.serveFile("/form.html", 200, {}, req, res);
  }
  // form submission
  //old: else if (req.method === 'POST' && req.url === '') {
  else if (req.method === "POST" && req.url === "/formExerciseSubmit") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      const userdata = querystring.parse(body);
      const { usernameInput: name, emailInput: email } = userdata;

      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(`<p>Thank you for submitting your information: </p>`);
      res.write(`<p>Name: ${name}</p>`);
      res.write(`<p>Email: ${email}</p>`);
      res.end();
    });
  }
  //added just in case
  //404 fallback
  else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<p>404 - Page Not Found</p>");
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
