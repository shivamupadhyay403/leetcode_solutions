// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21
var reverse = function(x) {
    const s=x.toString()
let splitstring=s.split("")
    var returnString=""
    var newarry=[];
  var Stringwithoutcommas;
    if(splitstring[0]=="-")
    {
        splitstring.shift()
      newarry=[...splitstring]
      newarry.reverse().unshift("-")
      returnString=newarry.join()
      Stringwithoutcommas=returnString.replace(/,/g, '')
      
    }
    else{
        newarry=[...splitstring]
      newarry.reverse()
            returnString=newarry.join()
                  Stringwithoutcommas=returnString.replace(/,/g, '')
    }
    const reversedInteger=Number(Stringwithoutcommas)
const MAX_VALUE=(2**31-1)
const MIN_VALUE=-(2**31)
if(reversedInteger>MAX_VALUE || reversedInteger<MIN_VALUE){
      return 0
}
   return Number(Stringwithoutcommas)  
   
};