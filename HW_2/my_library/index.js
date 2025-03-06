function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomArray(length, min, max) {
    const arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(getRandomInt(min, max));
    }
    return arr;
}

function getRandomBoolean(probability = 0.5) {
    return Math.random() < probability;
}

function getRandomColor() {
    const rgbArray = getRandomArray(3, 0, 255);
    const hexArray = rgbArray.map(num => num.toString(16).padStart(2, '0'));
    return '#' + hexArray.join('')
};

module.exports = {
    getRandomInt,
    getRandomArray,
    getRandomBoolean,
    getRandomColor
};