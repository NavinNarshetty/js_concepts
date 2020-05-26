

/**
 * 
 * @param {Array} arr 
 * @param {Number} i  index where it needs to be replaced
 * @param {Number} j index wheer it needs to be replaced
 * 
 * 
 * TIME Complexity : o(nlog n)  / Worst is :o(n^2)( this happen when we have sorted array and pivot for only one value,can be avoided by taking the pivot value randomly)
 * Space Complexity: o(n log n)
 */

 

//create a swap funtion 
function swap(arr,i,j){
    let temp = arr[i];
    arr[i]=arr[j];
    arr[j] = temp;
}


//part 1 for find the pivot index 


/**
 * 
 * @param {Array} arr 
 * @param {Number} start 
 * @param {Number} end 
 */
function pivot(arr, start=0, end=arr.length+1){
    //take first value as the pivot value
    let pivot = arr[start];  
    let swapIndex =start;

    for(let i=start+1;i<arr.length;i++){
        if(pivot> arr[i]){
            //increment swapIndex
            swapIndex++
            swap(arr,swapIndex,i);
        }
    }
    swap(arr,start,swapIndex);
    return swapIndex
}


function quickSort(arr,left=0,right=arr.length -1 ){
 //base case for braking th recurssion
 if(left<right){
    //fetching the pivotindex value
    let pivotIndex = pivot(arr,left,right);
    // sorting values present on left of pivotindex value
    quickSort(arr,left,pivotIndex-1);
   
    //sorting values present on right of pivotindex value
    quickSort(arr,pivotIndex+1,right);
 }  
 return arr; 

}

quickSort([4,8,5,7,9,2,1,3])  // would return [1,2,3,4,5,7,8,9]