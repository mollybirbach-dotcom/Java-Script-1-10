  //python -m http.server

function sleep_in(weekday, vacation) {
    if (vacation == true) {
        return true;
    } else if (weekday == true && vacation == false) {
        return false;
    } else if (weekday == false && vacation == false) {
        return true;
    }
}

function monkey_trouble(a_smile, b_smile) {
    if (a_smile == true && b_smile == true || a_smile == false && b_smile == false) {
        return true;
    }
    return false;
}


function string_times(str, n) {
    var answer = ""
    for (let i = 0; i < n; i++) {
        answer = answer + str;
    }
    return answer;
}

function front_times(str, n) {
    var answer = ""
    for (let i = 0; i < n; i++) {
        answer = answer + str.substring(0, 3)
    }
    return answer;
}

function string_bits(str) {
    var anwser = ""
    for (let i = 0; i < str.length; i++) {
        if (i % 2 == 0) {
            anwser = anwser + str.substring(i, i + 1)
        }
    }
    return anwser;
}


function caughtSpeeding(int, birthday) {
    let min = 60
    let med = 61
    let mid = 80
    let max = 81
    if (birthday == true) {
        min = min + 5
        med = med + 5
        mid = mid + 5
        max = max + 5

    }
    if (int <= min) {
        int = 0
    } else if (int >= med && int <= mid) {
        int = 1
    } else if (int >= max) {
        int = 2
    }
    return int;
}


function fizz_buzz(int){
    if(int%3==0 && int%5 !== 0){
        return "Fizz";
    }else if(int%5==0&&int%3!==0){
        return "Buzz"
    }else if( int%3==0 && int%5==0){
        return "FizzBuzz"
    } else {
        return + int + "!"
    }
}



function specialEleven(num) {
    if (num % 11 == 0 || (num - 1) % 11 == 0) {
        return true;
    }
    return false;
}


function withoutDoubles(num1, num2,noDoubles) {
    let sum = 0;
     if (noDoubles == true && num1==num2 && num1 == 6) {
        num1 = 1
        sum = num1 + num2;
        return sum;
    } else if (noDoubles == true && num1==num2 && num1 !== 6) {
        num1 = num1 + 1
        sum = num1 + num2;
        return sum;
    }
    sum = num1 + num2;
    return sum;
}

function left2(str){
    let anwser = str.substring(2)+ str.substring(0,2);
    return anwser;
}

function firstLast6(arr){
  if(arr[0]==6||arr[arr.length-1]==6){
    return true;
  }
  return false;
}

function has23(arr){
    for(let i=0; i<arr.length;i++){
        if(arr[i]==2||arr[i]==3){
            return true;
        }
    }
    return false;
}


function fix23(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 2 && arr[i + 1] == 3) {
             arr[i + 1] = 0
            return arr;
        }
    }
    return arr;
}

function countYZ(str) {
    str = str.toLowerCase();
    let count = 0
    for (let i = 0; i < str.length; i++) {
        if ((str[i] == "y" || str[i]=="z") && ( i==str.length-1|| str[i + 1] == " ")){
            count = count + 1
        }
    }
    return count;
}

function endOther(stra,strb){
// strings are immutable (unchangeable) so you have 
// to store the new version in seperate strings
let str1 =stra.toLowerCase();
let str2 =strb.toLowerCase();
let index1 = str1.lastIndexOf(str2)
let index2 = str2.lastIndexOf(str1);
// use scratch paper to logic out math
//if the math happens to make str1.length-str2.length = -1 and string 2 is not 
// found at all it would mistakenly return true
//therefore we need to check if index 1 or 2 is equal to -1.
let check1 = (index1 ==str1.length - str2.length) && index1 !== -1;
let check2 = (index2 ==str2.length - str1.length) && index2 !== -1;

if(check1 || check2){
    return true;
}
return false;
}

// 16. starOut
// Return a version of the given string, where for every star (*) 
// in the string the star and the chars immediately to its left and right are gone. 
// So "ab*cd" yields "ad" and "ab**cd" also yields "ad".  Hint: make a new string to store your answer.

// starOut("ab*cd") → "ad"
// starOut("ab**cd") → "ad"
// starOut("sm*eilly") → "silly"

function starOut(str){
    let newstr = "";
    for(let i=0; i<str.length; i++){
        if(str[i]!="*"&& str[i+1]!="*" && str[i-1]!="*"){
            newstr+= str[i];
        }
    }
    return newstr;
}


// 17. getSandwich

// A sandwich is two pieces of bread with something in between. 
// Return the string that is between the first and last appearance of "bread" 
// in the given string, or return the empty string "" if there are not two pieces of bread.
//   You will need to use: indexOf()/lastIndexOf() to solve this problem.  Look up what those functions do.

// getSandwich("breadjambread") → "jam"
// getSandwich("xxbreadturkeybreadyy") → "turkey"
// getSandwich("xxbreadyy") → ""

function getSandwich(str){
let z = ""
let x = str.indexOf("bread");
let y = str.lastIndexOf("bread");
if(x==y||(x==-1||y==-1)){
    return z;
} else {
   return(str.substring(x+5,y)); 
}
}






