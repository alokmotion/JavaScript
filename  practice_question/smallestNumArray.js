// write a function that returns smallest number in an array

let arr = [20, 30, 40, 500, 100, 60, 10, 20, -90]

function sumallestNum(arr){
    let res = Infinity;

    for(let i = 0; i<arr.length; i++){

        if (arr[i]<=res){
           
            res = arr[i]
           
        }
    }
    return res
}

console.log("Largest Number in An Array = " , sumallestNum(arr))