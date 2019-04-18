const express = require("express");
const path = require("path");
const MongoClient = require('mongodb').MongoClient;
const app = express();

// Load local .env variables in development 
if(process.env.NODE_ENV !== "production"){
  require("dotenv").config();
} 

// DB Config
MongoClient.connect(process.env.DB_URL, { useNewUrlParser: true }, (err, client) => {
  if(err) return console.log(err);
  else {
    // Allow access to db connection
    app.locals.db = client.db("network-plus_db");
  }
});

// Register API routes
app.use("/api", require("./routes/api/ports"));

// Serve static assets in production
if(process.env.NODE_ENV === "production"){
  app.use(express.static(path.join(__dirname, "client/build")));
}

app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server listening on port:${PORT}...`));