// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

 

// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
var findMedianSortedArrays = function(nums1, nums2) {
    const mergedArray = nums1.concat(nums2);
    const sortednewarry = mergedArray.sort((a, b) => a - b);
    let median;
    if(sortednewarry.length%2==0){
              let middleIndexvalue1 = Math.floor(sortednewarry.length / 2);
                   let middleIndexvalue2 = Math.floor(sortednewarry.length / 2)-1;
                let middleValue1 = sortednewarry[middleIndexvalue1]
                  let middleValue2 = sortednewarry[ middleIndexvalue2]
        median=Number(middleValue1)+Number(middleValue2)
        median=median/2
     
    }
    else if(sortednewarry.length%2!=0){
      let middleIndex = Math.floor(sortednewarry.length / 2);
      let middleValue = sortednewarry[middleIndex]
         median=middleValue
    }
    return median
    };