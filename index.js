const fs = require("fs");
const csv = require("csvtojson");
const matchesPlayedPerYear = require("./ipl/matchesPlayedPerYear");
const matchesWonPerYearEachTeam = require("./ipl/matchesWonPerYearEachTeam");
const extraRunIn2016 = require("./ipl/extraRunIn2016");
const economicalBowler=require("./ipl/economicalBowler");
const matchPlayedInCity = require("./ipl/matchPlayedInCity");


const MATCHES_FILE_PATH = "./csv_data/matches.csv";
const DELIVERIES_FILE_PATH = "./csv_data/deliveries.csv";
const JSON_OUTPUT_FILE_PATH = "./public/data.json";

function main() {
  csv()
    .fromFile(MATCHES_FILE_PATH)
    .then(matches => {
      csv()
      .fromFile(DELIVERIES_FILE_PATH)
      .then(deliveries => {
        let result = matchesPlayedPerYear(matches);
        let ans1 = matchesWonPerYearEachTeam(matches);
        let ans2 = extraRunIn2016(matches,deliveries);
        let ans3 = economicalBowler(matches,deliveries);
        let ans4 = matchPlayedInCity(matches);
        saveAllData(result,ans1,ans2,ans3,ans4);
      });
    });
}

function saveAllData(result,ans1,ans2,ans3,ans4) {
  const jsonData = {
    matchesPlayedPerYear: result,
    matchesWonPerYearEachTeam: ans1,
    extraRunIn2016: ans2,
    economicalBowler: ans3,
    matchPlayedInCity: ans4
  };
  const jsonString = JSON.stringify(jsonData);
  fs.writeFile(JSON_OUTPUT_FILE_PATH, jsonString, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
}



main();
