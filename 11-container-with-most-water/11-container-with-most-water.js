/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxValue = 0;
    let leftIndex = 0;
    let rightIndex = height.length - 1;
    let area;
    
    while(rightIndex > leftIndex) {
        area = Math.min(height[leftIndex], height[rightIndex]) * (rightIndex - leftIndex);
        if (area > maxValue) maxValue = area;
        height[leftIndex] > height[rightIndex] ? rightIndex-- : leftIndex++;
    }
    
    return maxValue;
};