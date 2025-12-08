// write a function that return the number of nagative number in array 

let arr = [2, 4, 6,-4, 3, -5, -20,-20]

function countNagativeNum(arr){
    let count = 0;
    for(let i =0; i<arr.length; i++){
        if(arr[i]<0){
            count++
        }
    }
    return count
}

console.log(countNagativeNum(arr))