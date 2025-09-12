//Exercise 1
function gretter(myArray, counter){
    let greetText = 'Hello ';

    for(let index = 0; index < myArray.length; index++){
        console.log(greetText + myArray[index]);
    }
}
gretter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);

//Exercise 2
function capitalize(word){
    let [firstLetter, ...restOfWord] = word;
    let upperFirstLetter = firstLetter.toUpperCase();
    for(let i = 0; i < restOfWord.length; i++){
        upperFirstLetter += restOfWord[i];
    }
    return upperFirstLetter;
}
console.log(capitalize('hello'));
console.log(capitalize('henry'));

//Exercise 3
function capitalizedColors(arr){
    let newArr = arr.map(num => capitalize(num));
    return newArr;
}
let colors = ['green', 'red', 'yellow'];
let colors2 = ['brown', 'blue', 'orange'];
console.log(capitalizedColors(colors));
console.log(capitalizedColors(colors2));

//Exercise 4
function filterLessThan20(num){
    return num < 20;
}
let nums = [25, 23, 1, 4, 27, 39, 2];
console.log(nums.filter(filterLessThan20));

//Exercise 5
function calculateSum(total, num){
    return total + num;
}
function calculateProduct(total, num){
    return total * num;
}
let numbers = [1, 2, 3, 4];
console.log(numbers.reduce(calculateSum));
console.log(numbers.reduce(calculateProduct));

//Exercise 6
class Car{
    constructor(model, year){
        this.carname = model;
        this.modelYear = year;
    }

    details(){
        return 'Model: ' + this.carname + ' ' + this.modelYear;
    }
}

class Sedan extends Car{
    constructor(model, year, balance){
        super(model, year);
        this.money = balance;
    }
    info(){
        return this.carname + ' ' + this.modelYear + ' has a balance of $' + this.money + ".00";
    }
}
const car = new Car('Honda', 1978);
console.log(car.details());
const sedan = new Sedan('Volvo', 1986, 30000);
console.log(sedan.info());