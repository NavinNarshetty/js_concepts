
//General working functinality of bind function
const nameObject ={
    firstname:"navin",
    lastname:"narshetty"
}


/**
 * 
 * @param {string} state 
 * @param {string} country 
 */
const printName = function (state,country){
    return console.log(this.firstname + ' ' + this.lastname + ' ' + 'is from' + ' ' + state + ' ' + country);
}

// Assign the printName to a variable and bind the this key to nameObj to get the parameters i.e firstname and lastname
let print = printName.bind(nameObject,'Maha',"India");

//bind usually return a callaback function which needs to be invoked again , hence invoking the function.
print() 

//Output: naveen narshetty is from maha india


// Implementing your own bind function 

/**
 * 
 * @param  {...any} arguements 
 */
Function.prototype.customBind = function(...arguements){
    const callbackFn = this;          // here the this is point to printName function which will be exceuted later ,  arguments are parameter passed in printName function
    let params = arguements.slice(1); // we are doing this to get the additional parameter that are being passed in printName function
    return function(...fnArgs){       // as we know bind will return another function  which needs to be invoked and fnArgs are the parameters passed to it
        callbackFn.apply(arguements[0], [...params, ...fnArgs])   // apply helps us to invoke our callbackFn i.e printName function 
    }
}

let print2 = printName.customBind(nameObject,'Karnataka',);

print2('India');



