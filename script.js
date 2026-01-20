
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