// read('sample.txt', solve1).then(console.log);
read('data.txt', solve1).then(console.log);

// read('sample.txt', solve2).then(console.log);
// read('data.txt', solve2).then(console.log);

function solve1(data) {
    console.log(data);
    data = data.join("").split(",").map(d => parseInt(d));
    for(let i = 0; i < 80; i++) {
        let count = 0;
        for(let j = 0; j < data.length; j++) {
            let fish = data[j];
            if(fish - 1 >= 0) {
                fish -= 1;
            } else {
                fish = 6;
                count++;
            }
            data[j] = fish;
        }
        for(let c = 0; c < count; c++) {
            data.push(8);
        }
    }
    console.log(data.length);
}

function solve2(data) {

}