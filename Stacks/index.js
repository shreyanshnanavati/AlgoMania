// Stack basically is works on the pricipal on LIFO (Last In First Out)
// The function being used here are:
//push = pushes the value into the stack
//pop = pops out the top value from the stack
//peek = return the top value form the stack
//length = return the total number of elements in the stack

var Stack = () => {

    this.count = 0;
    this.storage = {};

    this.push = value => {
        this.storage[this.count] = value;
        this.count++;
    }
    
    this.pop = () => {
        if(this.count == 0){
            return undefined;
        }  
        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    this.peek = () => {
        return this.storage[this.count - 1];
    }

    this.countMyStack = () =>{
        return this.count;
    }
}    


