var output = [];
var count = 1;
function FizBuzz(){
     
    if(count%3 === 0  && count % 5 === 0) {
        output.push("FizBuzz")
    }

   else if (count % 3 === 0) {
        output.push("Fiz")
    } 

    else if (count % 5 ===0 ){
        output.push('Buzz')
    }

       else{
        output.push(count);
    }

count++;
    console.log(output);
}