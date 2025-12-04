//write a  function that searches for an element in an arrray and return the index , if the element is not present then return -1

let arr = [23, 45, 67, 45, 32, 65];


function findIndex( element) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == element) {
            return i;
        } 
    }
    return -1;

}

var printindex = findIndex(45);
console.log(printindex);