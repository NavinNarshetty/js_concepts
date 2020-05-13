

/**
 * Important point is binarySearch work only on sorted array only then it is faster compared to linearSearch
 * TIME COMPLEXITY: best: o(1)  worst:o(log n)
 */



 function binarySearch(arr,val){
    let start=0;
    let end =arr.length - 1;
    let middle = Math.floor((start + end) /2);
    while (arr[middle] != val && start <= end) {
        if(val < arr[middle]){
            end = middle - 1;
        }else{
            start = middle + 1;
        }
        middle = Math.floor((start + end) /2);
    }
    return arr[middle] === val ? middle : -1;
 }

 binarySearch([1,2,3,4,5,6,7,8] , 7)  // should return 6 



 //scenario

 /**
  * 1st Loop :
  * [1,2,3,4,5,6,7,8]
  *  s     m       e 
  * 
  * 2nd Loop:
  * [1,2,3,4,5,6,7,8]
  *          s m    e
  * 
  * 3rd loop:
  * [1,2,3,4,5,6,7,8]
  *            s m e
  */ 
