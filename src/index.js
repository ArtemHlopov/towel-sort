// You should implement your task here.

module.exports = function towelSort(matrix) {
    let result = [];
    if (!matrix) {
        return [];
    } else {
        matrix.forEach((el) =>
            matrix.indexOf(el) % 2 == 0
                ? el.forEach((a) => result.push(a))
                : el.reverse().forEach((b) => result.push(b))
        );
    }
    return result;
};
