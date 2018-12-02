/**
Set
A set is just like an array just that it has unique elements in it 
You can perform the following functions on a Set
 Add = Adding an elemnet to the Set
 Remove = Removing element from a set
 Has = Check if there is a element present in a set
 Values = Show all the values in the Set
 Union
 Intersection
 Difference
 SubSet
 Size
 */

function MySet() {
    //collection is the array which is going to be treated as a set
    this.collection = [];

    this.has = (value) => {
        return this.collection.indexOf(value) != -1;
    }

    this.values = () => {
        return this.collection;
    }

    this.add = (value) => {
        return this.has(value) ? false : this.collection.push(value)
    }

    this.remove = (value) => {
        var index = this.collection.indexOf(value);
        return this.has(value) ? this.collection.splice(index,1) : false
    }

    this.size = () => {
       return this.collection.length;
    }

    //this function return the unique values of both the sets
    this.union = (otherSet) => {
        var unionSet = new MySet();
        var firstSet = this.values();
        var secondSet = otherSet.values();
        firstSet.forEach(element => {
            unionSet.add(element);
        });
        secondSet.forEach(value => {
            unionSet.add(value);
        });
        return unionSet;
    }

    //this function returns the common values from both the arrays
    this.intersection = (otherSet) => {
        var intersectionSet = new MySet();
        var firstSet = this.values();
        var secondSet = otherSet.values();
        firstSet.forEach(element => {
            return otherSet.has(value) ? intersectionSet.add(element) : false
        });
        return intersectionSet;
    }

}

var mySet = new MySet();

mySet.add('a');
mySet.add('b');
mySet.add('c');
mySet.remove('c');
console.log("Values are",mySet.values());
console.log("Has",mySet.has('d'));
console.log("Size",mySet.size());

