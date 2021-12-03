read('data.txt', solve1).then(console.log);
// read('data.txt', solve2).then(console.log);

function solve1(data) {
    console.log(data);
    let eRate = '', gammaRate = '';
    let mostCommonBits = buildObj(data[0]);
    for(let i = 0; i < data.length; i++) {
        for(let j = 0; j < data[i].length; j++) {
            let [zero, one] = mostCommonBits[`position-${j}`];
            if(data[i][j] === '1') one++;
            else if(data[i][j] === '0') zero++;
            mostCommonBits[`position-${j}`] = [zero, one];
        }
    }
    let keys = Object.keys(mostCommonBits);
    for(const key in keys) {
        let [zero, one] = mostCommonBits?.[keys[key]];
        if(zero > one) {
            gammaRate += '0';
            eRate += '1';
        } else {
            gammaRate += '1';
            eRate += '0';
        }
    }
    return binaryConvert(eRate) * binaryConvert(gammaRate);
}

function buildObj(singleBinaryString) {
    let out = {};
    for(let i = 0; i < singleBinaryString.length; i++) {
        out[`position-${i}`] = [0, 0];
    }
    return out;
}

function solve2(data) {
    console.log(data);
}

function binaryConvert(input) {
    let out = 0;
    let rate = 1;
    for(let i = input.length - 1; i >= 0; i--) {
        let curr = parseInt(input[i]);
        out += curr === 1
            ? rate
            : 0;
        rate *= 2;
    }
    return out;
}