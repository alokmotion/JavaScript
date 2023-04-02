function whosPaying(name){
   var name = ["Alok", "Ashish", "Abhishek", "Roopesh", "Abhilash"];
   var numberOfPeople = name.length;
   var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
   var randomPerson = name[randomPersonPosition];

   return randomPerson;
}

whosPaying();
