// function

const getArrayParams = (...arr) => {
    let max = arr[0];
    let min = arr[0];
    let avg = 0;
    for (const num of arr) {
        num > max ? (max = num) : (min = num);
        avg += num;
    }
    avg /= arr.length;
    return { max, min, avg };
};

const summElementsWorker = (...arr) => {
    return !arr ? 0 : arr.reduce((prev, num) => (prev += num), 0);
};

const differenceMaxMinWorker = (...arr) => {
    return arr.length === 0 ? 0 : Math.max(...arr) - Math.min(...arr);
};

const differenceEvenOddWorker = (...arr) => {
    let sumEvenElement = 0;
    let sumOddElement = 0;
    for (const num of arr) {
        num % 2 === 0 ? (sumEvenElement += num) : (sumOddElement += num);
    }
    return sumEvenElement - sumOddElement;
};

const averageEvenElementsWorker = (...arr) => {
    const numEventArray = [];
    for (const num of arr) {
        if (num % 2 === 0) {
            numEventArray.push(num);
        }
    }
    return getArrayParams(...numEventArray).avg;
};

const makeWork = (arrOfArr, func) => {
    let result = arrOfArr[0][0]
    for (const subArr of arrOfArr) {
        result < func(...subArr) ? result = func(...subArr) : result
    }
    return result
}

const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];


getArrayParams(1, 2, 3, -100, 10); //{ max: 10, min: -100, avg: -16.8 }
summElementsWorker(10, 10, 11, 20, 10); //61
differenceMaxMinWorker(10, 10, 11, 20, 10); //10
differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35); //269
averageEvenElementsWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35); //38
makeWork(arr, averageEvenElementsWorker) // 72
