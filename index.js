// code your solution here
function superbowlWin(records){
    const foundRecords = records.find(games => {
        return games.result === "W"
    });
    if(foundRecords){
        return foundRecords.year;
    } else {
        return foundRecords;
    }
}
