//console.log(~1) //invert bits ~1=>-2
//console.log(!true) //invert boolean
var str = "pete";
var obj = {name: "peter", alias: "Spiderman"}
//console.log (typeof(str))
//console.log(str.instanceof());
console.log("alias" in obj);
console.log(obj.alias);
console.log (obj["alias"]);
console.log(4&4);
console.log (4^7);
console.log(4|23);
console.log(1+{})
var i = 1, j=i++;
console.log(j)
console.log(i)
console.log(4<<6)// I have no idea
console.log(4>>3)
console.log(4>>>3)
var data = ["a", "b", "c"];
console.log("0" in data) // can implicitly convert string to index
console.log(1 in data) // index present in data
var objA = {x: "a", y:"b"};
console.log("x" in objA); // key must be fed in as a string
console.log(data instanceof String);
var x = -4;
console.log(x>0 ? x: -x);
console.log(delete 1);
var objB = {x:1};
console.log(objB.hasOwnProperty("x"));
console.log(objB.hasOwnProperty("y"));
console.log(objB.hasOwnProperty("toString")); //inherited property
console.log(objB.toString()); //doesn't actually give the contents of the object
