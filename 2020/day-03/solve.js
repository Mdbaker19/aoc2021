let map = [[1, 1], [3, 1], [5, 1], [7, 1], [1, 2]];

read('data.txt', solve).then(console.log);

// fetch('sample.txt')
//     .then(response => response.text())
//     .then(data => {
//         let counts = [];
//         map.forEach(path => {
//             counts.push(solve(data, path[0], path[1]));
//         });
//         console.log(counts);
//         console.log(counts.reduce((x, y) => x * y))
//     });

/*
* Right 1, down 1.
  Right 3, down 1. (This is the slope you already checked.)
  Right 5, down 1.
  Right 7, down 1.
  Right 1, down 2.
* */

function solve(data) {
    let counts = [];
    map.forEach(path => {
        counts.push(sub(data, path[0], path[1]));
    });
    return counts.reduce((x, y) => x * y);
}

function sub(input, move, drop) {
    let data = input.split("\n");
    let count = 0;
    let position = 0;
    let limit = data[0].length;
    for(let i = 1; i < data.length; i+=drop) {
        position += move;
        position %= limit; // wrap
        let spot = data[i][position];
        count += spot === '#' ? 1 : 0;
    }
    return count;
}