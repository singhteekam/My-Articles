const express = require("express");
const path = require('path');
const cheerio = require('cheerio');
const request = require('request');

const PORT = process.env.PORT || 3001;

const app = express();


// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Handle GET requests to /api route
// app.get("/api", (req, res) => {
//   res.json({ message: "Hello from server!" });
// });

// All other GET requests not handled before will return our React app
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../client/build', 'index.js'));
// });


// GET Route for GFG Articles
app.get('/gfg', (req, res) => {

  request('https://auth.geeksforgeeks.org/user/singh_teekam/articles', (err, response, html) => {

    if (!err && response.statusCode == 200) {
      const $ = cheerio.load(html);

      let articles = [];

      $('.contribute-ol .contribute-li a').each(function (i, e) {

        let gfgarticle = {
          articleTitle: $(this).text(),
          articleLink: $(this).attr('href')
        }

        articles[i] = gfgarticle;
      });

      res.send(articles);
    }
    else{
      res.json({totalArticles: "Not found"})
    }
  }); 
});



app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});