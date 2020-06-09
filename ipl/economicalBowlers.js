function economicalBowlers(matches,deliveries,requireYear) {
    let bowlerRun = {};
    let bowlerBall = {};
    // It's for calculate the economy rates
    for (let match of matches) {
        if(match.season === requireYear) {
            for (let delivery of deliveries) {
                let total_runs = (parseInt(delivery.total_runs) - (parseInt(delivery.bye_runs) + parseInt(delivery.legbye_runs) + parseInt(delivery.penalty_runs)));
                if (match.id === delivery.match_id) {
                    if (bowlerRun[delivery.bowler]) {
                        bowlerRun[delivery.bowler] += total_runs;
                    } else {
                        bowlerRun[delivery.bowler] = total_runs;
                    }
                    let count = parseInt(delivery.wide_runs) + parseInt(delivery.noball_runs);
                    if (count === 0) {
                        if (bowlerBall[delivery.bowler]) {
                            bowlerBall[delivery.bowler] += 1;
                        } else {
                            bowlerBall[delivery.bowler] = 1;
                        }
                    }
                }
            }
        }
    }
    //next loop for insert bowler name and bowler economy rate in result array
    let bowlerEconomy = {};
    for (let i in bowlerRun) {
        bowlerEconomy[i] = (bowlerRun[i]*6/bowlerBall[i]).toFixed(2)
    }
    console.log(bowlerEconomy);
    let modifiedData = [];
    for (final in bowlerEconomy) {
        modifiedData.push([final,parseFloat(bowlerEconomy[final])]);
    }
    //next function for sorting
    modifiedData.sort(function(a,b) {
        return a[1] - b[1];
    });
    finalData = modifiedData.slice(0,10);
    console.log("finalData",finalData);

    return finalData;
}

module.exports = economicalBowlers;
