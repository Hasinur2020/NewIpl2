// This is for Year wise Economical rates It's Start Here
//4th Visualization

function getOption() {
  selectElement = document.querySelector('.input');
  year = selectElement.value;
  console.log(year);
  fetch(`/economical-bowler?season=${year}`)
  .then(op => op.json())
  .then(visualizeData)
  .catch((err) => console.log(err));

  
  //Visualize Accessed Data
  function visualizeData(data) {
    visualizeEconomicalBowler(data.economicalBowler);
    return;
  }


  function visualizeEconomicalBowler(economicalBowler) {
    //mainData = economicalBowler[year];
    console.log(economicalBowler);
    let seriesData = [];
    
    for (let economy in economicalBowler) {
      seriesData.push([economy, economicalBowler[economy]]);
    }
    console.log(seriesData);

    Highcharts.chart("economical-bowler", {
      chart: {
        type: "column"
      },
      title: {
        text: "4. Top Economical Bowlers In " + year
      },
      subtitle: {
        text:
          'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
      },
      xAxis: {
        type: "category",
        title: {
          text: "Bowlers"
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: "Economy"
        }
      },
      tooltip: {
        headerFormat: '<span style="font-size:13px"><b>{point.key}</b></span><table>',
        pointFormat:
          '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.2f} </b></td></tr>',
        footerFormat: "</table>",
        shared: true,
        useHTML: true
      },
      series: [
        {
          name: "Economy",
          data: seriesData,
          dataLabels: {
            enabled: !0,
            rotation: 0,
            color: '#FFFFFF',
            align: 'center',
            format: '{point.y:.2f}',
            y: 25,
            style: {
              fontSize: '13px',
              fontFamily: 'Verdana, sans-serif'
            }
          }
        }
      ]
    });
  }


};







/// Below it is older.......
// function getOption() { 
//   selectElement = document.querySelector('.input'); 
//   year = selectElement.value;
//   console.log(year);
//   userInput(year); 
// }

// function userInput(year) {
//   year = parseInt(year);

//   //Get your Data from data.json file
//   function fetchAndVisualizeData() {
//     fetch("./data.json")
//       .then(r => r.json())
//       .then(visualizeData);
//   }
  
//   fetchAndVisualizeData();
  
//   //Visualize Accessed Data
//   function visualizeData(data) {
//     visualizeEconomicalBowler(data.economicalBowler);
//     return;
//   }

//   function visualizeEconomicalBowler(economicalBowler) {
//     mainData = economicalBowler[year];
//     console.log(mainData);

//     let seriesData = [];
//     for (let economy in mainData) {
//       seriesData.push([economy, mainData[economy]]);
//     }
//     console.log(seriesData);

//     Highcharts.chart("economical-bowler", {
//       chart: {
//         type: "column"
//       },
//       title: {
//         text: "4. Top Economical Bowlers In " + year
//       },
//       subtitle: {
//         text:
//           'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
//       },
//       xAxis: {
//         type: "category",
//         title: {
//           text: "Bowlers"
//         }
//       },
//       yAxis: {
//         min: 0,
//         title: {
//           text: "Economy"
//         }
//       },
//       tooltip: {
//         headerFormat: '<span style="font-size:13px"><b>{point.key}</b></span><table>',
//         pointFormat:
//           '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
//           '<td style="padding:0"><b>{point.y:.2f} </b></td></tr>',
//         footerFormat: "</table>",
//         shared: true,
//         useHTML: true
//       },
//       series: [
//         {
//           name: "Economy",
//           data: seriesData,
//           dataLabels: {
//             enabled: !0,
//             rotation: 0,
//             color: '#FFFFFF',
//             align: 'center',
//             format: '{point.y:.2f}',
//             y: 25,
//             style: {
//               fontSize: '13px',
//               fontFamily: 'Verdana, sans-serif'
//             }
//           }
//         }
//       ]
//     });
//   }
// }
// It's ends here




function fetchAndVisualizeData() {
  fetch("./data.json")
    .then(r => r.json())
    .then(visualizeData);
}

fetchAndVisualizeData();

function visualizeData(data) {
  visualizeMatchesPlayedPerYear(data.matchesPlayedPerYear);
  visualizeMatchesWonPerYearEachTeam(data.matchesWonPerYearEachTeam);
  visualizeExtraRunIn2016(data.extraRunIn2016);
  visualizeMatchPlayedInCity(data.matchPlayedInCity);
  return;
}


