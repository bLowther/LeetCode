/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const m = nums1.length;
  const n = nums2.length;
  let med, med1, med2;
  if((m + n) % 2 === 1) {
    med = Math.ceil((m + n) / 2);
  } else {
    med1 = (m + n) / 2;
    med2 = med1 + 1;
  }   
  let merged = [];
  const limit = med || med2;
  let i1 = 0;
  let i2 = 0;
  while (merged.length < limit) {
    if (i2 >= n || nums1[i1] <= nums2[i2]) {
      merged.push(nums1[i1]);
      i1 += 1;
    } else {
      merged.push(nums2[i2]);
      i2 += 1;
    }
  }
  if (med) {
    return merged[med -1]
  } else {
    return Math.fround((merged[med1] + merged[med1 -1]) / 2)
  }
};