// read('data.txt', solve1).then(console.log);
read('data.txt', solve2).then(console.log);

function solve1(data) {
    // console.log(data);
    let horizontal = 0;
    let depth = 0;
    for(let i = 0; i < data.length; i++) {
        let [command, amount] = data[i].split(" ");
        amount = parseInt(amount);
        switch (command) {
            case 'forward':
                horizontal += amount;
                break;
            case 'down':
                depth += amount;
                break;
            case 'up':
                depth -= amount;
                break;
        }
    }
    return horizontal * depth;
}

function solve2(data) {
    console.log(data);
    let depth = 0;
    let horizontal = 0;
    let aim = 0;
    for(let i = 0; i < data.length; i++) {
        let [command, amount] = data[i].split(" ");
        amount = parseInt(amount);
        switch (command) {
            case 'forward':
                horizontal += amount;
                depth += (aim * amount);
                break;
            case 'down':
                aim += amount;
                break;
            case 'up':
                aim -= amount;
                break;
        }
    }
    return depth * horizontal;
}