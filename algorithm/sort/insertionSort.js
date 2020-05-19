

/**
 * 
 * @param {Array} arr
 * the below sort work good when we already have a soted array also when we are working with real time data and we need to insert the data
 * into the array based on some condition.
 * 
 * TIME Complexity:o(n^2); 
 */


function insertionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        for (var j = i-1; j>=0 && arr[j]>element; j--) {
            arr[j+1]= arr[j]
        }
        arr[j+1]=element
        
    }
    return arr;
}