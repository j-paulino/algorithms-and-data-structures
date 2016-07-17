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
    var result = [],
        i = 0,
        j = 0;
    // using this for loop like a while, keeps loop vars in one place
    while (i <left.length && j <right.length) {
        if (left[i] < right[j]) {
            result.push(left[i++]);
        } else {
            result.push(right[j++]);
        }
    }

    // while loops can be replaced with arrayC.concat(arrayA, arrayC)
    // but the loops are more memory efficient and time efficient. With array.concat
    // a copy of the orini
    while (i < left.length) {
        result.push(left[i++]);
    }

    while (j < right.length) {
        result.push(right[j++]);
    }

    return result;
}
