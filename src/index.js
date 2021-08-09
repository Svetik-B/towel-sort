
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (matrix == undefined || matrix.length == 0) { return [] }
    let lengthMatrix = matrix.length;
    let newMatrix = [];

    for (let i = 0; i < lengthMatrix; i++) {
        if (i % 2 != 0) {
            matrix[i].reverse();
        }
        matrix[i].forEach(element => {
            newMatrix.push(element)
        });
    }

    return newMatrix;
}
