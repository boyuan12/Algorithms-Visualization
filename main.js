// All algorithms implemented are based on this medium article: https://medium.com/@codingfreak/top-algorithms-data-structures-concepts-every-computer-science-student-should-know-e0549c67b4ac


ARRAY_NUMS = 50;
MIN_VAL = 15;
MAX_VAL = 500;


// https://www.sitepoint.com/delay-sleep-pause-wait/
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function randomNum() {
    return Math.floor((Math.random() * MAX_VAL) + MIN_VAL);
}

function generateRandomArr(i) {
    var bar = document.createElement("DIV");
    var height = randomNum()
    bar.setAttribute("style", `height: ${height}px`);
    bar.setAttribute("class", "bar");  document.getElementById("bars").appendChild(bar);
    bar.setAttribute("id", i);
    bar.innerHTML = `<span class="length">${height}</span>`
    document.getElementById("bars").appendChild(bar);
    return height;
}

function reArrange(arr) {
    for (let i=0; i < arr.length; i++) {
        document.getElementById(i).setAttribute("style", `height: ${arr[i]}px`);
        document.getElementById(i).innerHTML = `<span class="length">${arr[i]}</span>`
    }
}


async function insertionSort(arr) {
    var newArr = [arr[0]];
    for (let i=1; i<arr.length; i++) {
        // move each unsorted to sorted
        newArr.push(arr[i]);
        newArr.sort(function(a, b) {
            return a - b;
        })
        reArrange(newArr);
        await sleep(20);
    }
}


var arrays = []

for (let i=0; i<ARRAY_NUMS; i++) {
    height = generateRandomArr(i);
    arrays.push(height);
}

insertionSort(arrays);

