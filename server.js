const express = require("express");
const os = require("os");

const app = express();
const PORT = 3000;

const gifs = [
  "https://media.giphy.com/media/8TweEdaxxfuElKkRxz/giphy.gif",
  "https://media.giphy.com/media/3ohzdYJK1wAdPWVk88/giphy.gif",
  "https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif",
  "https://media.giphy.com/media/11H5KZzJ2Xn1S8/giphy.gif"
];

app.get("/", (req, res) => {
  const htmlGifs = gifs
    .map(gif => `<img src="${gif}" width="300" style="margin:10px"/>`)
    .join("");

  res.send(`
    <html>
      <head>
        <title>GIF Ingress Demo</title>
      </head>
      <body style="font-family:Arial;text-align:center">
        <h1>Kubernetes Ingress GIF Demo</h1>
        <p>Served by pod: <b>${os.hostname()}</b></p>
        ${htmlGifs}
      </body>
    </html>
  `);
});

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

app.listen(PORT, () => {
  console.log("GIF app running on port 3000");
});
