class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let maxRight = -1;

        for (let i = arr.length - 1; i >= 0; i--) {
            let temp = arr[i]; // 2, 1, 3, 5, 4, 2
            arr[i] = maxRight; // -1, 2, 2, 3, 5, 5
            maxRight = Math.max(maxRight, temp) // 2, 2, 3, 5, 5, 5
        }
        return arr;
    }
}
