class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map();
        let resArr = [];

        for (let i = 0; i < nums.length; i++) {
            let difference = target - nums[i];

            if (map.has(difference)) {
                resArr.push(map.get(difference), i);
            } else {
                map.set(nums[i], i);
            }
        }
        return resArr;
    }
}