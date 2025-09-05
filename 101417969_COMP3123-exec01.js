//question 1
let lowerCase = "hello there";
let newString = "";
for (let i = 0; i < lowerCase.length; i++){
    if((i == 0) || (i >= 1 && lowerCase[i - 1] == " ")){
        newString += lowerCase[i].toUpperCase();
    }
    else{
        newString += lowerCase[i];
    }
}

console.log(newString);

//Question 2
let numArr = [1230, 1567, 1004];
let largest = 0;

for(let i = 0; i < numArr.length; i++){
    if(numArr[i] > largest){
        largest = numArr[i];
    }
}
console.log(largest);

//Question 3
let orderedStr = "Henry";
let reversedStr = "";
if(orderedStr.length <= 3){
    reversedStr = orderedStr;
}
else{
    for(let i = orderedStr.length - 3; i < orderedStr.length; i++){
        reversedStr += orderedStr[i];
    }
    for(let e = 0; e < orderedStr.length - 3; e++){
        reversedStr += orderedStr[e];
    }
}
console.log(reversedStr);

//Question 4

let angle = 93;

if(angle == 90){
    console.log("Right Angle");
}
else if(angle == 180){
    console.log("Straight Angle");
}
else if(angle > 0 && angle < 90){
    console.log("Acute Angle");
}
else if(angle > 90 && angle < 180){
    console.log("Obtuse Angle");
}
else{
    console.log("No Angle");
}
