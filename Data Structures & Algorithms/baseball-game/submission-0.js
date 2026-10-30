class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let record = [];

        for (let i = 0; i < operations.length; i++) {
            if (operations[i] === "+") {
                record.push(record[record.length - 2] + record[record.length - 1])
            } else if (operations[i] === "D") {
                record.push(record[record.length - 1] * 2)
            } else if (operations[i] === "C") {
                record.pop()
            } else {
                record.push(Number(operations[i]))
            }
        }

        const total = record.reduce((sum, n) => sum + n, 0);

        return total;
    }
}
