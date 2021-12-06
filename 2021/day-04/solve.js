read('sample.txt', solve1).then(console.log);
// read('data.txt', solve1).then(console.log);

// read('sample.txt', solve2).then(console.log);
// read('data.txt', solve2).then(console.log);

function solve1(data) {
    let [plays, boards] = getPlayAndBoards(data);
    console.log(plays);
    for(let i = 0; i < plays.length; i++) {
        let play = plays[i];
        boards.forEach(board => {
            board.forEach(row => {
                row.forEach(spot => {
                    // set.forEach(spot => {
                        if(spot.val === play) spot.played = true;
                    // });
               });
            });
        });
        let [isWinner, winnerIdx] = checkForWinner(boards);
        if(isWinner) {
            console.log("Winning play : ", play);
            return boards[winnerIdx];
        }
    }
    console.log(boards);
}

function checkForWinner(boards) {
    let isWinner = false;
    let winnerIdx = -Infinity;
    boards.forEach(board => {
        console.log(board);
        board.forEach(row => {
            row.forEach(set => {

            });
        });
    });
    return [isWinner, winnerIdx];
}

function solve2(data) {

}