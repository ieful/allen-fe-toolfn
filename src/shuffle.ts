// 乱序洗牌算法
function shuffle(array) {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    // 当仍然有元素要洗牌时
    while (currentIndex !== 0) {
        // 选取一个剩余的元素
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // 将它与当前元素交换
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(shuffle(arr));  // 输出乱序数组