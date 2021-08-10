//Core functionality 

const arr = [1,2,3,4,5,6,7,8,9]

const greaterThenSix = (item , index , array)=>{
    return item > 6;
}

const result = arr.filter(greaterThenSix);

//polyfill for filter

Array.prototype.myFilter = function(callbackFn){                    //callnackFn is the function that needs to be executed on each item
    if(callbackFn == null || callbackFn === undefined){             //null check on callbackFn
        throw new Error("function is undefined")
    }
    const newarray = [];                                            //initalize a new array
    for (let index = 0; index < this.length; index++) {             //loop over the given array 
        const result = callbackFn(this[index], index , this);       //execute the callbackFn and see if you get the result
        if(result){ 
            newarray.push(this[index])                              //only if you get the result then add to newarray
        }
    }
    return newarray;                                                //return newarray
}

const result2 = arr.myFilter(greaterThenSix);
console.log("result2", result2);                                    //output -> [7,8,9]