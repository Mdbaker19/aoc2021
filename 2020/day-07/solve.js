// read('data.txt', solve).then(console.log);
read('sample.txt', solve).then(console.log);



// 594 total
let idx = 0;
let containsNoOtherBagsList = {}; // will contain the bag name that has no other bags ?
let bagsSeenSoFar = new Set();
let chainsToGold = new Set();
function solve(data) {
    let bagData = {};
    let count = 0;
    for(let i = 0; i < data.length; i++) {
        let dataArr = data[i].split('bags contain');
        let bagName = dataArr[0].trim();
        bagData[bagName] = dataArr[1].trim();
    }
    console.log(bagData);
    for(let mainBag in bagData) {
        let bags = bagData[mainBag];
        let bagsArr = bags.split(",").map(b => b.trim());
        console.log(bagsArr)
        count += countBags(bagsArr, bagData, mainBag);
        // break;
    }
    return count;
}

// bag name is needed to index the main bag data
function countBags(bagsArr, bagData, parentBag, count = 0) {

    // infinite loop tracker
    idx++;
    // console.log(idx);

    if(containsNoOtherBagsList[bagData[parentBag]]) return count;

    if(chainsToGold.has(parentBag)) {
        chainsToGold.add(bagData[parentBag]);
        console.log(chainsToGold)
        console.log("CHAINS TO GOLD UPDATED TO HAVE THE PARENT")
    }

    // console.log(bagsArr);
    if(hasGoldBag(bagsArr)) {
        console.log("=================");
        console.log(parentBag);
        console.log("Had a gold bag");
        chainsToGold.add(parentBag);
        console.log("========CHAINS TO GOLD GETS NEW BAG ==")
        console.log(chainsToGold)
        console.log("==========")
        console.log(count + " was");
        count++;
        console.log(count + " is");
        console.log("=================");
        bagsArr = takeGoldBagOffList(bagsArr);
    }
    if(bagsArr.length === 1 && bagsArr[0] === 'no other bags.') {
        containsNoOtherBagsList[parentBag] = parentBag;
        console.log(parentBag, " was added to the set");
        console.log(containsNoOtherBagsList);

        bagsSeenSoFar.add(parentBag);
        console.log("Bags seen so far")
        console.log(bagsSeenSoFar);

        return 0;
    }

    bagsSeenSoFar.add(parentBag);
    console.log("Bags seen so far")
    console.log(bagsSeenSoFar);

    for(const bag in bagsArr) {
        let b = parseBagName(bagsArr[bag]);
        if(containsNoOtherBagsList[b]) {
            return count;
        }
        countBags(bagData[b].split(",").map(b => b.trim()), bagData, b, count);
    }
    return count;
}

function parseBagName(bag) {
    return bag.split(" ").filter(name => {
        return isNaN(parseInt(name))
            && (name !== 'bags' && name !== 'bag'
                && name !== 'bags.' && name !== 'bag.');
    }).join(" ");
}

function hasGoldBag(bagsArr) {
    return bagsArr.filter(bag => bag.includes('shiny gold bag')).length > 0;
}

function takeGoldBagOffList(bagsArr) {
    return bagsArr.filter(bag => !bag.includes('shiny gold bag'));
}


/* chains to gold will get the parent bag on the next pass through
    as they are added when the parent ( bagData.parentBag ) directly has shiny gold





 */