const convertTo9x9Arr = data => {
    let out = [];
    for(let i = 0; i < 9; i++) {
        out[i] = new Array(9);
    }
    return out;
}