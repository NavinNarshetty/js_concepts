/**
 * In multiple frequency pattern we run one loops by comparing from the start of the array and end of the array to
 * acheive the faster result
 */

 /**
  * problem statement
  * function which accepts an array and we need to find out the first pair which would give sum of it  as zero
  * assuming it is sorted array
  * e.g [-4,-3,-2,-1,0,1,3,4,7,10]  return [-4,4]
  */


  function sumzero(arr) {
      if(arr.length === 0){
          return 0;
      }
      let left =0;
      let right = arr.length - 1;
      while (left < right) {
          let sum = arr[left] + arr[right];
          if(sum === 0){
              return [arr[left] , arr[right]];
          }else if(sum>0){
              right--;
          }else{
              left++;
          }
      }
  }

  sumzero([-4,-3,-2,-1,0,1,3,4,7,10])




  /**
   * Another good eg of this patter is when we have to find out unique values in the array we could use of this pattern
   * for e.g [1,1,2,3,4,4,5,6,7] should return 7 since 7 values are unique
   * diffrent approach
   * 
   */

   function uniqueCharacters(array) {
        if(array.length === 0) return 0
        let i=0;
        for(let j=1 ; j<array.length ; j++){
            if(array[i] !== array[j]){
                i++;
                array[i] = array[j]
            }
        }
        return i+1;
   }

