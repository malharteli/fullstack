//Given two Strings, return true if strings are isomorphic, fale is not. Two strings of isomorphic if you can rewrite every occurence of a character with a different character for as many characters as you want. The only restriction is that when you replace a character, you must replace all other characters of that type.


const solution = (s, t) => {
    // Type your solution here
    let sLen = s.length;
    let tLen = t.length;
    if (sLen!= tLen) return false
    
    let checkObj = {}
    for (let i = 0; i < sLen; i++){
        if (checkObj[sLen[i]]){
            if (checkObj[sLen[i]]!= tLen[i]){
                return false
            }
        }else
            checkObj[sLen[i]] = tLen[i]
    }
    return true
};

// You are at the bottom of a staircase with n stairs. You can jump 1, 2, 3 steps at a time. How many different ways can you jump up the stairs?

// Tribonacci Solution

const solution = (n) => {
    // Type your solution here
    // Tribonacci?
    // Be more efficient
   //if (n<2) return 1
   //if (n===2) return 2
   //return (solution(n-3)+solution(n-2)+solution(n-1))
   
    let countArr = new Array(n+1)
    countArr[0]= 1;
    countArr[1] = 1;
    countArr[2] = 2;
    for (let i=3; i<=n; i++){
        countArr[i] = countArr[i-1]+countArr[i-2]+countArr[i-3]
    }
    return countArr[n]
    
};
