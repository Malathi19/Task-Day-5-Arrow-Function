//a) Odd Numbers in an array

var arr1 = []
var arr = [1,2,3,4,5]
var ans1 =  ()=>{
    
    for (i=0;i<=arr.length;i++){
        if ( i%2 !== 0){
            arr1.push(i)
            
        }
       
    }
    console.log(arr1)
}
ans1();

//b) Convert all string to titlecaps in a string array

var ans2 =  ()=>{
    const yourArray = ["apple","banana"];
    const upperCasedArray = String(yourArray).toUpperCase().split(",")
    console.log (upperCasedArray)}

    ans2()

//c) Sum of all numbers in a array


var sum =  ()=>{
    var arr = [1,2,3,4];
    add = 0
    for ( var i in arr){ add= add+arr[i]

    }
    console.log(add)
}
sum()

//d) Return all prime numbers in a array



var a = [5, 9, 63, 29, 35, 6, 55, 23]
var prime = [];

var isPrime = (item)=> {
    var identifier = item / 2;
      for (var j = 2; j <= identifier; j++) {
       if ((item % j) == 0) {
        return false;
       } 
     }
     return true;
}
for (var index = 0; index < a.length; index++) {
  if (isPrime(a[index])) {
      prime.push(a[index])
  }
}

console.log(prime)

//e) Return all the pallendromes in an array



var words = ['foo', 'racecar', 'pineapple', 'porcupine', 'pineenip'];

var arr = [];

var pallendromes =  ()=>{
var str = words.slice(0);
var pal = str.toString().split("").reverse().join("").split(",");


for (let i = 0; i < words.length; i++) {
  for (let k = 0; k < pal.length; k++) {
    if (words[i] == pal[k]) {
      arr.push(words[i])
    }
  }
}
console.log(arr);
}
console.log(pallendromes())