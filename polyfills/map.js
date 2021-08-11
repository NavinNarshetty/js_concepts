//core functionality


const array = [1,2,3,4];

const squareFn = (item,index,array)=>{
    return item * item
}

const result = array.map(squareFn);
console.log(result)


//polyfill of map function 

Array.prototype.myMap = function(callbackFn) {                      //callbackFn is the function that gets executed on each item
    if(callbackFn === null || callbackFn === 'undefined'){          //null check for the callbackFn
        throw new Error(`${callbackFn} is not a function`);         
    }

    if(!this.length){                                               //if length of array is empty then return itself
        return this;
    }
    const newArray = [];                                
    for (let index = 0; index < this.length; index++) {             //loop over the array 
        const result = callbackFn(this[index],index,this);          //excute your callback on each item
        if(result){                                                     
            newArray.push(result);          
        }
    }
    return newArray;                                                //return a new array
}

const result2 = array.myMap(squareFn);                              //output ->[1,4,9,16]
