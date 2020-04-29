/**
 * sliding window pattern can be used when you want a max sum of the 3 consecutive no in an array , with help of the above pattern
 * we try to create a window and keep comparing it.
 */

/**
 * What we are trying to acheive , [1,3,6,8,9,5,6,7] return 23 since sum [6,8,9] euqal 23;
 */


 function maxsum(arr,num) {
     let maxsum = 0;
     let tempsum =0;

     if(num > arr.length){
         return null;
     }

     for(let i=0; i<num;i++){
         maxsum += arr[i];
     }
     tempsum = maxsum;
     for(let i=num;i<arr.length;i++){
         tempsum = tempsum - arr[i-num] + arr[i]
         maxsum = Math.max(tempsum,maxsum)
     }
     return maxsum;
 }

 maxsum([1,3,6,8,9,5,6,7],3)
