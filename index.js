const express = require("express");
const app = express();
const port = 8080;

const api_key = "38f9676c";


app.set("view engine" , "ejs")
app.use(express.static("public"));
app.use(express.urlencoded({ extended : true }));

app.listen(port, () => {
    console.log("app is listening your port", port);
});

// app.get("/", (req, res) => {
//     res.render("index" , {movies : []});
// });

// app.get("/search", (req, res) => {
//     res.render("index", { movies: [] });
// });

app.get("/", (req, res) => {
    res.render("index", { movies: [] });
});

app.get("/search", (req, res) => {
    res.render("index", { movies: [] });
});

app.post("/search", async (req, res) => {
    let q = req.body.movie;
    // console.log("Searching for:", q);
    let response = await fetch(`http://www.omdbapi.com/?s=${q}&apikey=${api_key}`);
    let data = await response.json();
    // console.log("API Response:", data);
    res.render("index", { movies: data.Search || [] });
});


app.get("/search/:id" , async (req , res) => {
    let id = req.params.id;
    let response = await fetch(`http://www.omdbapi.com/?apikey=${api_key}&i=${id}`);
    let data = await response.json();
    // console.log("View page data:", data);
    res.render("view" , { movie : data });
});


