const express = require("express");
const app = express();
const port = 8080;


app.set("view engine" , "ejs")
app.use(express.urlencoded({ extended : true }));

app.listen(port, () => {
    console.log("app is listening your port", port);
});

app.get("/", (req, res) => {
    res.send("standard response");
});



