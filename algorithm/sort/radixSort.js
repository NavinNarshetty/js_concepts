


// Helper functions 

/**
 * 
 * @param {Number} num 
 * @param {Number} i
 * @returns {Number}  // it would return the digit which is present on the location i in the num 
 * for eg getDigits(12345,1) would return 4  (Rember in this function we need to look indexing from the right ) 
 */
function getDigits(num,i) {
    return Math.floor(Math.abs(num)/ Math.pow(10,i)) % 10;
}


/**
 * 
 * @param {Number} num
 * @returns {Number} here we return the count of the digits
 * for eg digitCount(1234) return 4 since it is four digit number 
 */
function digitCount(num){
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}



/**
 * 
 * @param {Array[Numbers]} nums 
 * @return {Number} it would return the count longest digit present in array
 * for eg maxDigits([1,22,333,4444]) would return 4 since 4444 is the longest digit number
 */
function maxDigits(nums) {
    let maxdigit =0;
    for(i=0;i<nums.length;i++){
        maxdigit = Math.max(maxdigit,digitCount(nums[i]));
    }
    return maxdigit;
}



// Logic

/**
 * 
 * @param {Array[Number]} nums
 * @returns {Array} would return a sorted array 
 */
function radixSort(nums) {
    let maxdigit = maxDigits(nums);
    for(k=0;k<maxdigit;k++){
        let digitBucketArray = Array.from({length:'10'}, ()=>[]);
        for(i=0;i<nums.length;i++){
            let digit= getDigits(nums[i],k);
            digitBucketArray[digit].push(nums[i]);
        }
        nums = [].concat(...digitBucketArray);
    }
    return nums;
}