// It's for 1st visulazition
function visualizeMatchesPlayedPerYear(matchesPlayedPerYear) {
  
  const seriesData = [];
  for (let year in matchesPlayedPerYear) {
    seriesData.push([year, matchesPlayedPerYear[year]]);
  }
  
  Highcharts.chart("matches-played-per-year", {
    chart: {
      type: "column"
    },
    title: {
      text: "1. Matches Played Per Year"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      title: {
        text: "years"
      },
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Matches"
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:15px"><b>{point.key}</b></span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.0f} </b></td></tr>',
      footerFormat: "</table>",
      shared: true,
      useHTML: true
    },
    series: [
      {
        name: "Matches",
        data: seriesData,
        dataLabels: {
          enabled: !0,
          rotation: 0,
          color: '#FFFFFF',
          align: 'center',
          format: '{point.y:.0f}',
          y: 25,
          style: {
            fontSize: '13px',
            fontFamily: 'Verdana, sans-serif'
          }
        }
      }
    ]
  });
}


// It's for 2nd visualization
function visualizeMatchesWonPerYearEachTeam(matchesWonPerYearEachTeam) {

  const years = [];
  for (let yeardata in matchesWonPerYearEachTeam) {
    years.push(yeardata);
  }
  
  let teamName = [];
  for (let i of years) {
    for (let j in matchesWonPerYearEachTeam[i]) {
      if (!teamName.includes(j)) {
        teamName.push(j);
      }
    }
  }
  
  //modify data accordingly highchartdata    
  let seriesData = [];
  for (let i of teamName) {
    let sortedData = {};
    let data = [];
    sortedData["name"] = i;
    for (let j of years) {
      if (i in matchesWonPerYearEachTeam[j]) {
        data.push(parseInt(matchesWonPerYearEachTeam[j][i]))
      } else {
        data.push(0);
      }
    }
    sortedData["data"] = data;
    seriesData.push(sortedData);
  }

  Highcharts.chart("matches-won-per-year-each-team", {
    chart: {
      type: "column"
    },
    title: {
      text: "2. Number Of Matches Won By All Team Over All The Years Of ipl"
    },
    subtitle: {
      text: 'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      categories: years,
      title: {
        text: "Years"
      },
      crosshair: true
    },
    yAxis: {
      min: 0,
      title: {
        text: "Matches won"
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:15px"><b>{point.key}</b></span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.0f} </b></td></tr>',
      footerFormat: "</table>",
      shared: true,
      useHTML: true
    },
    plotOptions: {
      column: {
        pointPadding: 0.0,
        borderWidth: 1
      }
    },
    series:seriesData
  });
}


// It's for 3rd visualization
function visualizeExtraRunIn2016(extraRunIn2016) {

  let seriesData = [];
  for (let runs in extraRunIn2016) {
    seriesData.push([runs, extraRunIn2016[runs]]);
  }

  Highcharts.chart("extra-run-in-2016", {
    chart: {
      type: "column"
    },
    title: {
      text: "3. Extra Runs By Each Team In 2016"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category",
      title: {
        text: "Teams"
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: "Extra Runs"
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:13px"><b>{point.key}</b></span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.0f} </b></td></tr>',
      footerFormat: "</table>",
      shared: true,
      useHTML: true
    },
    series: [
      {
        name: "Extra Run",
        data: seriesData,
        dataLabels: {
          enabled: !0,
          rotation: 0,
          color: '#FFFFFF',
          align: 'center',
          format: '{point.y:.0f}',
          y: 25,
          style: {
            fontSize: '13px',
            fontFamily: 'Verdana, sans-serif'
          }
        }
      }
    ]
  });
}


// It's for 5th visualization
function visualizeMatchPlayedInCity(matchPlayedInCity) {
  
  let years = [];
  for (year in matchPlayedInCity) {
    years.push(year);
  }

  let cityNames = [];
  for (let i of years) {
    for (let j in matchPlayedInCity[i]) {
      if (!cityNames.includes(j)) {
        cityNames.push(j);
      }
    }
  }
  //modify data accordingly highchartdata   
  let seriesData = [];
  for (let i of cityNames) {
    let sortedData = {};
    let data = [];
    sortedData["name"] = i;
    for (let j of years) {
      if (i in matchPlayedInCity[j]) {
        data.push(parseInt(matchPlayedInCity[j][i]))
      } else {
        data.push(0);
      }
    }
    sortedData["data"] = data;
    seriesData.push(sortedData);
  }

  Highcharts.chart("match-played-in-city", {
    chart: {
      type: "column"
    },
    title: {
      text: "5. Number Of Matches Played In City Over All The Years Of ipl"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
       categories: years,
       title: {
         text: "Year"
       },
    crosshair: true
    },
    yAxis: {
      min: 0,
      title: {
        text: "City"
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:15px"><b>{point.key}</b></span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.0f} </b></td></tr>',
      footerFormat: "</table>",
      shared: true,
      useHTML: true
    },
    plotOptions: {
      column: {
        pointPadding: 0.0,
        borderWidth: 0
      }
    },
    series:seriesData
  });
}