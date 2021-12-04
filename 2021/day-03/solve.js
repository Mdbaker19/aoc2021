// read('data.txt', solve1).then(console.log);
// read('data.txt', solve2).then(console.log);
// read('sample.txt', solve1).then(console.log);
read('sample.txt', solve2).then(console.log);
let tooLow = 175561; //.......ugh
function solve1(data) {
    console.log(data);
    let eRate = '', gammaRate = '';
    let mostCommonBits = getCommonBits(data);
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

function solve2(data) {
    console.log(data);
    let o2 = '', co2 = '';
    let o2List = [], co2List = [];
    let mostCommonValuesPerPositionListCo2 = []; // [1, 0, 1, 0, 1, 1] kinda thing to then pass back over data with this as reference
    let mostCommonValuesPerPositionListO2 = [];
    let mostCommonBits = getCommonBits(data);
    let keys = Object.keys(mostCommonBits);

    console.log(mostCommonBits);
    for(const key in keys) {
        let [zero, one] = mostCommonBits?.[keys[key]];
        let mostCommonValueCo2 = zero >= one ? '0' : '1';
        let mostCommonValueO2 = one >= zero ? '1' : '0';
        mostCommonValuesPerPositionListO2.push(mostCommonValueO2);
        mostCommonValuesPerPositionListCo2.push(mostCommonValueCo2);
    }

    console.log(mostCommonValuesPerPositionListO2);
    console.log(mostCommonValuesPerPositionListCo2);

    // now build the o2 and co2 lists with mostCommonValuesPerPositionListO2 and data
    let index = 0;
    o2 = buildRatingList(mostCommonValuesPerPositionListO2, index, data, o2List, true)[0];
    co2 = buildRatingList(mostCommonValuesPerPositionListCo2, index, data, co2List, false)[0];
    console.log(o2, co2)
    return binaryConvert(o2) * binaryConvert(co2);
}

function buildRatingList(mostCommonValuesPerPosition, index, data, createdRatingList, isO2) {
        console.log(data);
    if(index >= mostCommonValuesPerPosition.length) {
        return data;
    }
    let value;
    if(isO2) {
        value = mostCommonValuesPerPosition[index];
    } else {
        value = mostCommonValuesPerPosition[index] === '1' ? '0' : '1';
    }
    for(let i = 0; i < data.length; i++) {
        let binary = data[i];
        let code = binary[index];
        if(code === value) createdRatingList.push(binary);
    }
    return buildRatingList(mostCommonValuesPerPosition, index + 1, createdRatingList, [], isO2);
}

function getCommonBits(data) {
    let mostCommonBits = buildObj(data[0]);
    for(let i = 0; i < data.length; i++) {
        for(let j = 0; j < data[i].length; j++) {
            let [zero, one] = mostCommonBits[`position-${j}`];
            if(data[i][j] === '1') one++;
            else if(data[i][j] === '0') zero++;
            mostCommonBits[`position-${j}`] = [zero, one];
        }
    }
    return mostCommonBits;
}

function buildObj(singleBinaryString) {
    let out = {};
    for(let i = 0; i < singleBinaryString.length; i++) {
        out[`position-${i}`] = [0, 0];
    }
    return out;
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