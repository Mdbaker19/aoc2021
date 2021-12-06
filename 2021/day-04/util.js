//Day 1
/**
 * take and parse the puzzle input to be a separate and filtered from the weird spacing
 * array for the plays that are to be made on the boards and the boards themselves as a
 * 2d array
 * @param data - string - puzzle input
 * @return {array}
 * */
function getPlayAndBoards(data) {
    let plays = [];
    let boardBuilder = [];
    for(let i = 2; i < data.length; i++) {
        if(data[i] === '') {
            plays.push(boardBuilder);
            boardBuilder = [];
        } else {
            data[i] = data[i].split(" ").filter(d => d).map(d => {
                return {val: d, played: false};
            });
            boardBuilder.push(data[i]);
        }
    }
    plays.push(boardBuilder);
    return [data[0].split(","), plays.map(board => board)];
}