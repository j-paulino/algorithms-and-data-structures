"use strict";

/**
 * Sorts an array in ascending order using
 * @param {Array} array of items in no particular order.
 * @return {Array} sorted array.
 */
function mergeSort(array) {
    var size = array.length;
    // Base Case
    if (size <= 1) return array;

    var mid = parseInt((size) / 2);
    // Get the first half of the array
    var left = mergeSort(array.slice(0, mid));
    var right = mergeSort(array.slice(mid));
    return merge(left, right);
}

/**
 * Merges two arrays
 * @param {Array} left: The first array to merge.
 * @param {Array} right: The second array to merge.
 * @return {Array} The merged array.
 */
function merge(left, right) {
    var result = [];
    // using this for loop like a while, keeps loop vars in one place
    for (var k = 0; left.length && right.length; k++) {
        if (left[0] < right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    // while loops can be replace with arrayC.concat(arrayA, arrayC)
    // but the loops are more memory efficient
    while (left.length) {
        result.push(left.shift());
    }

    while (right.length) {
        result.push(right.shift());
    }

    return result;
}
