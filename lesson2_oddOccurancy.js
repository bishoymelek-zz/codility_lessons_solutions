/*
    v2
    Score: 100%
    This one, is expecting the array to has only one odd integer
    It will sort the array elements,
    and will loop for half the length of the Array (Sorted in pairs already)
    and return the odd one
*/

function solution(A) {
    var arrSorted = A.sort(function (a, b) {
        return (a - b);
    });
    for (var i = 0; i < arrSorted.length; i += 2) {
        if ((arrSorted[i] !== arrSorted[i + 1]) || i + 1 == arrSorted.length) return arrSorted[i];
    }
}
