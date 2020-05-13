
/**
 * Linear Search works maily on usorted array 
 * here function accepts two aruguments array and value and if the value is present in array then we need to return its index or -1
 * this logic is being used  for more of the built in function in javascript for eg: indexOf 
 * 
 * TIME COMPLEXITY: worst o(n)   best:o(1)
 */


 

 function linearSearch(arr,val){
    for(let i=0 ; i<arr.length-1 ; i++){
        if(arr[i]=== val){
            return i;
        }
    }
    return -1
 }


 linearSearch([1,2,3,4,5] , 4) // should return 3 as value =4 is on index 3

