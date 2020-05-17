
/**
 * In selection sort we tend to push the lowset value in the begining;
 * @param {Array} arr
 * TIME Complexity is :O(n^2);
 * it is better then bubble sort if we want a memory effecient since we do less swap compared to bubble sort;
 *  
 */

function selectionSort(arr) {
    for(let i =0 ; i<arr.length ;i++){
        //setting the lowset item at index 0 initally
        let lowest = i; 
        for( let j= i+1; j< arr.length ;j++){
            if(arr[j] < arr[lowest]){
                //if our current lowest item is greater then the next item in array then we store the new lowset item index
                lowest = j;
            }
        }
        //swap logic 
        if(i !== lowest){
            let temp= arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }

    }
    return arr;
}

selectionSort([3,8,2,5,7]) // should return [2,3,5,7,8]