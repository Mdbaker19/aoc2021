read('data.txt', solve).then(console.log);


// no idea what part 2 is asking
function solve(data) {
    let arr = [];
    data.forEach(ticket => {
        arr.push(test(ticket));
    });
    // return Math.max(...arr);

    arr.sort((x, y) => x - y);
    console.log(arr);
    let start = arr[0];
    let otherSeats = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i + 1] !== start + 1) {
            otherSeats.push(arr[i]);
        }
        start = arr[i];
    }
    console.log(otherSeats);
}

// TEST
// let data = 'FBFBBFFRLR'; // row 44, col 5, seat 357
//
// console.log(test(data));

function test(input) {
    let rowInfo = input.substring(0, 7);
    let columnInfo = input.substring(7);

    let rowRange = [0, 127];
    let colRange = [0, 7];
    let row = 0;
    let col = 0;
    for(let i = 0; i < rowInfo.length; i++) {
        if(rowInfo[i] === 'F') {
            rowRange[1] = ~~(rowRange.reduce((x, y) => x + y) / 2);
        } else {
            rowRange[0] = Math.ceil(rowRange.reduce((x, y) => x + y) / 2);
        }
    }
    row = rowRange[0];

    for(let i = 0; i < columnInfo.length; i++) {
        if(columnInfo[i] === 'L') {
            colRange[1] = ~~(colRange.reduce((x, y) => x + y) / 2);
        } else {
            colRange[0] = Math.ceil(colRange.reduce((x, y) => x + y) / 2);;
        }
    }
    col = colRange[0];

    return (row * 8) + col;
}