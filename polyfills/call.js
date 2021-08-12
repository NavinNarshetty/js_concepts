
// core functionality 

let nameObject = {
    firstname:"navin",
    lastname:"narshetty"
}

const getFullName = function(state){
    console.log(this.firstname + ' ' + this.lastname + 'from' + ' ' + state);
}

getFullName.call(nameObject , 'India');

//polyfill for call

let obj1= {
    name:'javascript',
    print(){
        return this.name;
    }
}

let obj2 ={
    name:'angular'
}





Function.prototype.myCall = function(obj) {
    obj = obj || global;
    var id = "00" + Math.random();
   while (obj.hasOwnProperty(id)) {
     id = "00" + Math.random();
   }
   console.log(this)
   obj[id] = this;
   let arg=[];
   for(let i=1;i<arguments.length;i++){
        arg.push("arguments[" + i + "]");
   }
  result= eval("obj[id]("+arg+")");
   delete obj[id];
   return result;
 }


Function.prototype.myCall2 = function(obj){             //obj is the parameter that is being passed to our function            
    obj = obj || global                                 //null check for obj 
    console.log(this)                                   
    obj['id'] = this;                                   //i am attaching an id key to object with a pointer to actual function
    let args = [...arguments].slice(1)                  //pass the remaing arguments to function
    return obj['id'](...args)                           //function gets executed
}

// note above mycall function is also done in similar way where you attach a unique id and does not manipulate the actuall object
//also they make use of eval function for it 
//refrence https://blog.usejournal.com/implement-your-own-call-apply-and-bind-method-in-javascript-42cc85dba1b


getFullName.myCall(nameObject,'Eng');

console.log(obj1.print());
console.log(obj1.print.myCall2(obj2));

