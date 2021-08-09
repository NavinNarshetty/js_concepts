// core functionality of reduce

const arr = [1,2,3];

// a callback function which is passed to the reducer
const sumReducer = (accumulator, currentValue, index, array) => {
  return accumulator + currentValue;
};

const result = arr.reduce(sumReducer,1);

console.log(result); // result -> 7



const customArray = [1,2,3]

Array.prototype.customReduce =  function (callbackFn , initalValue) {
    if(this == null || this == undefined){                          // this is refering to the array on which the method is called
        throw new Error("Array is undefined");                      //check if the array is null or undefined
    }

    if(callbackFn === null || typeof(callbackFn) != "function" ){   //callbackFn is the callback passed to the reduce method
    throw new Error(`${callbackFn} is not a function`);             // check if its a function 
    }

    if(!this.length){                                               //if we pass an empty array then
        if(arguments.length < 2){                                   //arguments are callbackFn and initalValue 
            throw new Error('No inital value provide')
        }else if(arguments.length == 2){
            return initalValue;                                     //if empty array is passed with initalValue return initalvalue
        }
    }

    

    let initalIndex = 0;                                                                //initalize a valirable at 0 
    let accumulator = arguments.length === 1 ? this[initalIndex++] : initalValue ;      //accumulator is generally a inital value provided , if inital value is not provided then take 1st value of array as stating point

    while(initalIndex < this.length){               
        accumulator = callbackFn(accumulator , this[initalIndex], initalIndex , this);  //store the value in accumulator and then return it
        initalIndex++                                                                   
    }
    return accumulator;
}

const customReducerResult = customArray.customReduce(sumReducer);                             //customResult -> 6
console.log("customReducerResult", customReducerResult)
