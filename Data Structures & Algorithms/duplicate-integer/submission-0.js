class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let set = {};

        for (const num of nums) {
            if (!(num in set)) {
                set[num] = 1;
            } else {
                set[num] += 1;
            }

            if (set[num] > 1) {
                return true;
            }
        }
        return false
    }
}
