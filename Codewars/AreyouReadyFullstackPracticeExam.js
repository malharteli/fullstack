/*
 * Question 1: Palindrome checks. Returns string of "true" or "false"
 */
function palindrome(str) {
    var tString = "true";
    var fString = "false";
    if (str.split('').reverse().join('').toLowerCase()== str.toLowerCase()){
        return tString;
    } else return fString;


}
