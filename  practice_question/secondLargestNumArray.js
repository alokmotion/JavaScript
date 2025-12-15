// find second largest number in an array


let arr = [20, 30, 40, 500, 100, 60, 10, 20, -90];


function secondLargestNum(arr){
    let FLV = -Infinity;
    let SLV = -Infinity;

    for(let i=0;
        i<arr.length;
        i++
    ){
        console.log(arr[i])
        if(arr[i]>FLV){
            SLV = FLV;
            console.log("this is me SLV", SLV)
            FLV = arr[i];
            console.log("this is me FLV", FLV)
            
        } else if (arr[i]> SLV){
            SLV = arr[i]

        }
    }
    return SLV
}


console.log("second largest = ",secondLargestNum(arr))