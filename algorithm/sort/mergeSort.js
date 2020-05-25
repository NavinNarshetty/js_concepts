


// PART 1 OF Merge sort , when you are given 2 sorted array and now you have to merge it

/**
 * 
 * @param {Array} arr1 
 * @param {Array} arr2 
 * 
 * 
 * Time complexity : o(nlog n)  this is the best we can achevie in sorting algorith
 * sppace complexity: o(n)
 * for visiual eg you even refer to https://visualgo.net/bn/sorting
 */
function merge(arr1, arr2) {
    let results = [];
    let i = 0;
    let j =0 ;

    while (i < arr1.length && j < arr2.length) {
        if(arr2[j] > arr1[i]){
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
        }
    }

    while (i< arr1.length) {
        results.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }
    return results;
}


//Part 2 where we split array and created multiple arrays and then sort them and then use merge to merge them, here we make use of recurrsion.

/**
 * 
 * @param {Array} arr 
 */
function mergeSort(arr) {
     if(arr.length <= 1) return arr;
     let mid = Math.floor(arr.length / 2);
     let left = mergeSort( arr.slice(0,mid));
     let right = mergeSort(arr.slice(mid));
     return merge(left,right);
}





