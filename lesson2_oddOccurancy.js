/*
    v1
    Score: 55%
    Performance tests for big arrays failed
*/

function solution(A) {
    for (var i = 0; i < A.length; i++) {
        var found = A.filter((item, index) => A[i] === item);
        if (found.length === 1) return A[i]
    }
}
