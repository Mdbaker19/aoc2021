read('data.txt', solve).then(console.log);

function solve(data) {
    data = data[0];

    console.log(data);
    // create an array structure and fill it with the position
    // you are at kinda like this im thinking
    /*       s, then v, <, v, >, >, ^, ^, >, v, >
    * [0, 0, 1, 1, 1, 0]
    * [0, 1, 1, 1, 1, 1]
    * [0, 1, 1, 1, 0, 0]
    * */
    let world = getWorldBounds(data);
    console.log(world);
    let spot = [0, 0];
    for(let i = 0; i < data.length; i++) {
        let path = data[i];
        if(path === 'v') spot[0]++;
        else if(path === '^') spot[0]--;
        else if(path === '<') spot[1]--;
        else if(path === '>') spot[1]++;
        let index1 = Math.abs(spot[0]);
        let index2 = Math.abs(spot[1]);
        world[index1][index2] = world[index1][index2]
            ? world[index1][index2]++
            : 1;
    }

    console.log(world);

}

function getWorldBounds(data) {
    let width = 0;
    let height = 0;
    for(let i = 0; i < data.length; i++) {
        let path = data[i];
        if(path === 'v') height++;
        else if(path === '^') height--;
        else if(path === '<') width--;
        else if(path === '>') width++;
    }
    let out = [];
    for(let i = 0; i < Math.abs(height); i++) {
        out[i] = new Array(Math.abs(width));
    }
    return out;
}