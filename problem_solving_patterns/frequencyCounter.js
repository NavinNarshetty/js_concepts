/**
 * We should follow this patter when we have o(n^2) in our solution it help us to simplfy the solution to only o(N)
 * so where does this patter can be used 
 */

 /**
  * consider a case where in we have to write a function which accepts 2 array and we need to compared them where array1 value squared
  * should be present in array2 
  * for e.g compare([1,2,3] , [1,4,9])  should return true
  * compare([1,2,3] , [4,9,1]) return true irrespective of the order it should return true
  * compare([1,2,3] , [1,4]) return false diffrent length
  */


  /**
   * considering from the above scenario how we use the pattern
   */

   function compare(arr1,arr2){

    if(arr1.length !== arr2.length){
        return false;
    }
    // create a new objects to store the values
    let frequency_counter1={};
    let frequency_counter2={};

    //loop over arr1
    for(let key of arr1){
        //store the vales of array as key if key reoocured then increment with one 
        frequency_counter1[key] = (frequency_counter1[key] || 0) + 1
    }
    // loop over arr2
    for(let key of arr2){
        frequency_counter2[key] =(frequency_counter2[key] || 0) +1
    }

    // loop over the newly created object to check if the value exits in the other objects and there object.key match
    for(let key in frequency_counter1){
        if(!(key ** 2 in frequency_counter2)){
            return false;
        }
        if(frequency_counter2[key**2] !== frequency_counter1[key]){
            return false;
        }
    }
    return true;

   }

   console.log(compare([1,2,3] , [4,9,1]))


   /**
    * Note : the above solution can also be used for the compare string with valid anagram
    * for e.g : validAnagram('aaz' , 'zaa') true
    * validAnagram('','') true
    * validAnagram('rat', 'car') false
    */

