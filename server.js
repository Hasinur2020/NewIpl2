const express = require('express');
const app = express();
const csv = require("csvtojson");
const economicalBowlers=require("./ipl/economicalBowlers");

const MATCHES_FILE_PATH = "./csv_data/matches.csv";
const DELIVERIES_FILE_PATH = "./csv_data/deliveries.csv";

let PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));


app.get('/economical-bowler', function(req,res) {
    year = req.query.season;
    console.log(year)
    csv()
    .fromFile(MATCHES_FILE_PATH)
    .then(matches => {
        csv()
        .fromFile(DELIVERIES_FILE_PATH)
        .then(deliveries => {
            let economicalBowler = economicalBowlers(matches,deliveries,year);
            console.log(economicalBowler)
            res.json({
                economicalBowler
            });
        });
    });
});


app.listen(PORT, ()=>{
    console.log("server started")
});
