read('sample.txt', solve1).then(console.log);
// read('data.txt', solve1).then(console.log);

// read('sample.txt', solve2).then(console.log);
// read('data.txt', solve2).then(console.log);

function solve1(data) {
    let map = convertTo9x9Arr(data);
    let pointsArr = data.map(line => {
        return line.split(" ").filter(x => x.split(",").length > 1);
    });
    console.log(pointsArr);
    pointsArr.forEach(pointSet => {
       let [x1, y1] = pointSet[0].split(",");
       let [x2, y2] = pointSet[1].split(",");

    });
}

function solve2(data) {

}