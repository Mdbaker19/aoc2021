// read('data.txt', solve1).then(console.log);
// read('sample.txt', solve2).then(console.log);
read('data.txt', solve2).then(console.log);

function solve1(data) {
    console.log(data);
    let increaseCount = 0;
    for(let i = 1; i < data.length; i++) {
        let curr = parseInt(data[i]);
        let prev = parseInt(data[i - 1]);
        if(curr > prev) increaseCount++;
    }
    return increaseCount;
}

function solve2(data) {
    let count = 0;
    data = data.map(x => parseInt(x));
    for(let i = 0; i < data.length - 3; i++) {
        let g1 = [data[i], data[i + 1], data[i + 2]].reduce((x, y) => x + y);
        let g2 = [data[i + 1], data[i + 2], data[i + 3]].reduce((x, y) => x + y);
        count += g2 > g1 ? 1 : 0;
    }
    return count;
}