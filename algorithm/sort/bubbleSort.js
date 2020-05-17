/**
 * 
 * the navie approach without the optimization code, the main reason to say it is not optimized is because we 
 * compare it with undefined and run the loop even if the array is almost sorted or sorted 
 */

/**
 * 
 * @param {Array} arr
 * 
 */

 function bubbleSortWithoutOptimization(arr){
    for(let i=0;i<arr.length;i++){
        for(j=0;j<arr.legth;j++){
            //swap the element on comparison
            if(arr[j]> arr[j+1]){
                let temp= arr[j];
                arr[j]=arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;

 }



 bubbleSortWithoutOptimization([2,5,8,3,4]) // should return [2,3,4,5,8] 




/**
 * in bubble sort we tend to push the biggest value at the end of the array
 * @param {Array} arr
 * @returns {Array} //sorted array
 * 
 * below function helps to sort the array and we avoid the extra loops if the aray is alomst sorted with noSwap variable,
 * Also on each loop we reduce the comparision. 
 * 
 * TIME Complexity :O(n^2)
 */
function bubbleSortWithOptimization(arr){
    let noswap;
    for(let i= arr.length; i>0; i--){
        noswap = true;
        for(let j=0;j<i-1;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j]= arr[j+1];
                arr[j+1] = temp;
                noswap = false;
            }
           
        }
         if(noswap) break;
    }
    return arr;
}
bubbleSortWithOptimization([2,3,7,4,5]);