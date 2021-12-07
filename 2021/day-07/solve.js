// read('sample.txt', solve1).then(console.log);
// read('data.txt', solve1).then(console.log);

read('sample.txt', solve2).then(console.log);
// read('data.txt', solve2).then(console.log);

function solve1(data) {
    console.log(data);
    let fuelAmounts = [];
    data = data.join("").split(",");
    for(let i = 0; i < data.length; i++) {
        let start = data[i];
        let cost = 0;
        for(let j = 0; j < data.length; j++) {
            if(i === j) continue;
            cost += Math.abs(start - data[j]);
        }
        fuelAmounts.push(cost);
    }
    return Math.min(...fuelAmounts);
}

function solve2(data) {

}